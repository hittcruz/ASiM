import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../../navegacion/tipos";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import { colores } from "../../tema/colores";
import Texto from "../../componentes/Texto";
import TextoInput from "../../componentes/TextoInput";
import Boton from "../../componentes/Boton";

type Props = NativeStackScreenProps<RootStackParamList, "Registro">;

export const RegistroPantalla = ({ navigation }: Props) => {
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
              Regístrate a Aprende Sin Miedo
            </Texto>
            <Texto color={colores.gris}>
              Crea una nueva cuenta
            </Texto>
          </View>
        </View>
        <View style={{ paddingHorizontal: 32, gap: 15 }}>
          <View style={{ gap: 8 }}>
            <Texto style={{ fontWeight: 500 }} tipo="subnormal">
              Nombre Completo
            </Texto>
            <TextoInput placeholder="Ej. Juan Pérez" />
          </View>
          <View style={{ gap: 8 }}>
            <Texto style={{ fontWeight: 500 }} tipo="subnormal">
              Correo electrónico universitario
            </Texto>
            <TextoInput placeholder="Ej. juan@universidad.edu.pe" />
          </View>
          <View style={{ gap: 8 }}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Texto style={{ fontWeight: 500 }} tipo="subnormal">
                Nueva Contraseña
              </Texto>
            </View>
            <TextoInput placeholder="Ingresa tu contraseña" esPassword />
          </View>
          <View style={{ gap: 8 }}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Texto style={{ fontWeight: 500 }} tipo="subnormal">
                Repetir la Contraseña
              </Texto>
            </View>
            <TextoInput placeholder="Repite la contraseña" esPassword />
          </View>
          <View style={{ paddingVertical: 10 }}>
            <Boton
              titulo="Crear cuenta"
              onPress={() => {
                navigation.navigate('Bienvenida');
              }}
            />
          </View>
        </View>
      </View>
    </>
  );
};

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    gap: 24,
    marginVertical: 40
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