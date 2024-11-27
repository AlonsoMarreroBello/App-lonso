import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { ReactElement, useState } from "react";
import AlertBox from "../alertBox/AlertBox";

type CustomModalPropType = {
  modalVisible: boolean;
  setModalVisible: Function;
  addProduct: Function;
};

const CustomModal = ({
  modalVisible,
  setModalVisible,
  addProduct,
}: CustomModalPropType) => {
  const [showMessage, setShowMessage] = useState(false);
  const [form, setForm] = useState({
    productName: "",
    productPrice: 0,
    productAmount: 0,
    productCategory: "",
  });

  const handleChange = (id: string, value: string) => {
    if (id === "productPrice") {
      const parsedValue = parseFloat(value);
      setForm({
        ...form,
        productPrice: parsedValue,
      });
    } else if (id === "productAmount") {
      const parsedValue = parseInt(value);
      setForm({
        ...form,
        productPrice: parsedValue,
      });
    } else {
    }
    setForm({
      ...form,
      [id]: value,
    });
  };

  const handleSubmit = () => {
    console.log(form);
    if (
      form.productName.trim() !== "" &&
      form.productPrice !== 0 &&
      form.productAmount !== 0 &&
      form.productCategory.trim() !== ""
    ) {
      addProduct(form);
      setForm({
        productName: "",
        productPrice: 0,
        productAmount: 0,
        productCategory: "",
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
                onChangeText={(text) => handleChange("productName", text)}
                placeholder="Nombre"
              />
            </View>
            <View>
              <Text>Precio</Text>
              <TextInput
                onChangeText={(text) => handleChange("productPrice", text)}
                placeholder="Precio"
                keyboardType="numeric"
              />
            </View>
            <View>
              <Text>Cantidad</Text>
              <TextInput
                onChangeText={(text) => handleChange("productAmount", text)}
                placeholder="Cantidad"
                keyboardType="numeric"
              />
            </View>
            <View>
              <Text>Categoria</Text>
              <TextInput
                onChangeText={(text) => handleChange("productCategory", text)}
                placeholder="Categoría"
              />
            </View>
            <Pressable style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Añadir producto</Text>
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
