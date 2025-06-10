import "@/assets/css/global.css";
import { OnboardingStore } from "@/lib/data_sources/stores/onboarding-store";
import { useObservable } from "@/lib/utils/observables";
import { Stack } from "expo-router";
export default function RootLayout() {
  const [showOnboarding] = useObservable(() => OnboardingStore.instance, []);
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
        redirect={showOnboarding}
      />
      <Stack.Screen name="onboarding" options={{ headerShown: false }} />
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
