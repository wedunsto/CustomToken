import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/screens/HomeScreen";
//import SearchScreen from "./src/screens/Search";
//import Results from "./src/screens/Results";

const stack = createNativeStackNavigator();

const App =()=> {
  return(
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Home" component={HomeScreen}
          options={{title: "HomeScreen", headerShown: false}}/>
      </stack.Navigator>
    </NavigationContainer>
  );
}

export default App;