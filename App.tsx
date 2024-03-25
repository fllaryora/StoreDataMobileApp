import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as SQLite from "expo-sqlite";
import * as React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import * as Constants from "./constants/constant"
import { Add, Edit, Home, Settings, ViewItem } from "./views";

const { useEffect } = React;

const db = SQLite.openDatabase(Constants.DATABASE_FILE_NAME);

const Stack = createStackNavigator();

export default function App(props: any) {

  useEffect(() => {
    db.transaction((tx:SQLite.SQLTransaction) => {
      tx.executeSql( Constants.CREATE_JOURNAL_TABLE );
    });
  }, []);

  const { button } = styles;

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={({ navigation }) => {
            return {
              headerTitle: "3-5 Grateful Things",
              headerTitleAlign: "center",
              headerMode: "screen",
              headerLeft: () => (
                <TouchableOpacity
                  onPress={() => navigation.navigate("Settings")}
                  style={button}
                >
                  <FontAwesome5 name="cog" size={30} color="#3C6074" />
                </TouchableOpacity>
              ),
              headerRight: () => (
                <TouchableOpacity
                  onPress={() => navigation.navigate("New")}
                  style={button}
                >
                  <AntDesign name="plus" size={30} color="#3C6074" />
                </TouchableOpacity>
              ),
            };
          }}
        />
        <Stack.Screen
          name="New"
          component={Add}
          options={{ headerTitleAlign: "center" }}
        />
        <Stack.Screen
          name="Edit"
          component={Edit}
          options={{ headerTitleAlign: "center" }}
        />
        <Stack.Screen
          name="View"
          component={ViewItem}
          options={{ headerTitleAlign: "center" }}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{ headerTitleAlign: "center" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );

}

const styles = StyleSheet.create({
  button: {
    padding: 10,
  },
});
