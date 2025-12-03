import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { CursosStackParamList } from "../../navegacion/tipos";
import { FlatList, Pressable, View } from "react-native";
import Texto from "../../componentes/Texto";
import { colores } from "../../tema/colores";
import { LinearGradient } from "expo-linear-gradient";
import CardCursos from "../../componentes/CardCursos";
import { estudiante } from "../../modelos/mockupEstudiante";

type Props = NativeStackScreenProps<CursosStackParamList, "ListaCursos">;
export const ListaCursosPantalla = ({ navigation }: Props) => {
  const cursos = estudiante.carrera?.ciclos[0].cursos ?? [];
  const navegacion = (id: string) => {
    navigation.navigate("DetalleCurso", { id });
  };
  return (
    <>
      <LinearGradient
        colors={[colores.fondo, "#FFEAD1"]}
        style={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0 }}
      />
      <View style={{ flex: 1, padding: 16, gap: 20 }}>
        <Texto
          tipo="titulo"
          negrita
          color={colores.primario}
          style={{ textAlign: "center" }}
        >
          Cursos Disponibles
        </Texto>
        <View style={{ paddingHorizontal: 16, gap: 20 }}>
          <FlatList
            data={cursos}
            renderItem={({ item }) => (
              <Pressable onPress={() => {}}>
                <CardCursos
                  tituloCurso={item.nombre}
                  descripcion={item.descripcion ?? ""}
                  id={item.id}
                  navegar={() => navegacion(item.id)}
                />
              </Pressable>
            )}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => <View style={{height: 15}} />}
          />
        </View>
      </View>
    </>
  );
};
