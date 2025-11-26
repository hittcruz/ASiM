import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { CarreraStackParamList } from "../../navegacion/tipos";
import { FlatList, Image, Pressable, ScrollView, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { colores } from "../../tema/colores";
import { carreras } from "../../modelos/mockupCarreras";
import { Ionicons } from "@expo/vector-icons";
import Texto from "../../componentes/Texto";
import Boton from "../../componentes/Boton";
import CardCurso from "../../componentes/CardCurso";

type Props = NativeStackScreenProps<CarreraStackParamList, "DetalleCarrera">;

export const DetalleCarreraPantalla = ({ route, navigation }: Props) => {
  const { id } = route.params;
  const carrera = carreras.find((item) => item.id === id);
  const obtenerRuta = (id: string) => {
    switch (id) {
      case "c1":
        return require("../../assets/imagenes/carrera-adminEmpresa.avif");
      case "c2":
        return require("../../assets/imagenes/carrera-contabilidad.jpg");
      case "c3":
        return require("../../assets/imagenes/carrera-hotel.jpg");
      case "c4":
        return require("../../assets/imagenes/carrera-marketing.jpg");
      default:
        return require("../../assets/imagenes/carrera-internacional.jpg");
    }
  };
  const ruta = obtenerRuta(id);

  return (
    <>
      <LinearGradient
        colors={[colores.fondo, "#9cb7bdff"]}
        style={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0 }}
      />
      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            height: 48,
            alignItems: "center",
          }}
        >
          <View
            style={{
              height: 48,
              width: 48,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Pressable
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Ionicons name="arrow-back" size={30} color="black" />
            </Pressable>
          </View>
        </View>
        {carrera && (
          <View
            style={{
              flex: 1,
              marginBottom: 16,
            }}
          >
            <FlatList
              style={{ paddingHorizontal: 16, paddingTop: 16}}
              data={carrera.cursos}
              renderItem={({ item }) => (
                <CardCurso
                  titulo={item.nombre}
                  descripcion={item.descripcion ?? ""}
                  path={item.id === "curso1" ? "language" : "calculator"}
                />
              )}
              ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
              ListHeaderComponent={
                <View style={{paddingHorizontal: 8, paddingBottom: 8, gap: 10}}>
                  <View
                    style={{
                      height: 250,
                      borderRadius: 12,
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
                      source={ruta}
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </View>
                  <View style={{paddingTop: 16, gap: 10 }}>
                    <Texto tipo="titulo" negrita color={colores.primario}>
                      {carrera.nombre}
                    </Texto>
                    <Texto style={{ flexWrap: "wrap" }} color={colores.gris}>
                      {carrera.descripcion}
                    </Texto>
                  </View>
                  <Texto tipo="subtitulo">Cursos</Texto>
                </View>
              }
              ListFooterComponent={
                <View style={{marginVertical: 16 }}>
                  <View style={{ paddingHorizontal: 32 }}>
                    <Boton
                      variante="varB"
                      titulo="Inscribirse"
                      onPress={() => {}}
                    />
                  </View>
                </View>
              }
            />
          </View>
        )}
      </View>
    </>
  );
};
