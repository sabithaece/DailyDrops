import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screen/HomeScreen"; // Adjust the path if necessary

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* Other screens can be added here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
