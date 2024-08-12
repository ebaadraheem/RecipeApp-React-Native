import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Entrance from "../Screens/Entrance";
import CategoryScreen from "../Screens/CategoryScreen";
import CategoryItems from "../Screens/CategoryItems";
import ItemDescription from "../Screens/ItemDescription";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const HomeScreen = () => {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#3DA0A7",
        },
        headerTitleAlign: "center",
        headerTintColor: "#ffffff",
        headerTitleStyle: {
          textAlign: "center",
          fontWeight: "bold",
          fontSize: 24,
        },
      }}
      initialRouteName="Home"
    >
      <Stack.Screen
        name="Home"
        options={{ headerShown: false }}
        component={Entrance}
      />
      <Stack.Screen
        name="CategoryScreen"
        options={{ title: "Category",
        headerLeft: () => (
          <Ionicons
            onPress={() => navigation.toggleDrawer()}
            name="menu"
            size={30}
            color="white"
            style={{ marginLeft: 10 }}
          />
        ),
         }}
        component={CategoryScreen}
      />
      <Stack.Screen
        options={({ route }) => ({
          title: route.params?.title || "Categories",
        })}
        name="CategoryItems"
        component={CategoryItems}
      />
      <Stack.Screen
        name="ItemDescription"
        options={{ title: "Recipe" }}
        component={ItemDescription}
      />
    </Stack.Navigator>
  );
};

export default HomeScreen;
