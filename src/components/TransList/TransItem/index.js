import { View, Text } from "react-native";
import styles from "../../../styles/styles";

export default function TransItem({id, name, amount, date, state}) {

    return (
        <View style={styles.card}>
            <View style={styles.textContainer}>
                <Text style={styles.title}>
                    {name}
                </Text>

                <Text style={styles.subtitle}>
                    {state ? "+" : "-"}${amount}  |  {date}
                </Text>
            </View>
        </View>
    );
}