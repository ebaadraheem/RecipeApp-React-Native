import { Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { TouchableOpacity, Image, Pressable } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useFavoriteStore } from "../Store/Store";

const Card = ({ item, navigation }) => {
  const addFavorite = useFavoriteStore((state) => state.addFavorite);
  const removeFavorite = useFavoriteStore((state) => state.removeFavorite);
  const favorites = useFavoriteStore((state) => state.favorite);

  const [isFavorite, setIsFavorite] = useState(false);

  const CategoryDataFunction = () => {
    navigation.navigate("ItemDescription", { item :item });
  };

  const handlePress = (item) => {
    if (isFavorite) {
      removeFavorite(item);
    } else {
      addFavorite(item);
    }
  };

  useEffect(() => {
    setIsFavorite(favorites.includes(item));
  }, [favorites, item]);

  return (
    <TouchableOpacity
      className="overflow-hidden bg-[#3DA0A7] rounded-md w-[95%] h-[220px] mb-2"
      activeOpacity={0.5}
      onPress={CategoryDataFunction}
    >
      <View className="h-full">
        <View className="h-[75%] items-center justify-center">
          <Image
            source={{ uri: item.image }}
            className="w-full h-full"
            resizeMode="cover"
          />
        </View>
        <View className="h-[30%] overflow-hidden flex-row justify-center items-center">
          <View className="w-[75%] justify-center h-full px-2 mb-3">
            <Text className="text-lg text-center font-bold text-white">
              {item.title}
            </Text>
          </View>
          <View className="w-[25%] justify-center items-center h-full border-l-2 mb-3 border-black">
            <Pressable
              className="rounded-full p-1"
              onPress={() => handlePress(item)}
            >
              {isFavorite ? (
                <MaterialIcons name="favorite" size={24} color="black" />
              ) : (
                <MaterialIcons
                  name="favorite-outline"
                  size={24}
                  color="black"
                />
              )}
            </Pressable>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
