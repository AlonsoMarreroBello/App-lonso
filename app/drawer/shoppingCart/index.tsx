import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
  Image,
  Modal,
} from "react-native";
import { CartProduct } from "../../../types";
import React, { useState } from "react";
import uuid from "react-native-uuid";
import { useEffect } from "react";
import CustomModal from "../../../components/modal/CustomModal";

const cleanProduct: CartProduct = {
  id: "",
  name: "",
  category: "",
  amount: 0,
  price: 0,
  isBought: false,
};

const getProductImageFromData = (category: string) => {
  if (category == "panaderia") {
    return require("../../../assets/imgs/panaderia.jpg");
  } else if (category == "enlatados") {
    return require("../../../assets/imgs/lata.jpg");
  } else if (category == "bebidas") {
    return require("../../../assets/imgs/botella.jpg");
  } else if (category == "carnes") {
    return require("../../../assets/imgs/carne.jpg");
  } else if (category == "pescados") {
    return require("../../../assets/imgs/pescado.jpg");
  } else if (category == "frutas" || category == "verduras") {
    return require("../../../assets/imgs/frutas.jpeg");
  } else {
    return require("../../../assets/imgs/icons8-cesto-90.png");
  }
};

const index = () => {
  const [totalPrice, setTotalPrice] = useState(0.0);
  const [productList, setProductList] = useState<CartProduct[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [productToEdit, setProductToEdit] = useState<CartProduct>(cleanProduct);

  const handleAddProductToList = (productData: CartProduct) => {
    const newProduct = {
      id: uuid.v4(),
      name: productData.name,
      category: productData.category,
      amount: productData.amount,
      price: productData.price,
      isBought: false,
    };

    setProductList((prevProducts) => [...prevProducts, newProduct]);
  };

  const handleEdit = (product: CartProduct) => {
    setProductToEdit(product);
    setModalVisible(true);
  };

  const handleDeleteAll = () => {
    const newList: CartProduct[] = [];
    setProductList(newList);
    setDeleteModalVisible(false);
  };

  const deleteProduct = (product: CartProduct) => {
    setProductList(productList.filter((listProduct) => product != listProduct));
  };

  const addProductToCart = (product: CartProduct) => {
    let products: CartProduct[] = [];
    productList.forEach((actualProduct) => {
      if (product === actualProduct) {
        actualProduct.isBought = !actualProduct.isBought;
      }
      products = [...products, actualProduct];
    });
    products.sort((a, b) => {
      if (a.isBought === b.isBought) return 0;
      return a.isBought ? 1 : -1;
    });
    setProductList(products);
  };

  const updateProduct = (newProduct: CartProduct) => {
    setProductList((prevList) =>
      prevList.map((product) =>
        product.id === newProduct.id ? { ...product, ...newProduct } : product
      )
    );
    setProductToEdit(cleanProduct);
  };

  const calculateTotalPrice = () => {
    let sum = 0;
    const totalProducts = productList;
    totalProducts.forEach((product) => {
      if (product.isBought) {
        sum = sum + product.amount * product.price;
      }
    });
    setTotalPrice(sum);
  };

  useEffect(() => {
    calculateTotalPrice();
  }, [productList]);

  return (
    <View style={styles.container}>
      {modalVisible && (
        <>
          <CustomModal
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            addProduct={handleAddProductToList}
            modifyProduct={updateProduct}
            productToEdit={productToEdit}
          />
        </>
      )}
      {deleteModalVisible && (
        <>
          <Modal transparent={true}>
            <View style={styles.modalOutterView}>
              <View style={styles.modalInnerView}>
                <Text>
                  ¿Está seguro de que desea elimiar todos los productos?
                </Text>
                <View style={styles.buttonContainer}>
                  <Pressable
                    style={styles.button}
                    onPress={() => setDeleteModalVisible(false)}
                  >
                    <Text style={styles.buttonText}>Cancelar</Text>
                  </Pressable>
                  <Pressable
                    style={styles.button}
                    onPress={() => handleDeleteAll()}
                  >
                    <Text style={styles.buttonText}>Eliminar</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </Modal>
        </>
      )}
      <View>
        <Text style={styles.titleText}>Lista de la compra - {totalPrice}</Text>
        <View style={styles.buttonContainer}>
          <Pressable
            style={styles.button}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.buttonText}>Añadir producto</Text>
          </Pressable>
          <Pressable
            style={
              productList.length != 0 ? styles.button : styles.buttonDeactivated
            }
            onPress={() =>
              productList.length != 0 && setDeleteModalVisible(true)
            }
          >
            <Text style={styles.buttonText}>Eliminar todo</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.listContainer}>
        {productList.length > 0 ? (
          <ScrollView style={styles.productList}>
            {productList.map((product, index) => (
              <View
                key={product.id}
                style={[
                  styles.productContainer,
                  index % 2 === 0
                    ? styles.evenBackground
                    : styles.oddBackground,
                ]}
              >
                <View style={styles.productImageContainer}>
                  <Image
                    source={getProductImageFromData(product.category)}
                    style={styles.productImage}
                  />
                </View>
                <View style={styles.productDetails}>
                  <Text style={(styles.productText, styles.productName)}>
                    {product.name}
                  </Text>
                  <Text style={styles.productText}>
                    Cantidad: {product.amount}
                  </Text>
                  <Text style={styles.productText}>
                    Precio: {product.price}€
                  </Text>
                </View>
                <View style={styles.actionButtons}>
                  <Pressable
                    style={[styles.productButton, styles.cartButton]}
                    onPress={() => handleEdit(product)}
                  >
                    <Image
                      resizeMode="contain"
                      source={require("../../../assets/imgs/icons8-editar-96.png")}
                      style={styles.icon}
                    />
                  </Pressable>
                  {product.isBought ? (
                    <>
                      <Pressable
                        style={[styles.productButton, styles.cartButtonBuyed]}
                        onPress={() => addProductToCart(product)}
                      >
                        <Image
                          resizeMode="contain"
                          source={require("../../../assets/imgs/icons8-marca-de-verificación-100.png")}
                          style={styles.icon}
                        />
                      </Pressable>
                    </>
                  ) : (
                    <>
                      <Pressable
                        style={[styles.productButton, styles.cartButton]}
                        onPress={() => addProductToCart(product)}
                      >
                        <Image
                          resizeMode="contain"
                          source={require("../../../assets/imgs/icons8-agregar-a-carrito-de-compras-100.png")}
                          style={styles.icon}
                        />
                      </Pressable>
                    </>
                  )}
                  <Pressable
                    style={[styles.productButton, styles.trashButton]}
                    onPress={() => deleteProduct(product)}
                  >
                    <Image
                      resizeMode="contain"
                      source={require("../../../assets/imgs/icons8-basura-128.png")}
                      style={styles.icon}
                    />
                  </Pressable>
                </View>
              </View>
            ))}
          </ScrollView>
        ) : (
          <View style={styles.productList}>
            <View style={styles.noProductsContainer}>
              <Text style={styles.noProductsContainerText}>
                No hay productos agregados
              </Text>
            </View>
          </View>
        )}
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
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
  button: {
    backgroundColor: "red",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonDeactivated: {
    backgroundColor: "#FF000077",
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
  modalOutterView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000AA",
  },
  modalInnerView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  listContainer: {
    width: "100%",
  },
  productList: {
    backgroundColor: "#00000044",
    minHeight: "80%",
    borderRadius: 20,
  },
  productBought: {
    textDecorationLine: "line-through",
  },
  productContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  noProductsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  noProductsContainerText: {
    fontSize: 26,
    textAlign: "center",
    fontWeight: "600",
    textShadowColor: "redwhite", // Color del "borde"
    textShadowOffset: { width: 2, height: 2 }, // Desplazamiento de la sombra
    textShadowRadius: 3, // Radio de la sombra
  },
  evenBackground: {
    backgroundColor: "#00000033",
  },
  oddBackground: {
    backgroundColor: "#00000022",
  },
  productDetails: {
    flex: 1,
    paddingRight: 10,
  },
  productText: {
    fontSize: 14,
  },
  productName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  productImageContainer: {
    marginRight: 10,
    width: 70,
    height: 70,
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
    marginRight: 10,
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
  cartButtonBuyed: {
    backgroundColor: "#00FF00AA",
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
