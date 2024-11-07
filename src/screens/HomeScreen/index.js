import { Button, StyleSheet, Text, View } from 'react-native';
import { StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BooksList from '../../components/BooksList';
import BookDetail from '../../components/BookDetail';


const Stack = createNativeStackNavigator();

export default function HomeScreen({ navigation, books, handelBorrowedChange }) {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Lists" options={{ title: 'Books', headerShown: false }} >
                {(props) => (
                    <BooksList {...props} books={books} handelBorrowedChange={handelBorrowedChange} />
                )}
            </Stack.Screen>

            <Stack.Screen name="Detail" options={{ title: 'Details' }} component={BookDetail} />
        </Stack.Navigator>
    );
}
