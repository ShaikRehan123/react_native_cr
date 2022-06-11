import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Header() {
  const navigation = useNavigation();
  return (
    <View className="fixed top-0 bg-gray-500 p-3 flex flex-row justify-between">
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <View>
          <Text className="text-white text-2xl underline">App Name</Text>
        </View>
      </TouchableOpacity>
      <View className="flex flex-row space-x-2">
        <TouchableOpacity
          onPress={() => {
            // Go to Home Screen
            //   if it is not the home screen, go to home screen

            navigation.navigate("Toss");
          }}
        >
          <Text className="text-white text-lg">Toss</Text>
        </TouchableOpacity>
        <Text className="text-white text-lg">Matches</Text>
      </View>
    </View>
  );
}
