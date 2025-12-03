import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { CarreraStackParamList } from "../../navegacion/tipos";
import { LinearGradient } from "expo-linear-gradient";
import { colores } from "../../tema/colores";
import { FlatList, Pressable, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Texto from "../../componentes/Texto";
import CardCiclo from "../../componentes/CardCiclo";
import { carreras } from "../../modelos/mockupCarreras";
import { Curso } from "../../modelos/General";

type Props = NativeStackScreenProps<CarreraStackParamList, "CiclosCarreras">;
export const CicloCarreraPantalla = ({ route, navigation }: Props) => {
  const { id } = route.params;
  const carrera = carreras.find((c) => c.id === id);
  const navegar = (curso: Curso) => {
    navigation.navigate("CursoDesdeCarrera", { curso });
  };
  return (
    <>
      <LinearGradient
        colors={[colores.fondo, "#9cb7bdff"]}
        style={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0 }}
      />
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
            <Ionicons name="arrow-back" size={30} color={colores.primario} />
          </Pressable>
        </View>
        <View style={{ flex: 1, marginRight: 48 }}>
          <Texto tipo="subtitulo" style={{ textAlign: "center" }} negrita>
            Plan de Estudios
          </Texto>
        </View>
      </View>
      <View style={{ flex: 1, paddingHorizontal: 16 }}>
        <FlatList
          style={{
            flex: 1,
          }}
          contentContainerStyle={{
            paddingTop: 16,
            paddingBottom: 32,
          }}
          data={carrera?.ciclos ?? []}
          renderItem={({ item }) => (
            <CardCiclo ciclo={item} navegar={(curso) => navegar(curso)} />
          )}
          ItemSeparatorComponent={() => <View style={{ height: 0 }} />}
        />
      </View>
    </>
  );
};
