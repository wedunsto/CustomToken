import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/screens/HomeScreen";
import SearchScreen from "./src/screens/Search";
import Results from "./src/screens/Results";
import EditToken from "./src/screens/EditToken";

const stack = createNativeStackNavigator();

const App =()=>{
  return(
    <NavigationContainer>
    <stack.Navigator>
      <stack.Screen name="Home" component={HomeScreen}
      options={{title: "HomeScreen", headerShown: false}}/>
      <stack.Screen name="Search" component={SearchScreen}
      options={{title: "SearchScreen", headerShown: false}}/>
      <stack.Screen name="Results" component={Results}
      options={{title: "ResultsScreen", headerShown: false}}/>
      <stack.Screen name="EditToken" component={EditToken}
      options={{title: "EditTokenScreen", headerShown: false}}/>
    </stack.Navigator>
  </NavigationContainer>
  );
}

export default App;