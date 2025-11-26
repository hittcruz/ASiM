import { NavegacionPrincipal } from "./NavegacionPrincipal";
import NavegacionAuth from "./NavegacionAuth";
import { useAuth } from "../contextos/AuthContexto";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { colores } from "../tema/colores";

const NavegacionApp = () => {
  const { usuarioLogueado } = useAuth();

  return usuarioLogueado ? (
    <SafeAreaView style={estilos.contenedor}>
      <NavegacionPrincipal />
    </SafeAreaView>
  ) : (
    <NavegacionAuth />
  );
};

export default NavegacionApp;

const estilos = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: colores.fondo },
});
