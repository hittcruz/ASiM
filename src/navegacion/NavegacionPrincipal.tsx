import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { InicioPantalla } from "../pantallas/principal/InicioPantalla";
import { NavegacionCursos } from "./NavegacionCursos";
import { AyudaPantalla } from "../pantallas/principal/AyudaSoportePantalla";
import { ConfigPantalla } from "../pantallas/principal/ConfiguracionPantalla";
import { RootStackParamList } from "./tipos";
import { colores } from "../tema/colores";
import { CustomTabBar } from "../componentes/CustomTabBar";
import { NavegacionCarreras } from "./NavegacionCarreras";

const Tab = createBottomTabNavigator<RootStackParamList>();

export const NavegacionPrincipal = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          if (route.name === "InicioTab") {
            iconName = focused ? "person" : "person-outline";
          } else if (route.name === "CursosTab") {
            iconName = focused ? "book" : "book-outline";
          } else if (route.name === "CarrerasTab") {
            iconName = focused ? "school" : "school-outline";
          } else if (route.name === "ConfiguracionTab") {
            iconName = focused ? "settings" : "settings-outline";
          } else {
            iconName = "ellipse";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#BA1823", // Color cuando está activo
        tabBarInactiveTintColor: "#777777", // Color cuando está inactivo
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          borderTopWidth: 1, // Elimina el borde superior
          elevation: 0, // Elimina sombra en Android
          shadowOpacity: 0, // Elimina sombra en iOS
          height: 65, // Altura del tab bar
          paddingBottom: 8,
          paddingTop: 4,
          shadowColor: "rgba(0,0,0,0.06)",
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: "400",
        },
      })}
    >
      <Tab.Screen
        name="CarrerasTab"
        component={NavegacionCarreras}
        options={{ tabBarLabel: "Carreras" }}
      />
      <Tab.Screen
        name="InicioTab"
        component={InicioPantalla}
        options={{ tabBarLabel: "Perfil" }}
      />
      <Tab.Screen
        name="CursosTab"
        component={NavegacionCursos}
        options={{ tabBarLabel: "Cursos" }}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate("CursosTab", { screen: "ListaCursos" });
          },
        })}
      />
      <Tab.Screen
        name="ConfiguracionTab"
        component={ConfigPantalla}
        options={{ tabBarLabel: "Configuración" }}
      />
    </Tab.Navigator>
  );
};
