import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const CustomHeader = () => {
  return (
    <View style={styles.profileContainer}>
      <Image
        style={styles.profileImage}
        source={require("../assets/imgs/avatar.png")}
      />
      <View style={styles.profileTextContainer}>
        <Text style={styles.profileName}>Alonso Marrero Bello</Text>
        <Text style={styles.profileDescription}>
          Soy un estudiante de segundo de DAM (desarollo de aplicaciones
          multiplataforma) que odia a uno de sus profesores porque a veces le
          gusta enredar las practicas, porque el pelo no puede.
        </Text>
      </View>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: 16,
    marginVertical: 10,
    borderRadius: 8,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "lightgray",
  },
  profileTextContainer: {
    marginLeft: 10,
  },
  profileName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  profileDescription: {
    width: "25%",
    color: "gray",
  },
});
