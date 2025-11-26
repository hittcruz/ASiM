import { View } from "react-native";
import { colores } from "../tema/colores";
import Texto from "./Texto";
import { BarraProgreso } from "./BarraProgreso";

interface Props {
    carrera: string;
    progreso: number;
}

const CardCarreraProgreso = ({carrera, progreso}: Props) => {
    return (
        <View
            style={{
              backgroundColor: "#FFF",
              padding: 16,
              // borderWidth: 1,
              borderColor: colores.borderNormal,
              borderRadius: 8,
              gap: 10,
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
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Texto tipo="subnormal" negrita>
                {carrera}
              </Texto>
              <Texto tipo="subnormal" negrita color={colores.secundario}>
                {progreso}%
              </Texto>
            </View>
            <BarraProgreso progreso={progreso} mostrarPorcentaje={false} />
          </View>
    )
}

export default CardCarreraProgreso;