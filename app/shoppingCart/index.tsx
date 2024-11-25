import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
  Image,
} from "react-native";
import { CartProduct } from "../../types";
import React, { useEffect, useState } from "react";
import uuid from "react-native-uuid";

const products: CartProduct[] = [
  {
    id: uuid.v4(),
    name: "pan en barra",
    category: "panadería",
    amount: 4,
    price: 2,
    isBought: false,
  },
  {
    id: uuid.v4(),
    name: "aceite de oliva virgen extra",
    category: "otros",
    amount: 1,
    price: 8,
    isBought: false,
  },
  {
    id: uuid.v4(),
    name: "atún en lata",
    category: "enlatados",
    amount: 2,
    price: 3.75,
    isBought: false,
  },
];

const getProductImage = async (keyword: string, category: string) => {
  try {
    const response = await fetch(
      `https://pixabay.com/api/?key=47286323-63b51857795ae6a72b02911ed&q=${keyword}category=${category}&lang=es`
    );
    const text = await response.text();
    const data = JSON.parse(text);

    if (data.hits && data.hits.length > 0) {
      return data.hits[0].webformatURL; // Devuelve la URL de la primera imagen
    }
    return "https://via.placeholder.com/500"; // Imagen de reemplazo si no se encuentra
  } catch (error) {
    console.error("Error fetching image", error);
    return "https://via.placeholder.com/500"; // Imagen de reemplazo en caso de error
  }
};

const index = () => {
  const [totalPrice, setTotalPrice] = useState(0.0);
  const [productList, setProductList] = useState(products);
  const [productImages, setProductImages] = useState<{ [key: string]: string }>(
    {}
  );

  useEffect(() => {
    const fetchImages = async () => {
      const images: { [key: string]: string } = {};
      for (const product of products) {
        const imageUrl = await getProductImage(product.name, product.category); // Utilizamos el nombre del producto como keyword
        images[product.id] = imageUrl;
      }
      setProductImages(images);
    };
    fetchImages();
  }, [products]);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titleText}>Lista de la compra - {totalPrice}</Text>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Añadir producto</Text>
        </Pressable>
      </View>
      <View style={styles.listContainer}>
        <ScrollView style={styles.productList}>
          {productList.map((product, index) => (
            <View
              key={product.id}
              style={[
                styles.productContainer,
                index % 2 === 0 ? styles.evenBackground : styles.oddBackground,
              ]}
            >
              <View style={styles.productImageContainer}>
                <Image
                  source={{ uri: productImages[product.id] }}
                  style={styles.productImage}
                />
              </View>
              <View style={styles.productDetails}>
                <Text style={styles.productText}>Nombre: {product.name}</Text>
                <Text style={styles.productText}>
                  Cantidad: {product.amount}
                </Text>
                <Text style={styles.productText}>Precio: {product.price}€</Text>
              </View>
              <View style={styles.actionButtons}>
                <Pressable style={[styles.productButton, styles.cartButton]}>
                  <Image
                    resizeMode="contain"
                    source={require("../../assets/imgs/icons8-agregar-a-carrito-de-compras-100.png")}
                    style={styles.icon}
                  />
                </Pressable>
                <Pressable style={[styles.productButton, styles.trashButton]}>
                  <Image
                    resizeMode="contain"
                    source={require("../../assets/imgs/icons8-basura-128.png")}
                    style={styles.icon}
                  />
                </Pressable>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "red",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  listContainer: {
    width: "100%",
  },
  productList: {
    backgroundColor: "#00000044",
    minHeight: "80%",
    borderRadius: 20,
  },
  productContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  evenBackground: {
    backgroundColor: "#00000066",
  },
  oddBackground: {
    backgroundColor: "#00000033",
  },
  productDetails: {
    flex: 1,
    paddingRight: 10,
  },
  productText: {
    fontSize: 16,
  },
  productImageContainer: {
    marginRight: 10,
    width: 80,
    height: 80,
  },
  productImage: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  actionButtons: {
    flexDirection: "row",
    alignItems: "center",
  },
  productButton: {
    marginHorizontal: 10,
    width: 40, // Tamaño del cuadrado
    height: 40, // Tamaño del cuadrado
    justifyContent: "center", // Centra el contenido verticalmente
    alignItems: "center", // Centra el contenido horizontalmente
    borderRadius: 10,
    borderWidth: 1,
    transform: [{ rotate: "45deg" }], // Gira el contenedor para formar un rombo
  },
  cartButton: {
    backgroundColor: "#FFFFFFAA",
  },
  trashButton: {
    backgroundColor: "#FF0000AA",
  },
  icon: {
    transform: [{ rotate: "-45deg" }], // Revertir la rotación del contenido
    width: 25,
    height: 25,
  },
});
