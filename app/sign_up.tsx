import logo from "@/assets/images/logo.png";
import { Button } from "@/lib/components/atoms/Button";
import { Input } from "@/lib/components/atoms/Input";
import { Link } from "expo-router";
import { Image, Text, View } from "react-native";

export default function Index() {
  return (
    <View className="grow flex flex-col items-center bg-white relative overflow-hidden">
      <View className="grow flex flex-col items-center max-w-72 w-full">
        <View className="mb-12 mt-24 flex flex-col gap-2">
          <Text className="text-center text-xl font-bold capitalize">AntPath</Text>
          <Image
            source={logo}
            className="max-w-40 max-h-40 aspect-square object-contain rounded-full"
            alt="logo"
          />
        </View>
        <View className="flex flex-col gap-2 max-w-full">
          <View className="flex flex-row gap-1">
            <Input className="w-1/2" placeholder="Name: John"></Input>
            <Input className="w-1/2" placeholder="Last name: Doe"></Input>
          </View>
          <Input placeholder="email@example.com"></Input>
          <Input placeholder="******"></Input>
        </View>
        <View className="grow flex flex-col justify-end md:justify-start py-12 gap-1">
          <Button
            className="bg-black text-white"
            label={<Text className="text-inherit text-center">Sign up</Text>}
          ></Button>
          <View className="flex flex-row gap-1">
            <Link
              href="/sign_in"
              className="text-xs font-semibold px-4 py-2 border border-1 border-black rounded"
            >
              <Text>Already have an account?</Text>
            </Link>
          </View>
        </View>
      </View>
    </View>
  );
}
