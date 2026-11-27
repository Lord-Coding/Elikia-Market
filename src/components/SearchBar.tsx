import { useTheme } from '@/hooks/use-theme';
import { Ionicons } from '@expo/vector-icons';
import { View, TextInput, StyleSheet } from 'react-native'

export default function SearchBar(
    {placeholder = 'Rechercher un produit...', value, onChangeText} : 
    {
        placeholder?: string;
        value?: string;
        onChangeText?: (text: string) => void
    }
) {
    const theme = useTheme()

    return (
        <View style={styles.container}>
            <Ionicons name='search' size={20} color={theme.textSecondary} />
            <TextInput placeholder={placeholder} placeholderTextColor={theme.textSecondary} style={[styles.input, {color: theme.text}]} value={value} onChangeText={onChangeText} />
            <Ionicons name='options-outline' size={20} color={theme.secondary} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F4EDE3',
        borderRadius: 14,
        paddingHorizontal: 14,
        height: 48,
        gap: 10
    },
    input: {
        flex: 1,
        fontSize: 14
    }
})