import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";
import Categories from "../components/categories";
import { featured } from "../contants";
import FeaturedRow from "../components/featuredRow";
import { getFeaturedRestaurants } from "../api";

export default function HomeScreen() {
  const [featuredRestaurants, setFeaturedRestaurants] = useState([]);

  useEffect(() => {
    getFeaturedRestaurants().then((data) => {
      setFeaturedRestaurants(data);
    });
  }, []);

  return (
    <SafeAreaView className="bg-gray-100">
      <StatusBar barStyle="dark-content" />
      {/* Search bar */}
      <View className="flex-row items-center space-x-4 px-4 py-3">
        {/* Search */}
        <View className="flex-row flex-1 items-center p-2 border rounded-full border-gray-300">
          <Icon.Search height="25" width="25" stroke="gray" />
          <TextInput placeholder="Restaurants" className="ml-2 flex-1" />

          {/* MapPin */}
          <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
            <Icon.MapPin height="20" width="20" stroke="gray" />
            <Text className="text-gray-600">New York, NYC</Text>
          </View>
        </View>

        {/* Sliders */}
        <View
          style={{ backgroundColor: themeColors.bgColor(1) }}
          className="p-3  rounded-full"
        >
          <Icon.Sliders
            height="20"
            width="20"
            strokeWidth={2.5}
            stroke="white"
          />
        </View>
      </View>

      {/* Main */}
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      />

      {/* Categories */}
      <Categories />

      {/* featured */}
      <View className="mt-5">
        {featuredRestaurants.map((item, index) => {
          return (
            <FeaturedRow
              key={index}
              title={item.name}
              restaurants={item.restaurants}
              description={item.description}
            />
          );
        })}
      </View>
    </SafeAreaView>
  );
}
