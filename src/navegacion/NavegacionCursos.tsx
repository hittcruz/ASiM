import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CursosStackParamList } from "./tipos";
import { ListaCursosPantalla } from "../pantallas/cursos/ListaCursosPantalla";
import DetalleCursoPantalla from "../pantallas/cursos/DetalleCursoPantalla";

const Stack = createNativeStackNavigator<CursosStackParamList>();
export const NavegacionCursos = () => {
    return (
    <Stack.Navigator initialRouteName={"ListaCursos"} screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="ListaCursos"
        component={ListaCursosPantalla}
      />
      <Stack.Screen
        name="DetalleCurso"
        component={DetalleCursoPantalla}
      />
    </Stack.Navigator>
  );
}