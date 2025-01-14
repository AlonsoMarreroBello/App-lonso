import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const signin = () => {
  return (
    <View
      style={{
        width: "90%",
        height: "auto",
        alignSelf: "center",
        paddingVertical: "10%",
      }}
    >
      <Text
        style={{
          textAlign: "center",
          fontSize: 32,
          fontWeight: "700",
          marginBottom: "7%",
        }}
      >
        Registro
      </Text>
      <View style={{ marginHorizontal: "10%", marginVertical: "2%" }}>
        <Text style={{ marginLeft: "2%", marginBottom: "2%" }}>Nombre</Text>
        <TextInput
          style={{ borderWidth: 1, borderRadius: 10 }}
          onChangeText={(text) => console.log("name", text)}
          placeholder="Nombre"
        />
      </View>
      <View style={{ marginHorizontal: "10%", marginVertical: "2%" }}>
        <Text style={{ marginLeft: "2%", marginBottom: "2%" }}>Email</Text>
        <TextInput
          style={{ borderWidth: 1, borderRadius: 10 }}
          onChangeText={(text) => console.log("email", text)}
          placeholder="Email"
          inputMode="email"
        />
      </View>
      <View style={{ marginHorizontal: "10%", marginVertical: "2%" }}>
        <Text style={{ marginLeft: "2%", marginBottom: "2%" }}>Contraseña</Text>
        <TextInput
          style={{ borderWidth: 1, borderRadius: 10 }}
          onChangeText={(text) => console.log("password", text)}
          placeholder="Contraseña"
          secureTextEntry={true}
        />
      </View>
    </View>
  );
};

export default signin;

const styles = StyleSheet.create({});
