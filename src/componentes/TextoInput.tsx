import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TextInputProps,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colores } from "../tema/colores";

interface Props extends TextInputProps {
  esPassword?: boolean;
  iconLeft?: keyof typeof Ionicons.glyphMap;
  iconRight?: keyof typeof Ionicons.glyphMap;
}

const TextoInput = ({
  esPassword = false,
  iconLeft,
  iconRight,
  style,
  ...rest
}: Props) => {
  const [oculto, setOculto] = useState(esPassword);

  return (
    <View style={estilos.contenedor}>
      
      {/* Ícono izquierdo opcional */}
      {iconLeft && (
        <Ionicons
          name={iconLeft}
          size={22}
          color="#6B7280"
          style={{ marginRight: 8 }}
        />
      )}

      {/* Campo de texto */}
      <TextInput
        style={[estilos.input, style]}
        secureTextEntry={oculto}
        placeholderTextColor={colores.gris}
        {...rest}
      />

      {/* Ícono derecho SI NO es contraseña */}
      {!esPassword && iconRight && (
        <Ionicons
          name={iconRight}
          size={22}
          color={colores.gris}
          style={{ marginLeft: 8 }}
        />
      )}

      {/* Botón OJO solo si es contraseña */}
      {esPassword && (
        <TouchableOpacity onPress={() => setOculto(!oculto)}>
          <Ionicons
            name={oculto ? "eye-off-outline" : "eye-outline"}
            size={22}
            color={colores.gris}
            style={{ marginLeft: 8 }}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}

export default TextoInput;

const estilos = StyleSheet.create({
  contenedor: {
    width: "100%",
    backgroundColor: "#FFF",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colores.borderNormal,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 14,
    color: colores.texto,
  },
});
