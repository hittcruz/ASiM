import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import {
  CursosStackParamList,
  RootStackParamList,
} from "../../navegacion/tipos";
import { FlatList, Image, Pressable, View } from "react-native";
import Texto from "../../componentes/Texto";
import { colores } from "../../tema/colores";
import { LinearGradient } from "expo-linear-gradient";
import { estudiante } from "../../modelos/mockupEstudiante";
import {
  NavigationProp,
  NavigatorScreenParams,
  useNavigation,
} from "@react-navigation/native";
import CardCarreraProgreso from "../../componentes/CardCarreraProgreso";
import ImageSlider from "../../componentes/ImageSlider";

type Props = NativeStackScreenProps<RootStackParamList, "InicioTab">;
export const InicioPantalla = ({ navigation }: Props) => {
  const _estudiante = estudiante;
  const nav = useNavigation<NativeStackNavigationProp<CursosStackParamList>>();
  const navigation1 = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <>
      <LinearGradient
        colors={["#F4F4F4", "#E8E8E8"]}
        style={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0 }}
      />
      <View style={{ padding: 16 }}>
        <FlatList
          style={{ padding: 16 }}
          data={_estudiante.carrera?.ciclos[0].cursos}
          ListHeaderComponent={() => (
            <View style={{ marginBottom: 16, gap: 16 }}>
              <View style={{ gap: 10 }}>
                <View
                  style={{
                    height: 150,
                    width: 150,
                    alignItems: "center",
                    alignSelf: "center",
                    justifyContent: "center",
                    borderRadius: 75,
                  }}
                >
                  <Image
                    source={require("../../assets/imagenes/avatar-woman.png")}
                    style={{ width: 150, height: 150 }}
                  />
                </View>
                <View>
                  <Texto
                    tipo="titulo"
                    style={{ fontWeight: 700, textAlign: "center" }}
                  >
                    {_estudiante.nombre}
                  </Texto>
                  <Texto
                    tipo="pequeno"
                    color={colores.gris}
                    style={{ fontWeight: 500, textAlign: "center" }}
                  >
                    {_estudiante.carrera?.nombre}
                  </Texto>
                </View>
              </View>
              <View style={{ paddingTop: 24 }}>
                <Texto tipo="subtitulo" negrita>
                  Mi Progreso
                </Texto>
              </View>
            </View>
          )}
          ListFooterComponent={() => (
            <View style={{ marginBottom: 16, gap: 16 }}>
              <View
                style={{
                  height: 200,
                  overflow: "hidden",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 24,
                  borderRadius: 10,
                }}
              >
                <Image
                  source={require("../../assets/imagenes/mountain.jpg")}
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
                <View
                  style={{
                    position: "absolute",
                    backgroundColor: "rgb(0,0,0,0.5)",
                    height: "100%",
                    width: "100%",
                  }}
                />
                <Texto
                  style={{
                    position: "absolute",
                    fontSize: 19,
                    fontWeight: "700",
                    bottom: 15,
                    left: 8,
                    right: 8,
                  }}
                  color="#fff"
                >
                  "El éxito es la suma de pequeños esfuerzos repetidos día tras
                  día."
                </Texto>
              </View>
              <View style={{ paddingBottom: 8, gap: 10 }}>
                <Texto tipo="subtitulo" negrita color={colores.primario}>
                  Galerías de fotos
                </Texto>
                <ImageSlider />
              </View>
            </View>
          )}
          renderItem={({ item }) => (
            <Pressable
              onPress={() =>
                navigation1.navigate("CursosTab", {
                  screen: "DetalleCurso",
                  params: { id: item.id },
                } as NavigatorScreenParams<CursosStackParamList>)
              }
            >
              <CardCarreraProgreso
                carrera={item.nombre ?? ""}
                progreso={item?.progreso ?? 0}
              />
            </Pressable>
          )}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
        />
      </View>
    </>
  );
};
