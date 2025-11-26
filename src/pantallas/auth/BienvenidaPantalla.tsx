import { Image, StyleSheet, Text, View } from "react-native";
import { colores } from "../../tema/colores";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navegacion/tipos";
import { LinearGradient } from "expo-linear-gradient";
import Texto from "../../componentes/Texto";
import Boton from "../../componentes/Boton";

type Props = NativeStackScreenProps<RootStackParamList, "Bienvenida">;

const BienvenidaPantalla = ({ navigation }: Props) => {
  return (
    <>
      <LinearGradient
        colors={[colores.secundario, colores.fondo]}
        style={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0 }}
      />
      <View style={estilos.contenedor}>
        <View style={{ position: "absolute", bottom: 65, left: 0, right: 0 }}>
          <View
            style={{
              alignSelf: "center",
              height: 150,
              width: 150,
              backgroundColor: colores.fondoDark,
              borderRadius: 75,
              marginBottom: 50,
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
              // iOS
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.15,
              shadowRadius: 4,
              // Android
              elevation: 5,
            }}
          >
            <Image
              source={require("../../assets/imagenes/icono.png")}
              style={{ width: 150, height: 150 }}
            />
          </View>
          <View style={{ marginBottom: 50, paddingHorizontal: 32 }}>
            <Texto style={{ textAlign: "center" }} tipo="titulo" negrita>
              Aprende Sin Miedo
            </Texto>
            <Texto
              style={{ textAlign: "center", fontWeight: "500" }}
              tipo="subnormal"
            >
              Para Ciencias Empresariales
            </Texto>
          </View>
          <View style={{ gap: 20, marginBottom: 50, paddingHorizontal: 50 }}>
            <Boton
              titulo="Iniciar Sesión"
              onPress={() => {
                navigation.navigate("Login");
              }}
            />
            <Boton
              titulo="Registrarme"
              onPress={() => {
                navigation.navigate("Registro");
              }}
            />
          </View>
          <View style={{ alignItems: "center" }}>
            <Text>Potencia tu futuro profesional</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default BienvenidaPantalla;
const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    marginBottom: 16,
  },
  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: colores.primario,
    flexWrap: "wrap",
  },
});
