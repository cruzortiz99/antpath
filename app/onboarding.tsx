import { Button } from "@/lib/components/atoms/Button";
import { OnboardingStore } from "@/lib/data_sources/stores/onboarding-store";
import { useRouter } from "expo-router";
import { useCallback, useEffect } from "react";
import { Text, View } from "react-native";

export default function OnBoarding() {
  const router = useRouter();
  const handlePress = useCallback(() => {
    router.navigate("/sign_in");
  }, [router]);
  useEffect(() => {
    OnboardingStore.instance.update(false);
  }, []);
  return (
    <View className="grow flex flex-col items-center">
      <Text>OnBoarding</Text>
      <Button
        className="bg-black"
        label={<Text className="text-white">Continue</Text>}
        onPress={handlePress}
      />
    </View>
  );
}
