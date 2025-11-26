import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { colores } from '../tema/colores';

interface BarraProgresoProps {
  progreso: number; // 0 a 100
  altura?: number;
  colorBarra?: string;
  colorFondo?: string;
  mostrarPorcentaje?: boolean;
  textoPersonalizado?: string;
  animado?: boolean;
  redondeado?: boolean;
}

export const BarraProgreso: React.FC<BarraProgresoProps> = ({
  progreso,
  altura = 15,
  colorBarra = colores.secundario,
  colorFondo = '#E0E0E0',
  mostrarPorcentaje = true,
  textoPersonalizado,
  redondeado = true,
}) => {
  const progresoLimitado = Math.min(Math.max(progreso, 0), 100);

  const estiloContenedor: ViewStyle = {
    ...estilos.contenedor,
    height: altura,
    backgroundColor: colorFondo,
    borderRadius: redondeado ? altura / 2 : 4,
  };

  const estiloBarra: ViewStyle = {
    ...estilos.barra,
    width: `${progresoLimitado}%`,
    backgroundColor: colorBarra,
    borderRadius: redondeado ? altura / 2 : 4,
  };

  return (
    <View style={estilos.wrapper}>
      <View style={estiloContenedor}>
        <View style={estiloBarra} />
        {mostrarPorcentaje && (
          <Text style={[estilos.texto, { lineHeight: altura }]}>
            {textoPersonalizado || `${Math.round(progresoLimitado)}%`}
          </Text>
        )}
      </View>
    </View>
  );
};

const estilos = StyleSheet.create({
  wrapper: {
    width: '100%',
  },
  contenedor: {
    width: '100%',
    overflow: 'hidden',
    justifyContent: 'center',
  },
  barra: {
    height: '100%',
    position: 'absolute',
    left: 0,
    top: 0,
  },
  texto: {
    position: 'absolute',
    width: '100%',
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '600',
    color: colores.texto,
    zIndex: 1,
  },
});
