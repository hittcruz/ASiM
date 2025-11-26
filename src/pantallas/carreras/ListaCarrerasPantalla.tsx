import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { CarreraStackParamList } from "../../navegacion/tipos";
import { FlatList, Pressable, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { colores } from "../../tema/colores";
import Texto from "../../componentes/Texto";
import { carreras } from "../../modelos/mockupCarreras";
import CardCarreras from "../../componentes/CardCarreras";

type Props = NativeStackScreenProps<CarreraStackParamList, "ListaCarreras">;
export const ListaCarrerasPantalla = ({ navigation }: Props) => {
  const navegacion = (id: string) => {
    navigation.navigate("DetalleCarrera", { id });
  };
  return (
    <>
      <LinearGradient
        colors={[colores.fondo, "#9cb7bdff"]}
        style={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0 }}
      />
      <View
        style={{
          flex: 1,
          paddingHorizontal: 16,
        }}
      >
        <Texto tipo="titulo" negrita style={{ textAlign: "center" }}>
          Carreras Disponibles
        </Texto>
        <View
          style={{
            flex: 1,
            paddingTop: 16,
          }}
        >
          <FlatList
            style={{ paddingHorizontal: 16, marginBottom: 16, }}
            data={carreras}
            renderItem={({ item }) => (
              <Pressable onPress={() => {}}>
                <CardCarreras
                  nombre={item.nombre}
                  id={item.id}
                  onPress={() => navegacion(item.id)}
                />
              </Pressable>
            )}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
          />
        </View>
      </View>
    </>
  );
};
