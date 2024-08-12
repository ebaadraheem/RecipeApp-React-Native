import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import React from "react";
import { useState } from "react";
import { Image } from "react-native";
import { useCategoryStore } from "../Store/Store";

const CategoryScreen = ({ navigation }) => {
  const CategoryData = useCategoryStore((state) => state.CategoryData);
  const [Categories, setCategories] = useState(CategoryData);

  const RenderFunction = ({ item }) => {
    const CategoryDataFunction = () => {
      navigation.navigate("CategoryItems", {
        category: item.category,
        title: item.title,
      });
    };
    return (
      <TouchableOpacity
        className="bg-[#3DA0A7]  shadow-lg rounded-lg shadow-black"
        activeOpacity={0.4}
        onPress={CategoryDataFunction}
      >
        <View className="items-center w-32  h-32  ">
          <View>
            <Text className=" text-white font-semibold text-lg">
              {item.title}
            </Text>
          </View>
          <View className=" items-center justify-center w-[70%] h-[70%] ">
            <Image source={item.image} className="w-full h-full" />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView>
      <View className="  h-full ">
        <View className=" mt-10 mb-5 justify-center items-center">
          <FlatList
            data={Categories}
            contentContainerStyle={{ gap: 8, paddingHorizontal: 10 }}
            columnWrapperStyle={{ gap: 20 }}
            numColumns={2}
            key={(item) => item.id}
            renderItem={RenderFunction}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CategoryScreen;
