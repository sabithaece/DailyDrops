import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screen/HomeScreen"; // Fixed import path
import SearchScreen from "./screen/SreachScreen"; // Fixed import path

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        {/* You can add more screens here as needed */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


