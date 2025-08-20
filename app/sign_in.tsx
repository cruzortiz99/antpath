import logo from "@/assets/images/logo.png";
import { Button } from "@/lib/components/atoms/Button";
import { Input } from "@/lib/components/atoms/Input";
import { Link, useRouter } from "expo-router";
import { Image, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();
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
        <View className="flex flex-col gap-2">
          <Input placeholder="email@example.com"></Input>
          <Input placeholder="******"></Input>
        </View>
        <View className="grow flex flex-col justify-end md:justify-start py-12 gap-1">
          <Button
            className="bg-black text-white"
            onPress={() => router.push("/")}
            label={<Text className="text-inherit text-center">Sign in</Text>}
          ></Button>
          <View className="flex flex-row gap-1">
            <Text className="text-xs font-light">No account, click</Text>
            <Link href="/sign_up" className="text-xs font-semibold">
              here
            </Link>
          </View>
        </View>
      </View>
    </View>
  );
}
