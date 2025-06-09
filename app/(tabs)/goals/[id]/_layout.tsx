import { Stack } from "expo-router";

export default function GoalLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="tasks" options={{ headerShown: false }} />
    </Stack>
  );
}
