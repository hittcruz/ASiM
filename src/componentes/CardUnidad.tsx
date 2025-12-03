import { Animated, FlatList, Image, Pressable, View } from "react-native";
import { colores } from "../tema/colores";
import Texto from "./Texto";
import { FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import { useRef, useState } from "react";
import { Unidad } from "../modelos/General";

interface Props {
  unidad: Unidad;
}
const CardUnidad = ({ unidad }: Props) => {
  const [mostrarSeccion, setMostrarSeccion] = useState(false);
  const [abierto, setAbierto] = useState(false);
  const rotation = useRef(new Animated.Value(0)).current;

  const animHeight = useRef(new Animated.Value(0)).current;
  const animOpacity = useRef(new Animated.Value(0)).current;

  const rotar = () => {
    Animated.timing(rotation, {
      toValue: abierto ? 0 : 1,
      duration: 200,
      useNativeDriver: true,
    }).start();

    setAbierto(!abierto);
  };

  const toggleSeccion = () => {
  setMostrarSeccion(!mostrarSeccion);

  Animated.parallel([
    Animated.timing(animHeight, {
      toValue: mostrarSeccion ? 0 : 1,
      duration: 250,
      useNativeDriver: false, // height no acepta driver nativo
    }),
    Animated.timing(animOpacity, {
      toValue: mostrarSeccion ? 0 : 1,
      duration: 200,
      useNativeDriver: true,
    }),
  ]).start();
};


  const rotacionInterpolada = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  const heightInterpolada = animHeight.interpolate({
  inputRange: [0, 1],
  outputRange: [0, 150], // ajusta a la altura real del contenido
});


  return (
    <View
      style={{
        backgroundColor: "#fff",
        gap: 10,
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
      <View style={{ gap: 8, flexDirection: "row" }}>
        <View
          style={{
            backgroundColor: colores.borderNormal,
            paddingHorizontal: 8,
            height: 'auto',
            borderRadius: 8,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("../assets/imagenes/icono.png")}
            style={{ height: 40, width: 40 }}
          />
          <Texto tipo="pequeno" negrita>
            Unidad {unidad.numero}
          </Texto>
        </View>
        <View
          style={{
            flex: 1,
          }}
        >
          <Texto negrita tipo="normal" color={colores.primario}>
            Unidad {unidad.numero}
          </Texto>
          <View style={{ marginTop: 4, padding: 4 }}>
            <Texto
              style={{ alignItems: "flex-start", flexWrap: "wrap" }}
              tipo="pequeno"
              color={colores.primario}
            >
              {unidad?.descripcion ?? "No hay descripción disponible."}
            </Texto>
          </View>
        </View>
        <Pressable
          style={{
            height: 30,
            width: 30,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            setMostrarSeccion(!mostrarSeccion);
            rotar();
          }}
        >
          <Animated.View
            style={{ transform: [{ rotate: rotacionInterpolada }] }}
          >
            <MaterialIcons
              name="keyboard-arrow-down"
              size={24}
              color={colores.primario}
            />
          </Animated.View>
        </Pressable>
      </View>
      {mostrarSeccion && (
        <View style={{ marginLeft: 78 }}>
          <Texto negrita tipo="normal" color={colores.primario}>
            Secciones:
          </Texto>
          <FlatList
            style={{ flex: 1, marginLeft: 16, gap: 4 }}
            data={unidad.secciones}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View
                style={{ flex: 1, marginTop: 8, flexDirection: "row", gap: 5 }}
              >
                <FontAwesome6
                  name="check-to-slot"
                  size={16}
                  color={colores.secundario}
                />
                <View style={{ flex: 1 }}>
                  <Texto tipo="pequeno" color={colores.primario}>
                    {item.titulo}
                  </Texto>
                </View>
              </View>
            )}
          />
        </View>
      )}
    </View>
  );
};

export default CardUnidad;
