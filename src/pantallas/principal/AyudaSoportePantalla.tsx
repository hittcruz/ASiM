import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navegacion/tipos";
import { Text, View } from "react-native";

type Props = NativeStackScreenProps<RootStackParamList, "AyudaTab">;
export const AyudaPantalla = ({ navigation }: Props) => {
  return (
    <View>
      <Text>Bienvenido a Ayuda</Text>
    </View>
  );
};