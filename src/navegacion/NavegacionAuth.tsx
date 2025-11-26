import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./tipos";
import { LoginPantalla } from "../pantallas/auth/LoginPantalla";
import { RegistroPantalla } from "../pantallas/auth/RegistroPantalla";
import BienvenidaPantalla from "../pantallas/auth/BienvenidaPantalla";

const Stack = createNativeStackNavigator<RootStackParamList>();
const NavegacionAuth = () => {
    return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Bienvenida" component={BienvenidaPantalla} />
      <Stack.Screen name="Login" component={LoginPantalla} />
      <Stack.Screen name="Registro" component={RegistroPantalla} />
    </Stack.Navigator>
  );
}
export default NavegacionAuth;