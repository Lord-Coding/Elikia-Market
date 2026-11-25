import TabBar from "@/components/TabBar";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs tabBar={(props) => <TabBar {...props} />}>
      <Tabs.Screen
        name="index"
        options={{ title: "Acceuil", headerShown: false }}
      />
      <Tabs.Screen
        name="rays"
        options={{ title: "Rayons", headerShown: false }}
      />
      <Tabs.Screen
        name="cart"
        options={{ title: "Panier", headerShown: false }}
      />
      <Tabs.Screen
        name="profile"
        options={{ title: "Profil", headerShown: false }}
      />
    </Tabs>
  );
}
