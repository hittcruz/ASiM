import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { CursosStackParamList } from "../../navegacion/tipos";
import { View, Pressable, Image, FlatList } from "react-native";
import Texto from "../../componentes/Texto";
import { Ionicons } from "@expo/vector-icons";
import { colores } from "../../tema/colores";
import { estudiante } from "../../modelos/mockupEstudiante";
import { LinearGradient } from "expo-linear-gradient";
import CardTema from "../../componentes/CardTema";

type Props = NativeStackScreenProps<CursosStackParamList, "DetalleCurso">;

const DetalleCursoPantalla = ({ route, navigation }: Props) => {
  const { id } = route.params;
  const ruta =
    id === "curso1"
      ? require("../../assets/imagenes/curso_ingles.webp")
      : require("../../assets/imagenes/curso_mate.jpg");

  const curso = estudiante.carrera?.ciclos[0].cursos.find((item) => item.id === id);

  return (
    <>
      <LinearGradient
        colors={[colores.fondo, "#FFEAD1"]}
        style={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0 }}
      />
      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            height: 48,
            alignItems: "center",
            borderBottomWidth: 1,
            borderBottomColor: colores.borderNormal,
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
          <View style={{ flex: 1, marginRight: 48 }}>
            <Texto tipo="subtitulo" style={{ textAlign: "center" }} negrita>
              {curso?.nombre ?? "no existe"}
            </Texto>
          </View>
        </View>
        {curso && (
          <View style={{ paddingTop: 16, paddingHorizontal: 16, gap: 8 }}>
            <View
              style={{
                height: 200,
                borderRadius: 12,
                marginHorizontal: 16,
                overflow: "hidden",
                backgroundColor: colores.gris,
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
            <FlatList
              style={{padding: 16}}
              data={curso.unidades[0].secciones}
              renderItem={({ item }) => (
                <CardTema
                  titulo={item.titulo}
                  descripcion={item.descripcion ?? ""}
                  path={item?.iconoPath ?? ''}
                />
              )}
              ItemSeparatorComponent={() => <View style={{height: 16}}/>}
            />
          </View>
        )}
      </View>
    </>
  );
};
export default DetalleCursoPantalla;
