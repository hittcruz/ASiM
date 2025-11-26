import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import NavegacionApp from "./src/navegacion/NavegacionApp";
import { colores } from "./src/tema/colores";
import { StyleSheet } from "react-native";
import { AuthProvider } from "./src/contextos/AuthContexto";

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style={"auto"} />
      <AuthProvider>
          <NavigationContainer>
            <NavegacionApp />
          </NavigationContainer>
      </AuthProvider>
    </SafeAreaProvider>
  );
}
