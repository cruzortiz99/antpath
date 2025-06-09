import "@/assets/css/global.css";
import { Stack } from "expo-router";
export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="sign_in" options={{ headerShown: false }} />
      <Stack.Screen
        name="sign_up"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
