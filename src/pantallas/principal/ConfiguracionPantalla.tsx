import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navegacion/tipos";
import { Image, Pressable, Text, View } from "react-native";
import Boton from "../../componentes/Boton";
import { useAuth } from "../../contextos/AuthContexto";
import { LinearGradient } from "expo-linear-gradient";
import { colores } from "../../tema/colores";
import {
  FontAwesome6,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  SimpleLineIcons,
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
        {/** Card Cuenta y Perfil */}
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
        {/** Card Legal y Soporte */}
        <View
          style={{
            // flex: 1,
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
          <View style={{ flex: 1, gap: 16 }}>
            <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: 'center' }}>
            <Texto tipo="normal" negrita>
              Legal y Soporte
            </Texto>
            <View style={{ width: 50, paddingRight: 8 }}>
            <Pressable>
              <Texto negrita tipo="pequeno" color="#053292ff">
                v.2.15
              </Texto>
            </Pressable>
          </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 4,
              }}
            >
              <View
                style={{
                  flex: 1 / 2,
                  flexDirection: "row",
                  gap: 4,
                }}
              >
                <View>
                  <MaterialIcons name="description" size={20} color={colores.primario} />
                </View>
                <Texto style={{ flexWrap: "wrap" }} tipo="pequeno">
                  Términos y Condiciones
                </Texto>
              </View>
              <View
                style={{
                  flex: 1 / 2,
                  flexDirection: "row",
                  gap: 4,
                }}
              >
                <View>
                  <MaterialIcons name="privacy-tip" size={20} color={colores.primario} />
                </View>
                <Texto tipo="pequeno">Politicas de Privacidad</Texto>
              </View>
            </View>
          </View>
          
        </View>
        {/** Card Seguridad */}
        <View
          style={{
            // flex: 1,
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
          <View style={{ flex: 1, gap: 16 }}>
            <Texto tipo="normal" negrita>
              Seguridad
            </Texto>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 4,
              }}
            >
              <View
                style={{
                  flex: 1 / 2,
                  flexDirection: "row",
                  gap: 4,
                }}
              >
                <View>
                  <Ionicons
                    name="key-outline"
                    size={20}
                    color={colores.primario}
                  />
                </View>
                <Texto style={{ flexWrap: "wrap" }} tipo="pequeno">
                  Cambiar Contraseña
                </Texto>
              </View>
              <View
                style={{
                  flex: 1 / 2,
                  flexDirection: "row",
                  gap: 4,
                }}
              >
                <View>
                  <SimpleLineIcons
                    name="support"
                    size={18}
                    color={colores.primario}
                  />
                </View>
                <Texto tipo="pequeno">Contactar Soporte</Texto>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 4,
              }}
            >
              <View
                style={{
                  flex: 1 / 2,
                  flexDirection: "row",
                  gap: 4,
                }}
              >
                <View>
                  <MaterialCommunityIcons
                    name="two-factor-authentication"
                    size={20}
                    color={colores.primario}
                  />
                </View>
                <Texto style={{ flexWrap: "wrap" }} tipo="pequeno">
                  Autenticación en dos pasos
                </Texto>
              </View>
              <View
                style={{
                  flex: 1 / 2,
                  flexDirection: "row",
                  gap: 4,
                }}
              >
                <View>
                  <MaterialCommunityIcons
                    name="folder-multiple-outline"
                    size={20}
                    color={colores.primario}
                  />
                </View>
                <Texto tipo="pequeno">Guía de uso</Texto>
              </View>
            </View>
          </View>
        </View>
        {/** Boton Cerrar Sesion */}
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
