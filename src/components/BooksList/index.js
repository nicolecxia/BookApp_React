import { Pressable, ScrollView, Text, View, Button, Modal } from "react-native";
import BookItem from "./BookItem";

export default function BooksList({ navigation, books, handelBorrowedChange }) { //当Array作为一个props传递，用{}去destructure
    const handlePostPress = (book) => {
        navigation.navigate('Detail', { book: book, handelBorrowedChange: handelBorrowedChange, books:books });
    }

    return (
        <>
            <ScrollView>
                {books.map((book, index) => {
                    return (//must return JSX
                        <Pressable key={index} onPress={() => handlePostPress(book)}>
                            <BookItem  {...book} handelBorrowedChange={handelBorrowedChange} returnAllowed = {false} />
                        </Pressable>
                    )
                })}
                <View style={{ height: 10 }}></View>
            </ScrollView>
        </>
    );
}