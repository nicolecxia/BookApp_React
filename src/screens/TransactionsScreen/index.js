import { Button, StyleSheet, Text, View } from 'react-native';
import { StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TransList from '../../components/TransList';
import TransDetail from '../../components/TransDetail';


const Stack = createNativeStackNavigator();

export default function TransactionsScreen({ navigation, trans }) {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Lists" options={{ title: 'Lists' }} >
                {(props) => (
                    <TransList {...props} trans={trans} />
                )}
            </Stack.Screen>

            <Stack.Screen name="Detail" options={{ title: 'Details' }} component={TransDetail} />
        </Stack.Navigator>
    );
}
