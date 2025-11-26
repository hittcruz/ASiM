import { NavigatorScreenParams } from "@react-navigation/native";

export type RootStackParamList = {
  Bienvenida: undefined;
  Login: undefined;
  Registro: undefined;

  // Tabs principales
  InicioTab: undefined;
  CursosTab: NavigatorScreenParams<CursosStackParamList>;
  ConfiguracionTab: undefined;
  AyudaTab: undefined;
  CarrerasTab: NavigatorScreenParams<CarreraStackParamList>;
};

export type CursosStackParamList = {
  ListaCursos: undefined;
  DetalleCurso: { id: string };
};

export type CarreraStackParamList = {
  ListaCarreras: undefined;
  DetalleCarrera: { id: string };
}