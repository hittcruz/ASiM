import {
  Button,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { colores } from "../../tema/colores";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navegacion/tipos";
import { FontAwesome6 } from "@expo/vector-icons";
import Texto from "../../componentes/Texto";
import TextoInput from "../../componentes/TextoInput";
import Boton from "../../componentes/Boton";
import { useAuth } from "../../contextos/AuthContexto";
import { LinearGradient } from "expo-linear-gradient";

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

export const LoginPantalla = ({ navigation }: Props) => {
  const { login } = useAuth();
  return (
    <>
      <LinearGradient
        colors={[colores.fondo, colores.secundario]}
        style={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0 }}
      />
      <View style={estilos.contenedor}>
        <View
          style={{ marginTop: 20, paddingHorizontal: 16, alignItems: "center" }}
        >
          <View
            style={{
              height: 80,
              width: 80,
              backgroundColor: colores.primario,
              borderRadius: 15,
              marginBottom: 50,
              overflow: "hidden",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../assets/imagenes/icono.png")}
              style={{ width: 80, height: 80 }}
            />
          </View>
          <View
            style={{
              alignItems: "center",
              paddingHorizontal: 16,
              gap: 10,
            }}
          >
            <Texto
              style={{ fontWeight: 800, textAlign: "center" }}
              tipo="titulo"
              color={colores.texto}
            >
              Bienvenido a Aprende Sin Miedo
            </Texto>
            <Texto color={colores.gris}>
              Accede a tu cuenta para continuar
            </Texto>
          </View>
        </View>
        <View style={{ paddingHorizontal: 32, gap: 15 }}>
          <View style={{ gap: 8 }}>
            <Texto style={{ fontWeight: 500 }} tipo="subnormal">
              Correo electrónico universitario
            </Texto>
            <TextoInput placeholder="tu.nombre@universidad.edu.pe" />
          </View>
          <View style={{ gap: 8 }}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Texto style={{ fontWeight: 500 }} tipo="subnormal">
                Contraseña
              </Texto>
              <Pressable onPress={() => {}}>
                <Texto
                  style={{ fontWeight: 500 }}
                  color={colores.primario}
                  tipo="subnormal"
                >
                  ¿Olvidaste la contraseña?
                </Texto>
              </Pressable>
            </View>
            <TextoInput placeholder="Ingresa tu contraseña" esPassword />
          </View>
          <View style={{ paddingVertical: 10 }}>
            <Boton
              titulo="Ingresar"
              onPress={() => {
                login();
              }}
            />
          </View>
        </View>
        <View
          style={{
            position: "absolute",
            bottom: 24,
            left: 0,
            right: 0,
            flexDirection: "row",
            justifyContent: "center",
            gap: 5,
            paddingHorizontal: 32,
          }}
        >
          <Texto tipo="subnormal" color={colores.fondo}>
            ¿Eres nuevo?
          </Texto>
          <Pressable
            onPress={() => {
              navigation.navigate("Registro");
            }}
          >
            <Texto tipo="subnormal" negrita color={colores.texto}>
              Regístrate Aqui
            </Texto>
          </Pressable>
        </View>
        <View></View>
      </View>
    </>
  );
};
const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    gap: 24,
    marginVertical: 40,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: colores.borderNormal,
    color: colores.texto,
    borderRadius: 10,
    paddingHorizontal: 12,
    backgroundColor: "#fff",
  },
});
