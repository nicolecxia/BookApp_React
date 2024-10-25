import { Text, View } from "react-native";
import styles from "../../styles/styles";

export default function TransDetail({ navigation, route }) { //当Array作为一个props传递，用{}去destructure
    const { tran } = route.params;// Destructe the passed data

    return (
        <View style={styles.card}>
            <Text style={styles.title}>
                {tran.name}
            </Text>

            <Text style={styles.title}>
                {tran.state ? "+" : "-"}${tran.amount}
            </Text>

            <Text style={styles.subtitle}>
                Transaction date
            </Text>
            <Text style={styles.title}>
                {tran.date}
            </Text>

            <Text style={styles.subtitle}>
                Transaction type
            </Text>
            <Text style={styles.title}>
                {tran.type}
            </Text>
        </View>
    );
}