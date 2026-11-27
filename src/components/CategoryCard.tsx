import { View, Text, StyleSheet } from 'react-native'
import { Category } from '@/constants/product'
import { useTheme } from '@/hooks/use-theme'
import { Image } from 'expo-image'

export default function CategoryCard({ item }: { item: Category }) {
    const theme = useTheme()

    return (
        <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={[styles.label, {color: theme.text}]}>{item.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: 108,
        alignItems: 'center',
        marginRight: 10
    },
    image: {
        width: 108,
        height: 78,
        borderRadius: 14,
        backgroundColor: '#eee',
    },
    label: {
        fontSize: 12,
        fontWeight: '700',
        marginTop: 7,
        textAlign: 'center'
    }
})