import AppHeader from '@/components/AppHeader'
import CategoryCard from '@/components/CategoryCard'
import ProductCard from '@/components/ProductCard'
import ScreenContainer from '@/components/ScreenContainer'
import SearchBar from '@/components/SearchBar'
import SectionTitle from '@/components/SectionTitle'
import { categories } from '@/data/categories'
import { products } from '@/data/products'
import { useTheme } from '@/hooks/use-theme'
import { Ionicons } from '@expo/vector-icons'
import { Image } from 'expo-image'
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native'

export default function HomeScreen() {
  const theme = useTheme() 

  return (
    <ScreenContainer>
      <ScrollView style={[styles.page, {backgroundColor: theme.background}]} showsVerticalScrollIndicator={false}>

        <AppHeader />

        <View style={styles.search}>
          <SearchBar />
        </View>

        <View style={styles.banner}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1200&q=90' }}
            contentFit="cover"
            style={styles.bannerImage}
          />
          <View style={styles.bannerShade} />
          <View style={styles.bannerContent}>
            <Text style={styles.bannerEyebrow}>LES SAVEURS DU TIRROIR</Text>
            <Text style={styles.bannerTitle}>Le goût de{ '\n' }chez nous.</Text>
            <Text style={styles.bannerText}>Des produits naturels sélectionnés avec soin.</Text>
            <Pressable style={styles.bannerButton}>
              <Text style={[styles.bannerButtonText, {color: theme.secondary}]}>Découvrir nos produits</Text>
              <Ionicons name="arrow-forward" color={theme.secondary} size={15}/>
            </Pressable>
          </View>
        </View>

        <View style={styles.section}>
          <SectionTitle title="Nos rayons" action="Voir tout" />
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {categories.map(cat => <CategoryCard key={cat.id} item={cat} />)}
          </ScrollView>
        </View>

        <View style={styles.section}>
          <SectionTitle title="Les incontournables" action="Voir tout" />
          <View style={styles.grid}>
            {products.map(prod => <ProductCard key={prod.id} product={prod} onAdd={() => {}} />)}
          </View>
        </View>

        <View style={[styles.promise, {backgroundColor: 'rgba(100, 255, 100, 0.56)'}]}>
          <Ionicons name="leaf-outline" color={theme.secondary} size={22} />
          <View>
            <Text style={[styles.promiseTitle, {color: theme.secondary}]}>Naturel, local, authentique</Text>
            <Text style={[styles.promiseText, {color: theme.secondary}]}>Le meilleur du terroir dans votre quotidien.</Text>
          </View>
        </View>

        <View style={{ height: 120 }}/>
      </ScrollView>
    </ScreenContainer>
  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  search: {
    marginBottom: 14,
    paddingTop: 16
  },
  banner: {
    height: 210,
    borderRadius: 22,
    overflow: 'hidden',
    marginTop: 8,
    justifyContent: 'center'
  },
  bannerImage: {
    ...StyleSheet.absoluteFill,
    borderRadius: 22
  },
  bannerShade: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(24,40,24,0.56)'
  },
  bannerContent: { 
    padding: 18 
  }, 
  bannerEyebrow: { 
    color: '#F8C78A', 
    fontSize: 10, 
    fontWeight: '800', 
    letterSpacing: 1.3 
  }, 
  bannerTitle: { 
    color: '#fff', 
    fontSize: 27, 
    lineHeight: 30, 
    fontWeight: '900', 
    marginTop: 8 
  }, 
  bannerText: { 
    color: '#F5F2E9', 
    fontSize: 12,
    marginTop: 8 
  }, 
  bannerButton: { 
    alignSelf: 'flex-start', 
    backgroundColor: '#FFF8ED', 
    borderRadius: 99, 
    paddingHorizontal: 12, 
    paddingVertical: 9, 
    marginTop: 12, 
    flexDirection: 'row', 
    alignItems: 'center', 
    gap: 6 
  }, 
  bannerButtonText: { 
    fontSize: 10,  
    fontWeight: '800' 
  },
  section: {
    marginTop: 22, 
    // paddingHorizontal: 18
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  promise: {
    marginHorizontal: 18,
    marginTop: 10,
    borderRadius: 16,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  promiseTitle: {
    fontWeight: '800',
    fontSize: 14
  },
  promiseText: {
    fontSize: 12,
    marginTop: 4
  }
})
