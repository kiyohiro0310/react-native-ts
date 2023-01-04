import { useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./components/Home";
import CharacterDetail from "./components/CharacterDetail";
export default function App() {
  const Stack = createStackNavigator();

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="home"
            component={Home}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="CharacterDetail"
            component={CharacterDetail}
            options={({ route, navigation }) => {
              const charName = (route.params! as { name: string }).name;
              return {
                title: charName,
              };
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
