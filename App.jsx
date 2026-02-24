import { Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { getFontFamily } from "./assets/fonts/helper";
import Title from "./components/Title/Title";

const App = () => {

  return (
   <SafeAreaProvider>
    <SafeAreaView>
     <Title title={"Let's Explore"} />
    </SafeAreaView>
   </SafeAreaProvider>
  );
}

export default App;
