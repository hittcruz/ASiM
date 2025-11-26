import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navegacion/tipos";
import { Image, Pressable, Text, View } from "react-native";
import Boton from "../../componentes/Boton";
import { useAuth } from "../../contextos/AuthContexto";
import { LinearGradient } from "expo-linear-gradient";
import { colores } from "../../tema/colores";
import {
  FontAwesome6,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import Texto from "../../componentes/Texto";
import { estudiante } from "../../modelos/mockupEstudiante";

type Props = NativeStackScreenProps<RootStackParamList, "ConfiguracionTab">;
export const ConfigPantalla = ({ navigation }: Props) => {
  const { logout } = useAuth();
  return (
    <>
      <LinearGradient
        colors={[colores.fondo, "#FFF2F2"]}
        style={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0 }}
      />
      <View style={{ flex: 1, padding: 16, gap: 20 }}>
        <Texto tipo="titulo">Configuración</Texto>
        <View
          style={{
            flexDirection: "row",
            padding: 16,
            gap: 16,
            backgroundColor: "#fff",
            borderRadius: 12,
            // iOS
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.15,
            shadowRadius: 4,
            // Android
            elevation: 5,
          }}
        >
          <View style={{ flex: 1, gap: 10 }}>
            <View>
              <Texto tipo="normal" negrita>
                Cuenta y Perfil
              </Texto>
            </View>
            <View style={{ flexDirection: "row", gap: 10 }}>
              <View>
                <Image
                  source={require("../../assets/imagenes/avatar-woman.png")}
                  style={{ width: 50, height: 50 }}
                />
              </View>
              <View>
                <Texto tipo="subnormal" negrita>
                  {estudiante.nombre}
                </Texto>
                <Texto tipo="subnormal">{estudiante.carrera?.nombre}</Texto>
              </View>
            </View>
          </View>
          <View style={{ paddingRight: 8 }}>
            <Pressable>
              <FontAwesome6 name="edit" size={20} color="black" />
            </Pressable>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            padding: 16,
            gap: 16,
            backgroundColor: "#fff",
            height: 120,
            borderRadius: 12,
            // iOS
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.15,
            shadowRadius: 4,
            // Android
            elevation: 5,
          }}
        >
          <View style={{ flex: 1, gap: 4 }}>
            <Texto tipo="normal" negrita>
              Legal y Soporte
            </Texto>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: 'center',
                gap: 8,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  gap: 4,
                }}
              >
                <View>
                  <MaterialIcons
                    name="help-center"
                    size={20}
                    color={colores.primario}
                  />
                </View>
                <Texto style={{ flexWrap: "wrap" }} tipo="pequeno">
                  Términos y condiciones
                </Texto>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  gap: 4,
                }}
              >
                <View>
                  <MaterialCommunityIcons
                    name="file-document-outline"
                    size={20}
                    color="black"
                  />
                </View>
                <Texto tipo="subnormal">Políticas de Privacidad</Texto>
              </View>
            </View>
          </View>
          <View
            style={{ width: 50, paddingRight: 8 }}
          >
            <Pressable>
              <Texto negrita tipo="pequeno" color="#053292ff">
                v.2.15
              </Texto>
            </Pressable>
          </View>
        </View>
        <View style={{ position: "absolute", bottom: 16, left: 16, right: 16 }}>
          <Boton
            titulo="Cerrar Sesión"
            onPress={() => {
              logout();
            }}
          />
        </View>
      </View>
    </>
  );
};
