import { Product } from '@/constants/product'
import { View, Text, Pressable, StyleSheet } from 'react-native'
import { Image } from 'expo-image';
import { useTheme } from '@/hooks/use-theme';
import { Ionicons } from '@expo/vector-icons';

export default function ProductCard(
    { product, onAdd} : {
        product: Product; 
        onAdd?: (product: Product) => void; 
    }
) {
    const theme = useTheme()
    
    return (
        <View style={styles.card}>
            <View style={styles.imageWrap}>
                <Image source={{ uri: product.image }} style={styles.image} resizeMode="cover" />
                {product.badge ? <Text style={[styles.badge, {backgroundColor: theme.secondary}]}>{product.badge}</Text> : null}
                <Pressable style={styles.favorite}>
                    <Ionicons name="heart-outline" size={18} color={theme.secondary} />
                </Pressable>
            </View>

            <View style={styles.content}>
                <Text style={[styles.name, {color: theme.text}]} numberOfLines={1}>{product.name}</Text>
                <Text style={[styles.description, {color: theme.textSecondary}]} numberOfLines={1}>{product.description}</Text>
                <Text style={[styles.price, {color: theme.primary}]}>
                    {product.price.toLocaleString('fr-FR')} FCFA
                    <Text style={[styles.unit, {color: theme.textSecondary}]}>/ {product.unit}</Text>
                </Text>
                <Pressable style={[styles.addButton, {backgroundColor: theme.secondary}]} onPress={() => onAdd?.(product)}>
                    <Ionicons name="add" size={18} color={theme.white} />
                    <Text style={styles.addText}>Ajouter</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: '48%',
        borderRadius: 16,
        backgroundColor: '#fff',
        overflow: 'hidden',
        marginBottom: 12
    },
    imageWrap: {
        height: 124,
        position: 'relative'
    },
    image: {
        width: '100%',
        height: '100%',
        backgroundColor: '#f1eee9'
    },
    badge: { 
        position: 'absolute', 
        left: 8, 
        top: 8, 
        color: '#fff', 
        overflow: 'hidden', 
        borderRadius: 7, 
        paddingHorizontal: 8, 
        paddingVertical: 4, 
        fontSize: 10, 
        fontWeight: '700' 
    },
    favorite: { 
        position: 'absolute', 
        top: 8, right: 8, 
        backgroundColor: '#fff', 
        width: 30, 
        height: 30, 
        borderRadius: 15, 
        alignItems: 'center', 
        justifyContent: 'center' 
    }, 
    content: { 
        padding: 10 
    }, 
    name: { 
        fontSize: 13, 
        fontWeight: '800', 
    }, 
    description: { 
        fontSize: 10, 
        marginTop: 3 
    }, 
    price: { 
        fontSize: 13, 
        fontWeight: '900', 
        marginTop: 8 
    }, 
    unit: { 
        fontSize: 9, 
        fontWeight: '500' 
    }, 
    addButton: { 
        marginTop: 8,  
        borderRadius: 9, 
        paddingVertical: 8, 
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center', 
        gap: 4 
    }, 
    addText: { 
        color: '#fff', 
        fontWeight: '700', 
        fontSize: 11 
    }
})