import ScreenContainer from '@/components/ScreenContainer';
import { View, Text, StyleSheet } from 'react-native'


export default function CartScreen() {
    return (
        <ScreenContainer>
            <View style={styles.container}>
                <Text>Cart Screen</Text>
            </View>
        </ScreenContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
    }
})

