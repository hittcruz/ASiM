import React from "react";
import { Text, TextProps, StyleSheet } from "react-native";
import { colores } from "../tema/colores";
import {
  OpenSans_400Regular,
  OpenSans_700Bold,
  useFonts,
} from "@expo-google-fonts/open-sans";

interface Props extends TextProps {
  tipo?: "titulo" | "subtitulo" | "normal" | "subnormal" | "pequeno";
  color?: string;
  negrita?: boolean;
}

const Texto = ({
  children,
  tipo = "normal",
  color = colores.texto,
  negrita = false,
  style,
  ...rest
}: Props) => {
  const [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_700Bold,
  });

  if (!fontsLoaded) return null;
  return (
    <Text
      style={[
        estilos[tipo],
        {
          color,
          fontFamily: negrita ? "OpenSans_700Bold" : "OpenSans_400Regular",
          textAlign: "justify",
        },
        style,
      ]}
      {...rest}
    >
      {children}
    </Text>
  );
};

export default Texto;

const estilos = StyleSheet.create({
  titulo: {
    fontSize: 30,
  },
  subtitulo: {
    fontSize: 20,
  },
  normal: {
    fontSize: 16,
  },
  subnormal: {
    fontSize: 14,
  },
  pequeno: {
    fontSize: 12,
  },
});
