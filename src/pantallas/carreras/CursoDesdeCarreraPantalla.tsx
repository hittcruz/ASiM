import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FlatList, Pressable, View } from "react-native";
import { CarreraStackParamList } from "../../navegacion/tipos";
import { LinearGradient } from "expo-linear-gradient";
import { colores } from "../../tema/colores";
import { Ionicons } from "@expo/vector-icons";
import Texto from "../../componentes/Texto";
import CardUnidad from "../../componentes/CardUnidad";

type Props = NativeStackScreenProps<CarreraStackParamList, "CursoDesdeCarrera">;
export const CursoDesdeCarreraPantalla = ({ route, navigation }: Props) => {
  const { curso } = route.params;
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
            <Ionicons name="arrow-back" size={30} color="black" />
          </Pressable>
        </View>
        <View style={{ flex: 1, marginRight: 48 }}>
          <Texto tipo="subtitulo" style={{ textAlign: "center" }} negrita>
            {curso?.nombre ?? "no existe"}
          </Texto>
        </View>
      </View>
      <View style={{ flex: 1, padding: 16, gap: 16,}}>
        <View
          style={{
            backgroundColor: "#fff",
            gap: 10,
            marginHorizontal: 8,
            padding: 8,
            borderRadius: 8,
            // iOS
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.15,
            shadowRadius: 4,
            // Android
            elevation: 5,
          }}
        >
          <Texto tipo="normal" negrita>
            Información general
          </Texto>
          <Texto style={{padding: 8}} tipo="subnormal" color={colores.gris}>
            {curso?.descripcion ?? "No hay descripción disponible."}
          </Texto>
        </View>
        <FlatList
          style={{ flex: 1, gap: 8, paddingHorizontal: 8}}
          contentContainerStyle={{ paddingBottom: 16 }}
          data={curso.unidades}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <CardUnidad unidad={item} />}
          ItemSeparatorComponent={()=> <View style={{height: 16}} />}
        />
      </View>
    </>
  );
};
