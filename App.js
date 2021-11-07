import {StatusBar} from "expo-status-bar";
import React from "react";
import {StyleSheet, Text, View, Button} from "react-native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";

import CreateScreen from "./src/screens/CreateScreen";
import EditScreen from "./src/screens/EditScreen";
import ShowScreen from "./src/screens/ShowScreen";
import IndexScreen from "./src/screens/IndexScreen";
import ContextProvider from "./src/context/blogContext";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ContextProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Index">
          <Stack.Screen
            name="Create"
            component={CreateScreen}
            options={{
              title: "Overview",
            }}
          />
          <Stack.Screen name="Edit" component={EditScreen} />
          <Stack.Screen name="Show" component={ShowScreen} />
          <Stack.Screen
            name="Index"
            component={IndexScreen}
            options={({navigation}) => ({
              headerTitle: (props) => <Text>asdfa</Text>,
              headerRight: () => (
                <Button
                  onPress={() => navigation.navigate("Create")}
                  title="Info"
                  color="#00cc00"
                />
              ),
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ContextProvider>
  );
}
