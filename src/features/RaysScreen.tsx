import { View, Text, StyleSheet } from 'react-native'
import ScreenContainer from '@/components/ScreenContainer';

export default function RaysScreen() {
    return (
        <ScreenContainer>
            <View style={styles.container}>
                <Text>Rays Screen</Text>
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
