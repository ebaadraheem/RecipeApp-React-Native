import { Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { FlatList } from "react-native";
import Card from "../Components/Card";
import { useFavoriteStore } from "../Store/Store";
const Favorites = ({ navigation }) => {
  const Favorite = useFavoriteStore((state) => state.favorite);
  const RenderFunction = ({ item }) => {
    return <Card item={item} navigation={navigation} />;
  };
  return (
    <SafeAreaView>
      <View className={`${Favorite.length !== 0 && "pt-8"} h-full `}>
        <View className="justify-center items-center">
          {Favorite.length === 0 && (
            <View className="justify-center h-full  items-center">
              <Text className="text-xl">No Favorite Items</Text>
            </View>
          )}
          <FlatList
            data={Favorite}
            contentContainerStyle={{
              gap: 2,
              justifyContent: "center",
              alignItems: "center",
            }}
            key={(item) => item.id}
            renderItem={RenderFunction}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Favorites;
