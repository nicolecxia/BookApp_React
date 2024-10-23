import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styles from './src/styles/structure';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import SummaryScreen from './src/screens/SummaryScreen';
import TransactionsScreen from './src/screens/TransactionsScreen';
import Icon from 'react-native-vector-icons/FontAwesome';


//Create the Tab controller
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={({ route }) => ({
        tabBarActiveBackgroundColor: 'dodgerblue',
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'grey',
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Transactions') {
            iconName = focused ? 'list' : 'list-ul'
          } else if (route.name === 'Summary') {
            iconName = 'bank'
          }
          return <Icon name={iconName} size={24} color={color} />
        }
      })}
    >
   <Tab.Screen name='Transactions' >
        {(props) => (
          <TransactionsScreen {...props} />
        )}
      </Tab.Screen>

      <Tab.Screen name='Summary' >
        {(props) => (
          <SummaryScreen {...props} />
        )}
      </Tab.Screen>
    </Tab.Navigator>
  </NavigationContainer>
  );
}


