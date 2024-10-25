import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styles from './src/styles/structure';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import SummaryScreen from './src/screens/SummaryScreen';
import TransactionsScreen from './src/screens/TransactionsScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import uuid from 'react-uuid';
import { useState } from 'react';
import { primaryColor,secondColor } from './src/styles/variables';

//Create the Tab controller
const Tab = createBottomTabNavigator();

export default function App() {

  const [trans, setTrans] = useState([
    {
      id: uuid(),
      name: "MOBILE CHEQUE DEPOSIT",
      state: true,
      amount: '1,349.89',
      date: 'OCT 23, 2024',
      type: 'An online, mobile or telephone banking transaction'
    },
    {
      id: uuid(),
      name: "M/C-CIBC",
      state: false,
      amount: '300.00',
      date: 'OCT 21, 2024',
      type: 'An online, mobile or telephone banking transaction'
    },
    {
      id: uuid(),
      name: "INTERAC ETRNSFR SENT ROSELEE",
      state: false,
      amount: '121.00',
      date: 'OCT 19, 2024',
      type: 'An online, mobile or telephone banking transaction'
    },
    {
      id: uuid(),
      name: "INTERAC ETRNSFR AD RECVD TEENA",
      state: true,
      amount: '100.00',
      date: 'OCT 15, 2024',
      type: 'An online, mobile or telephone banking transaction'
    },
    {
      id: uuid(),
      name: "M/C-CIBC",
      state: false,
      amount: '80.00',
      date: 'OCT 7, 2024',
      type: 'An online, mobile or telephone banking transaction'
    },
    {
      id: uuid(),
      name: "M/C-CIBC",
      state: false,
      amount: '37.00',
      date: 'SEP 29, 2024',
      type: 'An online, mobile or telephone banking transaction'
    },
    {
      id: uuid(),
      name: "M/C-CIBC",
      state: false,
      amount: '80.00',
      date: 'SEP 13, 2024',
      type: 'An online, mobile or telephone banking transaction'
    },
    
  ]);

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Home'
        screenOptions={({ route }) => ({
          tabBarActiveBackgroundColor: primaryColor,
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: secondColor,
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
            <TransactionsScreen {...props} trans={trans} />
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


