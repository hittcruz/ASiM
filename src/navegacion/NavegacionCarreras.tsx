import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CarreraStackParamList } from "./tipos";
import { ListaCarrerasPantalla } from "../pantallas/carreras/ListaCarrerasPantalla";
import { DetalleCarreraPantalla } from "../pantallas/carreras/DetalleCarreraPantalla";

const Stack = createNativeStackNavigator<CarreraStackParamList>();
export const NavegacionCarreras = () => {
    return (
    <Stack.Navigator initialRouteName={"ListaCarreras"} screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="ListaCarreras"
        component={ListaCarrerasPantalla}
      />
      <Stack.Screen
        name="DetalleCarrera"
        component={DetalleCarreraPantalla}
      />
    </Stack.Navigator>
  );
}