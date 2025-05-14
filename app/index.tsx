import { Pressable, Text, TextInput, View } from "react-native";

export default function Index() {
  return (
    <View className="grow flex flex-col items-center bg-white relative overflow-hidden">
      <View className="grow flex flex-col items-center max-w-screen-sm w-full">
        <View className="mb-12 mt-24 flex flex-col gap-2">
          <Text className="text-center text-xl font-bold capitalize">AntPath</Text>
          <View className="aspect-square rounded-full w-[40vw] bg-slate-400 max-w-56"></View>
        </View>
        <View className="">
          <TextInput placeholder="username"></TextInput>
          <TextInput placeholder="password"></TextInput>
        </View>
        <View className="grow flex flex-col justify-end md:justify-start py-12">
          <Pressable>
            <Text>Sign in</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
