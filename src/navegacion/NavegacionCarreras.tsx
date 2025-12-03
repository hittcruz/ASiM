import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CarreraStackParamList } from "./tipos";
import { ListaCarrerasPantalla } from "../pantallas/carreras/ListaCarrerasPantalla";
import { DetalleCarreraPantalla } from "../pantallas/carreras/DetalleCarreraPantalla";
import { CursoDesdeCarreraPantalla } from "../pantallas/carreras/CursoDesdeCarreraPantalla";
import { CicloCarreraPantalla } from "../pantallas/carreras/CicloCarreraPantalla";

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
      <Stack.Screen
        name="CiclosCarreras"
        component={CicloCarreraPantalla}
      />
      <Stack.Screen
        name="CursoDesdeCarrera"
        component={CursoDesdeCarreraPantalla}
      />
    </Stack.Navigator>
  );
}