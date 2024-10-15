import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screen/HomeScreen";
import SearchScreen from "./screen/SreachScreen"; 
import DropsScreen from "./screen/DropsScreen"; 
import AccountScreen from "./screen/AccountScreen";
import DetailsScreen from "./screen/DetailsScreen";
import WaterCanScreen from "./screen/WaterCanScreen";
import Vendor from "./screen/VendorSubscriptionScreen"; 
import SubcriptionStratScreen from "./screen/SubcriptionStratScreen";
import VendorDetailsScreen from "./screen/VendorDetailsScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="drops" component={DropsScreen} />
        <Stack.Screen name="Account" component={AccountScreen} />
        <Stack.Screen name="details" component={DetailsScreen} />
        <Stack.Screen name="WaterCan" component={WaterCanScreen} />
        <Stack.Screen name="Vendor" component={Vendor} />
        <Stack.Screen
          name="SubcriptionStratScreen"
          component={SubcriptionStratScreen}
        />
        <Stack.Screen 
          name="VendorDetailsScreen"
          component={VendorDetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


