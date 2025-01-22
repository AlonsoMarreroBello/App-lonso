import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import loginService from "../../services/login-service";
import { router } from "expo-router";

const signin = () => {
  const emailRegex =
    /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  const passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (id: string, value: string) => {
    setForm({
      ...form,
      [id]: value,
    });
  };

  const handleSubmit = async () => {
    if (
      form.name.trim() != "" &&
      form.name !== undefined &&
      form.email.trim() != "" &&
      form.email !== undefined &&
      form.password.trim() != "" &&
      form.password !== undefined
    ) {
      if (emailRegex.test(form.email) && passRegex.test(form.password)) {
        await loginService.register({
          fullname: form.name,
          email: form.email,
          pswd: form.password,
        });
        router.navigate("/login/login");
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
          <Text style={{ marginLeft: "2%", marginBottom: "2%" }}>Nombre</Text>
          <TextInput
            style={{ borderWidth: 1, borderRadius: 10 }}
            onChangeText={(text) => handleChange("name", text)}
            placeholder="Nombre"
            value={form.name}
          />
        </View>
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
          <TouchableOpacity onPress={() => router.navigate("/login/login")}>
            <Text
              style={{ color: "blue", textAlign: "center", marginTop: "5%" }}
            >
              ¿Ya tienes cuenta? Inicia sesión
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default signin;

const styles = StyleSheet.create({});
