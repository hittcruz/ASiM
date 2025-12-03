import { Image, View } from "react-native";
import Texto from "./Texto";
import Boton from "./Boton";
import { colores } from "../tema/colores";

interface Props {
  tituloCurso: string;
  descripcion: string;
  id: string;
  navegar: () => void;
}
const CardCursos = ({ tituloCurso, descripcion, id, navegar }: Props) => {
  const ruta = id === 'curso1'  ? require('../assets/imagenes/curso_ingles.webp') : require('../assets/imagenes/curso_mate.jpg'); 
  
  return (
    <View
      style={{
        height: 320,
        borderRadius: 12,
        overflow: "hidden",
        backgroundColor: colores.gris,
      }}
    >
      <View style={{ height: 200 }}>
        <Image
          source={ruta}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </View>
      <View style={{ flex: 1, paddingHorizontal: 8, backgroundColor: "#FFF" }}>
        <View
          style={{
            paddingHorizontal: 8,
            paddingTop: 16,
            justifyContent: "center",
          }}
        >
          <Texto tipo="normal" negrita>
            {tituloCurso}
          </Texto>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={{ flex: 4 / 5, padding: 8 }}>
            <Texto tipo="subnormal" style={{ textAlign: "auto" }}>
              {descripcion}
            </Texto>
          </View>
          <View
            style={{
              flex: 2 / 5,
              // padding: 8,
              justifyContent: "center",
            }}
          >
            <Boton
              titulo="Explorar"
              onPress={() => {
                navegar();
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardCursos;
