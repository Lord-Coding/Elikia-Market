import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@/hooks/use-theme";
export default function QuantitySelector({
  quantity,
  onChange,
}: {
  quantity: number;
  onChange: (next: number) => void;
}) {
    const theme = useTheme()

    return (
        <View style={styles.row}>
        <Pressable
            style={styles.button}
            onPress={() => onChange(Math.max(0, quantity - 1))}
        >
            <Ionicons name="remove" size={16} color={theme.secondary} />
        </Pressable>
        <Text style={[styles.qty, {color: theme.text}]}>{quantity}</Text>
        <Pressable style={styles.button} onPress={() => onChange(quantity + 1)}>
            <Ionicons name="add" size={16} color={theme.secondary} />
        </Pressable>
        </View>
    );
}
const styles = StyleSheet.create({
    row: { flexDirection: "row", alignItems: "center", gap: 8 },
    button: {
        width: 28,
        height: 28,
        borderRadius: 9,
        backgroundColor: 'rgba(100, 255, 100, 0.56)',
        alignItems: "center",
        justifyContent: "center",
    },
    qty: { 
        fontSize: 13, 
        fontWeight: "700"   
    },
});
