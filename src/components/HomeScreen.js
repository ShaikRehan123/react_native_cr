import { SafeAreaView, Text, View } from "react-native";
import Header from "./Header";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <Header />
      <View className="flex h-full justify-center items-center">
        <Text>Home Screen</Text>
      </View>
    </SafeAreaView>
  );
}
