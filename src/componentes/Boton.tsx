import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  ViewStyle,
  TextStyle,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colores } from "../tema/colores";

type BotonTipo = "primario" | "secundario" | "texto";
type BotonVariante = "varA" | "varB";

interface Props {
  titulo: string;
  onPress: () => void;
  tipo?: BotonTipo;
  variante?: BotonVariante;
  icono?: keyof typeof Ionicons.glyphMap;
  cargando?: boolean;
  deshabilitado?: boolean;
  estilo?: ViewStyle;
  estiloTexto?: TextStyle;
}

const Boton = ({
  titulo,
  onPress,
  tipo = "primario",
  variante = "varA",
  icono,
  cargando = false,
  deshabilitado = false,
  estilo,
  estiloTexto,
}: Props) => {
  const estilosTipo = obtenerEstilosTipo(tipo, variante);

  return (
    <TouchableOpacity
      style={[
        estilos.botonBase,
        estilosTipo.boton,
        deshabilitado && estilos.deshabilitado,
        estilo,
      ]}
      onPress={onPress}
      disabled={deshabilitado || cargando}
      activeOpacity={0.8}
    >
      {cargando ? (
        <ActivityIndicator color={estilosTipo.colorTexto} />
      ) : (
        <View style={estilos.contenido}>
          {icono && (
            <Ionicons
              name={icono}
              size={20}
              color={estilosTipo.colorTexto}
              style={{ marginRight: 6 }}
            />
          )}

          <Text
            style={[
              estilos.textoBase,
              { color: estilosTipo.colorTexto },
              estiloTexto,
            ]}
          >
            {titulo}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const obtenerEstilosTipo = (tipo: BotonTipo, variante: BotonVariante) => {
  switch (tipo) {
    case "secundario":
      return {
        boton: {
          backgroundColor: "#FFF",
          borderWidth: 2,
          borderColor: variante === 'varA' ? colores.primario : colores.secundario,
        },
        colorTexto: variante === 'varA' ? colores.primario : colores.secundario,
      };

    case "texto":
      return {
        boton: {
          backgroundColor: "transparent",
        },
        colorTexto: variante === 'varA' ? colores.primario : colores.secundario,
      };

    default:
    case "primario":
      return {
        boton: {
          backgroundColor: variante === 'varA' ? colores.primario : colores.secundario,
        },
        colorTexto: "#FFF",
      };
  }
};

export default Boton;

const estilos = StyleSheet.create({
  botonBase: {
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  textoBase: {
    fontSize: 16,
    fontWeight: "600",
  },
  deshabilitado: {
    opacity: 0.5,
  },
  contenido: {
    flexDirection: "row",
    alignItems: "center",
  },
});
