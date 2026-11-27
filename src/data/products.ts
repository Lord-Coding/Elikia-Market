import { Product } from "@/constants/product";

export const products: Product[] = [
  { id: 'p1', name: 'Gingembre moulu', description: 'Épice naturelle', price: 1500, unit: 'pot de 100 g', image: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f2?auto=format&fit=crop&w=700&q=85', category: 'Épices', badge: 'Populaire' },
  { id: 'p2', name: 'Curcuma en poudre', description: 'Origine naturelle', price: 2000, unit: 'pot de 100 g', image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=700&q=85', category: 'Épices' },
  { id: 'p3', name: 'Oignons frais', description: 'Sélection du jour', price: 1200, unit: 'kg', image: 'https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&w=700&q=85', category: 'Légumes', badge: 'Frais' },
  { id: 'p4', name: 'Poivre noir', description: 'Saveur intense', price: 1000, unit: 'sachet de 50 g', image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=700&q=85', category: 'Épices' },
  { id: 'p5', name: 'Thé naturel', description: 'Infusion bien-être', price: 2500, unit: 'boîte', image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=700&q=85', category: 'Thés' },
  { id: 'p6', name: 'Piment séché', description: 'Pour relever vos plats', price: 800, unit: 'sachet', image: 'https://images.unsplash.com/photo-1588252308361-4a9e6b8c7d5a?auto=format&fit=crop&w=700&q=85', category: 'Épices' },
];
