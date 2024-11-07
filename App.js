import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styles from './src/styles/structure';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import BorrowedScreen from './src/screens/BorrowedScreen';
import HomeScreen from './src/screens/HomeScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import uuid from 'react-uuid';
import { useState } from 'react';
import { primaryColor, secondColor } from './src/includs/variables';
import Header from './src/components/Header';
import * as database from './src/database';
import { useEffect } from 'react';

//Create the Tab controller
const Tab = createBottomTabNavigator();

export default function App() {

  const [books, setBooks] = useState([]);
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  //dependencies is null, only execute once
  useEffect(() => {
    // IIFE - Immediately Invoked Function Expression
    (async () => {
      const data = await database.load();
      // dispatch(setPosts(data));
      // console.log(data);
      setBooks(data);

      const updateBorrowedBooks = await data.filter(book => book.borrowed == true);
      // console.log("updateBorrowedBooks:");
      // console.log(updateBorrowedBooks);
      setBorrowedBooks(updateBorrowedBooks)

    })();

  }, [])

  const updateBorrowed = (id, borrowed) => {
    const updateBooks = books.map((book) => {
      if (book.id == id) {
        book.borrowed = !borrowed;
      }
      return book;
    }
    );
    setBooks(updateBooks);

    const updateBorrowedBooks = books.filter(book => book.borrowed == true);
    setBorrowedBooks(updateBorrowedBooks)
  }


  const handelBorrowedChange = async (id, borrowed) => {
    updateBorrowed(id, borrowed);

    //...then update the data on the database
    const updated = await database.update(id, { borrowed: !borrowed });

    if (!updated) {
      //can only send on parameter to payload, if have multiple data, including all of them in an object
      updateBorrowed(id, borrowed);

      Alert.alert('Error', 'There was an error trying to borrow the book!', [{ text: 'OK' }]);
    }
  }

  return (
    <NavigationContainer>
      {/* <View style={styles.container}> */}
      <StatusBar style='auto' />
      <Header />
      <Tab.Navigator
        initialRouteName='Home'
        screenOptions={({ route }) => ({
          tabBarActiveBackgroundColor: primaryColor,
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: secondColor,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'list' : 'list-ul'
            } else if (route.name === 'Borrowed') {
              iconName = 'book'
            }
            return <Icon name={iconName} size={24} color={color} />
          }
        })}
      >
        <Tab.Screen name='Home' options={{ headerShown: false }} >
          {(props) => (
            <HomeScreen {...props} books={books} handelBorrowedChange={handelBorrowedChange} />
          )}
        </Tab.Screen>

        <Tab.Screen name='Borrowed'  options={{ title: 'Borrowed' }} >
          {(props) => (
            <BorrowedScreen {...props} handelBorrowedChange={handelBorrowedChange} borrowedBooks={borrowedBooks} />
          )}
        </Tab.Screen>
      </Tab.Navigator>
      {/* </View> */}
    </NavigationContainer>
  );
}


