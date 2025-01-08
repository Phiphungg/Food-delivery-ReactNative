import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View, Text, Image } from "react-native";

export default function OrderPrepairing() {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      // Move to delivery screen
      navigation.navigate("Delivery");
    }, 1000);
  }, []);
  return (
    <View className="flex-1 bg-white justify-center items-center">
      <Image
        source={require("../assets/images/delivery-home.png")}
        className="h-80 w-80"
      />
    </View>
  );
}
