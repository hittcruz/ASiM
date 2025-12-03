import { Image, Pressable, View } from "react-native";
import Texto from "./Texto";
import Boton from "./Boton";
import { colores } from "../tema/colores";

interface Props {
  nombre: string;
  id: string;
  onPress: () => void;
}
const CardCarreras = ({ nombre, id, onPress }: Props) => {
  const obtenerRuta = (id: string) => {
    switch (id) {
      case "c1":
        return require("../assets/imagenes/carrera-adminEmpresa.jpg");
      case "c2":
        return require("../assets/imagenes/carrera-contabilidad.jpg");
      case "c3":
        return require("../assets/imagenes/carrera-hotel.jpg");
      case "c4":
        return require("../assets/imagenes/carrera-marketing.jpg");
      default:
        return require("../assets/imagenes/carrera-internacional.jpg");
    }
  };
  const ruta = obtenerRuta(id);
  return (
    <View
      style={{
        height: 210,
        overflow: "hidden",
        backgroundColor: "#fff",
        borderRadius: 8,
      }}
    >
      <Image
        source={ruta}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
      <View
        style={{
          position: "absolute",
          left: 0,
          bottom: 0,
          right: 0,
          top: 0,
          backgroundColor: "rgb(0,0,0,0.6)",
        }}
      />
      <View style={{ position: "absolute", bottom: 16, left: 0, right: 0 }}>
        <View
          style={{
            gap: 15,
            alignItems: "center",

            paddingHorizontal: 8,
            flexDirection: "row",
          }}
        >
          <View style={{ width: "75%" }}>
            <Texto
              style={{ textAlign: "auto" }}
              tipo="subtitulo"
              negrita
              color="#fff"
            >
              {nombre}
            </Texto>
          </View>
          <View
            style={{
              // flex: 1,
              padding: 4,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: colores.secundario,
              height: 35,
              borderRadius: 8,
            }}
          >
            <Pressable onPress={onPress}>
              <Texto tipo="subnormal" negrita color="#fff">
                Ver más
              </Texto>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardCarreras;
