import { FlatList, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import { useCategoryItemStore } from "../Store/Store";
import Card from "../Components/Card";
import { useEffect } from "react";
import { Text } from "react-native";
import { useSwitchStore } from "../Store/Store";

const CategoryItems = ({ navigation, route }) => {
  const DataByCategory = useCategoryItemStore(
    (state) => state.SeparateDataByCategory
  );
  const CategoryItemData = DataByCategory(route.params.category);

  const [CategoryItems, setCategoryItems] = useState(CategoryItemData);
  const Switches = useSwitchStore((state) => state.switches);
  useEffect(() => {
    setCategoryItems(
      CategoryItemData.filter((item) => Switches[item.type] === true)
    );
  }, [Switches]);

  const RenderFunction = ({ item }) => {
    return <Card item={item} navigation={navigation} />;
  };
  return (
    <SafeAreaView>
      <View className="pt-8 h-full ">
        {CategoryItems.length === 0 && (
          <View className="justify-center  h-full  items-center">
            <Text className=' text-xl'>No items found</Text>
          </View>
        )}
        <View className="  justify-center items-center">
          <FlatList
            data={CategoryItems}
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

export default CategoryItems;
