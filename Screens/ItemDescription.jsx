import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { useLayoutEffect } from "react";
import { useFavoriteStore } from "../Store/Store";

import { useState, useEffect } from "react";
const ItemDescription = ({ route }) => {
  const [isFavorite, setisFavorite] = useState(false);
  const addFavorite = useFavoriteStore((state) => state.addFavorite);
  const removeFavorite = useFavoriteStore((state) => state.removeFavorite);
  const favorite = useFavoriteStore((state) => state.favorite);

  const navigation = useNavigation();

  const handlePress = (item) => {
    if (favorite.includes(item)) {
      removeFavorite(item);
    } else {
      addFavorite(item);
    }
  };
  useEffect(() => {
    if (favorite.includes(route.params?.item)) {
      setisFavorite(true);
    } else {
      setisFavorite(false);
    }
  }, [favorite]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable
          onPress={() => handlePress(route.params?.item)}
          className="mr-4"
        >
          {isFavorite ? (
            <MaterialIcons name="favorite" size={24} color="black" />
          ) : (
            <MaterialIcons name="favorite-outline" size={24} color="black" />
          )}
        </Pressable>
      ),
    });
  }, [navigation, isFavorite]);

  return (
    <SafeAreaView className="justify-center  items-center ">
      <ScrollView contentContainerStyle={{ paddingHorizontal: 12 }}>
        <View className="h-full w-[90vw] ">
          <View className="h-72 mt-2 items-center justify-center">
            <Image
              source={{ uri: route.params?.item.image }}
              className="w-full h-full "
              resizeMode="contain"
            />
          </View>
          <View>
            <View className="py-2 items-center justify-center">
              <Text className="text-2xl font-bold text-center px-4">
                {route.params?.item.title}
              </Text>
            </View>
            <View className="px-2 ">
              <View className="px-2 ">
                <Text className="text-xl font-bold underline  text-center ">
                  Type : {route.params?.item.type}
                </Text>
                <Text className="text-xl font-bold text-start px-1 py-2">
                  Ingredients
                </Text>
                <View>
                  {route.params?.item.ingredients.map((item, index) => (
                    <Text
                      key={index}
                      className=" text-white p-2 border-2 border-black bg-[#3DA0A7] rounded-md font-bold text-center mb-1"
                    >
                      {index + 1}. {item}
                    </Text>
                  ))}
                </View>
              </View>
            </View>

            <View className="py-2">
              <View className="px-2">
                <Text className="text-xl font-bold text-start pl-3 py-2">
                  Recipe
                </Text>
              </View>
              <View className="items-center justify-center">
                <Text className="text-lg text-start px-4">
                  {route.params?.item.recipe}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ItemDescription;
