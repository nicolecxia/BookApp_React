import { Text, View, Image, Button, ScrollView } from "react-native";
import styles from "../../styles/styles";
import { useState } from "react";
import { Alert } from "react-native";

export default function BookDetail({ navigation, route }) { //当Array作为一个props传递，用{}去destructure
    const { book, handelBorrowedChange, books } = route.params;// Destructe the passed data
    const imageURL = book.imageURL;

    const [borrowedStatus, setBorrowedStatus] = useState(book.borrowed);

    const borrowBook = () => {
        // check if the user borrowed over three books
        const borrowedBooks = books.filter(book => book.borrowed == true);
        if (borrowedBooks.length >= 3) {
            Alert.alert(
                "The maximum number of books borrowed has been reached!", // Custom title
                `Users can only borrow up to three books!`,
                [
                    { text: "OK", onPress: () => console.log("OK Pressed") },
                    { text: "Cancel", onPress: () => console.log("Cancel Pressed") }
                ]
            );

            return;
        }

        handelBorrowedChange(book.id, book.borrowed);

        Alert.alert(
            "Borrow Success", // Custom title
            `You borrowed this book [${book.bookName}] successfully!`,
            [
                { text: "OK", onPress: () => console.log("OK Pressed") },
                { text: "Cancel", onPress: () => console.log("Cancel Pressed") }
            ]
        );

        const borrowedStatusNow = !borrowedStatus;
        setBorrowedStatus(borrowedStatusNow);
    }

    return (
        <ScrollView>
            <View style={[styles.card, styles.cardDirectionColoum]}>
                <View style={styles.imageContainer}>
                    {/* {imageURL && imageURL !== '' && ( */}
                    <Image
                        source={{ uri: `${imageURL}?${new Date().getTime()}` }}
                        style={styles.imageLarge}
                    />
                    {/* )} */}
                </View>
                <Text style={styles.title}>
                    {book.bookName}
                </Text>

                <Text style={styles.subtitle}>
                    Book Author
                </Text>
                <Text style={styles.descriptionBold}>
                    {book.author}
                </Text>

                <Text style={styles.subtitle}>
                    Rating
                </Text>
                <Text style={styles.descriptionBold}>
                    {book.rating}
                </Text>

                <Text style={styles.subtitle}>
                    Publish Date
                </Text>
                <Text style={styles.descriptionBold}>
                    {book.publishDate}
                </Text>

                {/* <Text style={styles.subtitle}>
                Description
            </Text> */}
                <Text style={styles.subtitle}>
                    {book.description}
                </Text>

                {!borrowedStatus && (
                    <View style={styles.buttonContainer}>
                        <Button title="Borrow This Book" onPress={borrowBook} />
                    </View>
                )}

            </View>
        </ScrollView>
    );
}