import { Tabs } from "expo-router";

export default function HomeTabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Home",
        }}
      />
      <Tabs.Screen name="goals" options={{ tabBarLabel: "Goals" }} />
      <Tabs.Screen name="profile" options={{ tabBarLabel: "Profile" }} />
    </Tabs>
  );
}
