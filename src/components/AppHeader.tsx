import { View, Text, StyleSheet, Pressable } from 'react-native'
import { useTheme } from '@/hooks/use-theme'
import { Feather, Ionicons } from '@expo/vector-icons'

export default function AppHeader() {
    const theme = useTheme()

    return (
        <View style={styles.container}>
            <View style={styles.brandRow}>
                <View style={[styles.logo, {backgroundColor: theme.secondary}]}>
                    <Ionicons name="leaf" size={20} color={theme.text} />
                </View>
                <View>
                    <Text style={[styles.brand, {color: theme.secondary}]}>ELIKIA</Text>
                    <Text style={[styles.subtitle, {color: theme.textSecondary}]}>Le goût de chez nous</Text>
                </View>
            </View>
            <View style={styles.brandBottom}>
                <Pressable>
                    <Feather name='bell' color={theme.text} size={24} />
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingTop: 8,
        paddingBottom: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    brandRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 9
    },
    logo: {
        width: 38,
        height: 38,
        borderRadius: 13,
        alignItems: 'center',
        justifyContent: 'center'
    },
    brand: {
        fontSize: 17,
        fontWeight: '900',
        letterSpacing: 1
    },
    subtitle: {
        fontSize: 12
    },
    brandBottom: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})