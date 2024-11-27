import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import AlertBox from "../alertBox/AlertBox";
import { CartProduct } from "../../types";

type CustomModalPropType = {
  modalVisible: boolean;
  setModalVisible: Function;
  addProduct: Function;
  modifyProduct: Function;
  productToEdit: CartProduct;
};

const CustomModal = ({
  modalVisible,
  setModalVisible,
  addProduct,
  modifyProduct,
  productToEdit,
}: CustomModalPropType) => {
  const [showMessage, setShowMessage] = useState(false);
  const [form, setForm] = useState(productToEdit);

  const handleChange = (id: string, value: string) => {
    if (id === "price") {
      const parsedValue = parseFloat(value);
      setForm({
        ...form,
        price: parsedValue,
      });
    } else if (id === "amount") {
      const parsedValue = parseInt(value);
      setForm({
        ...form,
        amount: parsedValue,
      });
    } else {
    }
    setForm({
      ...form,
      [id]: value,
    });
  };

  const handleSubmit = () => {
    if (
      form.name.trim() !== "" &&
      form.price > 0 &&
      form.amount > 0 &&
      form.category.trim() !== ""
    ) {
      if (form.id.trim() === "") {
        addProduct(form);
      } else {
        modifyProduct(form);
      }
      setForm({
        id: "",
        name: "",
        category: "",
        amount: 0,
        price: 0,
        isBought: false,
      });
      setModalVisible(!modalVisible);
    } else {
      setShowMessage(true);
      setTimeout(function () {
        setShowMessage(false);
      }, 3000);
    }
  };

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View>
              <Text>Nombre</Text>
              <TextInput
                value={form.name}
                onChangeText={(text) => handleChange("name", text)}
                placeholder="Nombre"
              />
            </View>
            <View>
              <Text>Precio</Text>
              <TextInput
                value={String(form.price)}
                onChangeText={(text) => handleChange("price", text)}
                placeholder="Precio"
                keyboardType="numeric"
              />
            </View>
            <View>
              <Text>Cantidad</Text>
              <TextInput
                value={String(form.amount)}
                onChangeText={(text) => handleChange("amount", text)}
                placeholder="Cantidad"
                keyboardType="numeric"
              />
            </View>
            <View>
              <Text>Categoria</Text>
              <TextInput
                value={form.category}
                onChangeText={(text) => handleChange("category", text)}
                placeholder="Categoría"
              />
            </View>
            <Pressable style={styles.button} onPress={handleSubmit}>
              {productToEdit.name.trim() != "" ? (
                <Text style={styles.buttonText}>Editar producto</Text>
              ) : (
                <Text style={styles.buttonText}>Añadir producto</Text>
              )}
            </Pressable>
            {showMessage && (
              <AlertBox
                message={"Todos los campos son obligatorios"}
                setShowMessage={setShowMessage}
              />
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000AA",
  },
  modalView: {
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
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: "red",
  },
  buttonText: {
    alignSelf: "center",
    color: "white",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
