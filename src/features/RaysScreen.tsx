import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useMemo, useState } from "react";
import { products } from "@/data/products";
import AppHeader from "@/components/AppHeader";
import FilterChip from "@/components/FilterChip";
import ProductCard from "@/components/ProductCard";
import SectionTitle from "@/components/SectionTitle";
import SearchBar from "@/components/SearchBar";
import ScreenContainer from "@/components/ScreenContainer";
import { useTheme } from "@/hooks/use-theme";

const filters = ["Tout", "Épices", "Thés", "Légumes"];

export default function RaysScreen() {
  const theme = useTheme();

  const [selected, setSelected] = useState("Tout");
  const [search, setSearch] = useState("");

  const filtered = useMemo(
    () =>
      products.filter(
        (p) =>
          (selected === "Tout" || p.category === selected) &&
          p.name.toLowerCase().includes(search.toLowerCase()),
      ),
    [selected, search],
  );

  return (
    <ScreenContainer backgroundColor={theme.background}>
      <ScrollView
        style={styles.page}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <AppHeader />
        <View style={styles.search}>
          <SearchBar
            value={search}
            onChangeText={setSearch}
            placeholder="Chercher dans nos rayons..."
          />
        </View>
        <View style={styles.heading}>
          <Text style={[styles.eyebrow, {color: theme.primary}]}>CATALOGUE</Text>
          <Text style={[styles.title, {color: theme.text}]}>Explorez nos rayons</Text>
          <Text style={[styles.subtitle, {color: theme.textSecondary}]}>
            Des saveurs et produits choisis pour vous.
          </Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filters}
        >
          {filters.map((f) => (
            <FilterChip
              key={f}
              label={f}
              selected={selected === f}
              onPress={() => setSelected(f)}
            />
          ))}
        </ScrollView>
        <View style={styles.products}>
          <SectionTitle title={`${filtered.length} produits`} />
          <View style={styles.grid}>
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} onAdd={() => {}} />
            ))}
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    paddingBottom: 24,
  },
  search: {
    marginBottom: 8,
  },
  heading: {
    marginTop: 12,
    marginBottom: 18,
  },
  eyebrow: {
    fontSize: 10,
    letterSpacing: 1.2,
    fontWeight: "800",
  },
  title: {
    fontSize: 24,
    fontWeight: "900",
    marginTop: 5,
  },
  subtitle: {
    fontSize: 12,
    marginTop: 5,
  },
  filters: {
    gap: 8,
    paddingBottom: 4,
  },
  products: {
    marginTop: 20,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});
