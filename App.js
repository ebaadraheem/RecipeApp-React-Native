import "./gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import MyAllTabs from "./Tabs/MyAllTabs";
import SettingScreen from "./Screens/SettingScreen";

export default function App() {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="MyTabs"
        screenOptions={{
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#042628",
          },
          headerTitleStyle: {
            fontWeight: "bold",
          },
          drawerStyle: {
            backgroundColor: "#042628",
            width: 240,
          },
          drawerItemStyle: {
            marginVertical: 4,
            marginVertical: 2,
            color: "white",
          },
          drawerLabelStyle: {
            padding: 5,
            color: "white",
            fontWeight: "bold",
          },
        }}
      >
        <Drawer.Screen
          name="MyTabs"
          component={MyAllTabs}
          
          options={{ drawerLabel: "Home", title: "RecipeApp",headerShown: false }}
        />
        <Drawer.Screen
          name="SettingScreen"
          component={SettingScreen}
          options={{ drawerLabel: "Setting", title: "Setting" }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
