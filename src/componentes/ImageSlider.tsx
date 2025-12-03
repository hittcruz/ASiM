import React, { useRef, useState } from "react";
import { View, FlatList, Image, Dimensions, StyleSheet } from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const ITEM_WIDTH = SCREEN_WIDTH - 64; // Margen de 16 a cada lado

// Tus imágenes
const imagenes = [
  { id: "1", source: require("../assets/imagenes/foto_1.jpeg") },
  { id: "3", source: require("../assets/imagenes/foto_3.jpeg") },
  { id: "4", source: require("../assets/imagenes/foto_4.jpeg") },
  { id: "5", source: require("../assets/imagenes/foto_5.jpeg") },
  { id: "6", source: require("../assets/imagenes/foto_6.jpeg") },
  { id: "7", source: require("../assets/imagenes/foto_7.jpeg") },
];

const ImageSlider = () => {
  const [indiceActivo, setIndiceActivo] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setIndiceActivo(viewableItems[0].index || 0);
    }
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={imagenes}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image
              source={item.source}
              style={styles.image}
              resizeMode="cover"
            />
            <View
              style={{
                position: "absolute",
                backgroundColor: "rgba(0,0,0,0.2)",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
              }}
            />
          </View>
        )}
      />

      {/* Indicadores de puntos */}
      <View style={styles.paginacion}>
        {imagenes.map((_, index) => (
          <View
            key={index}
            style={[styles.punto, indiceActivo === index && styles.puntoActivo]}
          />
        ))}
      </View>
    </View>
  );
};

export default ImageSlider;

const styles = StyleSheet.create({
  container: {
    height: 250,
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: "#fff",
    // iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    // Android
    elevation: 5,
  },
  imageContainer: {
    width: ITEM_WIDTH,
    height: 'auto',
  },
  image: {
    width: "100%",
    height: "100%",
  },
  paginacion: {
    flexDirection: "row",
    position: "absolute",
    bottom: 16,
    alignSelf: "center",
    gap: 8,
  },
  punto: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
  puntoActivo: {
    backgroundColor: "white",
    width: 24,
  },
});
