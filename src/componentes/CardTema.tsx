import { FontAwesome6 } from "@expo/vector-icons";
import { View } from "react-native";
import Texto from "./Texto";
import { colores } from "../tema/colores";

interface Props {
    titulo: string;
    descripcion: string;
    path: string;
}
const CardTema = ({titulo, descripcion, path}:Props) => {
  return (
    <View
      style={{
        borderRadius: 8,
        backgroundColor: colores.fondo,
        flexDirection: "row",
        // iOS
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        // Android
        elevation: 5,
      }}
    >
      <View
        style={{
          width: 72,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            height: 48,
            width: 48,
            borderRadius: 8,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: colores.borderNormal,
          }}
        >
          <FontAwesome6 name={path} size={30} color={colores.primario} />
        </View>
      </View>
      <View style={{ flex: 1, flexDirection: "column", gap: 8, padding: 8 }}>
        <View>
          <Texto negrita tipo="normal">
            {titulo}
          </Texto>
        </View>
        <View>
          <Texto style={{ flexWrap: "wrap", textAlign:'auto' }} tipo="subnormal" color={colores.gris}>
            {descripcion}
          </Texto>
        </View>
      </View>
    </View>
  );
};

export default CardTema;