import { ScrollView, Text, View } from 'react-native';
import styles from '../../styles/styles';

export default function SummaryScreen({ navigation }) {
    return (
        <ScrollView>
            <Text style={styles.cardTitle}>Summary of your accounts</Text>
            <View style={styles.card}>
                <Text style={styles.subtitleNoMargin}>
                    Opening balance($)
                </Text>
                <Text style={styles.title}>
                    8,062.02
                </Text>

                <Text style={styles.subtitle}>
                    Total amounts - deducted($)
                </Text>
                <Text style={styles.title}>
                    -3,870.34
                </Text>

                <Text style={styles.subtitle}>
                    Total amounts + added($)
                </Text>
                <Text style={styles.title}>
                    +2,600.98
                </Text>
            </View>

            <Text style={styles.cardTitle}>General</Text>
            <View style={styles.card}>
                <Text style={styles.title}>
                    My credit score
                </Text>

                <Text style={styles.subtitle}>
                    Monitor your credit report, no matter when you are on your financial journy.
                </Text>
            </View>
            <View style={styles.card}>
                <Text style={styles.title}>
                    Set up CRA deposit
                </Text>

                <Text style={styles.subtitle}>
                    Have your CRA reimbursements deposited directly.
                </Text>
            </View>
            <View style={styles.card}>
                <Text style={styles.title}>
                    Link your accounts
                </Text>

                <Text style={styles.subtitle}>
                    Link multiple accounts to your debit card and profile.
                </Text>
            </View>

            <Text style={styles.cardTitle}>Cheques</Text>
            <View style={styles.card}>
                <Text style={styles.title}>
                    Download a void cheque
                </Text>

                <Text style={styles.subtitle}>
                    Get info on convenient image? Download it here.
                </Text>
            </View>
            <View style={styles.card}>
                <Text style={styles.title}>
                    Deposit a cheque
                </Text>

                <Text style={styles.subtitle}>
                    Use your mobile device to deposit a cheque to an account.
                </Text>
            </View>
        </ScrollView>

    );
}
