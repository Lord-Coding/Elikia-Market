import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { useTheme } from '@/hooks/use-theme';

export default function SectionTitle({title, action, onPress} : {
    title: string;
    action?: string;
    onPress?: () => void;
}) {
    const theme = useTheme()

    return (
        <View style={styles.row}>
            <Text style={[styles.title, {color: theme.text}]}>{title}</Text>
            {action ? 
                <Pressable onPress={onPress}>
                    <Text style={[styles.action, {color: theme.secondary}]}>{action}</Text>
                </Pressable>
            : null}
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 12
    },
    title: {
        fontSize: 16,
        fontWeight: '800'
    },
    action: {
        fontSize: 12,
        fontWeight: '700'
    }
})