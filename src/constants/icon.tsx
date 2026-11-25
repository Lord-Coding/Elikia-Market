import { Ionicons } from '@expo/vector-icons';

type TabIconProps = {
  color: string;
  focused: boolean;
};

export const icon = {
  index: ({ color, focused }: TabIconProps) => (
    <Ionicons name={focused ? 'home' : 'home-outline'} size={22} color={color} />
  ),
  rays: ({ color, focused }: TabIconProps) => (
    <Ionicons name={focused ? 'grid' : 'grid-outline'} size={22} color={color} />
  ),
  cart: ({ color, focused }: TabIconProps) => (
    <Ionicons name={focused ? 'cart' : 'cart-outline'} size={22} color={color} />
  ),
  profile: ({ color, focused }: TabIconProps) => (
    <Ionicons name={focused ? 'person' : 'person-outline'} size={22} color={color} />
  ),
};
