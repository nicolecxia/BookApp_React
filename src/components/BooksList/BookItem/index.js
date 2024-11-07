import { View, Text, Image, Switch, Pressable } from "react-native";
import styles from "../../../styles/styles";
import { useState } from "react";
import { Alert } from "react-native";


export default function BookItem({ id, bookName, author, imageURL, borrowed, handelBorrowedChange, returnAllowed }) {

    // console.log("imageURL:");
    // console.log(imageURL);

    const [returnedStatus, setReturnedStatus] = useState(!borrowed);

    const returnBook = () => {
        handelBorrowedChange(id, borrowed);

        Alert.alert(
            "Return Success", // Custom title
            `You returned this book [${bookName}] successfully!`,
            [
                { text: "OK", onPress: () => console.log("OK Pressed") },
                { text: "Cancel", onPress: () => console.log("Cancel Pressed") }
            ]
        );

        const returnedStatusNow = !returnedStatus;
        setReturnedStatus(returnedStatusNow);
    }

    return (
        <View style={[styles.card, styles.cardDirectionRow]}>
            <View style={styles.imageContainer}>
                {imageURL && imageURL !== '' && (
                    <Image
                        source={{ uri: `${imageURL}?${new Date().getTime()}` }}
                        style={styles.imageSmall}
                    />
                )}
            </View>
        
            <View style={styles.textContainer}>
                <Text style={styles.title}>
                    {bookName}
                </Text>

                <Text style={styles.subtitle}>
                    {author}
                </Text>
            </View>

            <View style={styles.cardDirectionColoum}>
                {borrowed && !returnAllowed && (
                    <Text style={styles.borrowedFlag}>Borrowed</Text>

                )}

                { returnAllowed && (
                    <View style={styles.switch}>
                        <Switch
                            value={returnedStatus}
                            onValueChange={returnBook}
                        />
                        <Pressable onPress={returnBook}>
                            <Text style={styles.switchText}>Return the Book</Text>
                        </Pressable>
                    </View>
                )}
            </View>


        </View>
    );
}