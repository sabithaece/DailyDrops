import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screen/HomeScreen"; // Fixed import path
import SearchScreen from "./screen/SreachScreen"; // Fixed import path
import DropsScreen from "./screen/DropsScreen"; // Fixed import path
import AccountScreen from "./screen/AccountScreen";
import DetailsScreen from "./screen/DetailsScreen";



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

        {/* You can add more screens here as needed */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


