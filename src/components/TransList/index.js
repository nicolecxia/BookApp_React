import { Pressable, ScrollView, Text, View, Button, Modal } from "react-native";
import TransItem from "./TransItem";

export default function TransList({ navigation, trans }) { //当Array作为一个props传递，用{}去destructure
    const handlePostPress = (tran) => {
        navigation.navigate('Detail', { tran: tran });
    }

    return (
        <>
            <ScrollView>
                {trans.map((tran, index) => {
                    return (//must return JSX
                        <Pressable key={index} onPress={() => handlePostPress(tran)}>
                            <TransItem  {...tran} />
                        </Pressable>
                    )
                })}
                <View style={{ height: 10 }}></View>
            </ScrollView>
        </>
    );
}