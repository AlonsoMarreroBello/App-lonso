import { StyleSheet, Text, TextInput, View, Pressable } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Redirect, router } from "expo-router";

const login = () => {
  const emailRegex =
    /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (id: string, value: string) => {
    setForm({
      ...form,
      [id]: value,
    });
  };

  const handleSubmit = () => {
    if (
      form.email.trim() != "" &&
      form.email !== undefined &&
      form.password.trim() != "" &&
      form.password !== undefined
    ) {
      if (emailRegex.test(form.email)) {
        console.log(form); // Lógica de solicitud a la API
        loginService.logIn();
        router.navigate("/drawer/welcome");
      }
    }
  };

  return (
    <>
      <StatusBar />
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
          <Text style={{ marginLeft: "2%", marginBottom: "2%" }}>Email</Text>
          <TextInput
            style={{ borderWidth: 1, borderRadius: 10 }}
            onChangeText={(text) => handleChange("email", text)}
            placeholder="Email"
            inputMode="email"
            value={form.email}
          />
        </View>
        <View style={{ marginHorizontal: "10%", marginVertical: "2%" }}>
          <Text style={{ marginLeft: "2%", marginBottom: "2%" }}>
            Contraseña
          </Text>
          <TextInput
            style={{ borderWidth: 1, borderRadius: 10 }}
            onChangeText={(text) => handleChange("password", text)}
            placeholder="Contraseña"
            secureTextEntry={true}
            value={form.password}
          />

          <View
            style={{
              alignSelf: "center",
              backgroundColor: "red",
              padding: "4%",
              marginTop: "6%",
              borderRadius: 10,
            }}
          >
            <Pressable style={{}} onPress={handleSubmit}>
              <Text style={{ color: "white", fontWeight: "bold" }}>
                Registrarse
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </>
  );
};

export default login;

const styles = StyleSheet.create({});
