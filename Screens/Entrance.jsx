import { Image, SafeAreaView, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

const Entrance = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View className=" bg-[#3DA0A7] h-full ">
        <View className="  h-[60%] justify-center items-center  ">
          <View className="  w-[90%] h-[90%] ">
            <View className=" items-center  justify-end h-[75%]  ">
              <Image
                source={require("../assets/Entrance_Img.png")}
                className="  w-[90%] h-[90%]"
              />
            </View>
            <View className=" h-[27%] items-center justify-center    ">
              <Image
                source={require("../assets/Entrance_Smile.png")}
                className="w-[90%] h-[95%]"
                style={{ tintColor: "red" }}
              />
            </View>
          </View>
        </View>
        <View className=" pt-5 gap-2 items-center">
          <View className=" w-[85%] justify-center  h-20 items-center">
            <Text className=" text-white text-xl font-bold text-center ">
              Help your path to health goals with happiness
            </Text>
          </View>
          <View className=" w-[85%] justify-center  h-16 items-center">
            <TouchableOpacity
              onPress={() => navigation.replace("CategoryScreen")}
              className=" w-full items-center"
            >
              <Text className=" p-2 rounded-xl w-[90%] text-center text-white text-lg  font-bold bg-[#042628] ">
                Get Started
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Entrance;
