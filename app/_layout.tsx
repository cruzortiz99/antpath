import "@/assets/css/global.css";
import { Stack } from "expo-router";
export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="sign_in" />
      <Stack.Screen name="sign_up" />
    </Stack>
  );
}
