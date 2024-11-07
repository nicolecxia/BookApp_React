import { ScrollView, Text, View,Pressable } from 'react-native';
import styles from '../../styles/styles';
import BookItem from '../../components/BooksList/BookItem';

export default function BorrowedScreen({ navigation, handelBorrowedChange, borrowedBooks }) {
    return (
        <ScrollView>
        {borrowedBooks.map((book, index) => {
            return (//must return JSX
                <Pressable key={index} onPress={() => handlePostPress(book)}>
                    <BookItem  {...book} handelBorrowedChange={handelBorrowedChange} returnAllowed = {true} />
                </Pressable>
            )
        })}
        <View style={{ height: 10 }}></View>
    </ScrollView>

    );
}
