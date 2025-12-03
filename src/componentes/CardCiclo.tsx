import { FlatList, View } from "react-native";
import Texto from "./Texto";
import { colores } from "../tema/colores";
import Boton from "./Boton";
import { Ciclo, Curso } from "../modelos/General";

interface Props {
  ciclo: Ciclo;
  navegar: (curso: Curso) => void;
}
const CardCiclo = ({ ciclo, navegar }: Props) => {
  const navegarCurso = (curso: Curso) => {
    navegar(curso);
  }
  return (
    <View
      style={{
        backgroundColor: "#fff",
        borderRadius: 8,
        marginVertical: 8,
        flexDirection: "row",
        overflow: "hidden",
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
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: colores.primario,
          paddingHorizontal: 16,
          paddingVertical: 16,
          gap: 8,
        }}
      >
        <View
          style={{
            height: 60,
            width: 60,
            backgroundColor: colores.gris,
            borderRadius: 30,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Texto tipo="titulo" negrita color={colores.fondo}>
            {ciclo.numero}
          </Texto>
        </View>
        <Texto tipo="normal" negrita color={colores.fondo}>
          Ciclo {ciclo.numero}
        </Texto>
      </View>
      <FlatList
        style={{ flex: 1, padding: 8, gap: 8, justifyContent: 'center' }}
        data={ciclo.cursos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: colores.borderNormal,
              flexDirection: "row",
              padding: 8,
              justifyContent: "space-between",
              alignItems: "center",
              borderRadius: 8,
            }}
          >
            <View style={{ flex: 1, paddingRight: 5 }}>
              <Texto tipo="subnormal" negrita color={colores.primario}>
                {item.nombre}
              </Texto>
            </View>
            <Boton
              estiloTexto={{ fontSize: 14 }}
              variante="varB"
              estilo={{ padding: 8 }}
              titulo="Ver Curso"
              onPress={() => navegarCurso(item)}
            />
          </View>
        )}
      />
    </View>
  );
};

export default CardCiclo;
