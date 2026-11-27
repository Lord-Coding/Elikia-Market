import { useTheme } from '@/hooks/use-theme';
import { Pressable, StyleSheet, Text } from 'react-native'

export default function FilterChip(
    {label, selected = false, onPress} :
    {
        label: string;
        selected?: boolean;
        onPress?: () => void;
    }
) {
    const theme = useTheme()
    
    return (
        <Pressable onPress={onPress} style={[styles.chip, {backgroundColor: theme.inactive}, selected && {backgroundColor: theme.secondary}]}>
            <Text style={[styles.label, {color: theme.text}, selected && {color: theme.white}]}>{label}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    chip: {
        height: 34,
        borderRadius: 99,
        paddingHorizontal: 14,
        alignItems: 'center',
        justifyContent: 'center',
    },
    label: {
        fontSize: 12,
        fontWeight: '600'
    }
})