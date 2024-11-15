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
        <Text style={styles.profileName}>Nombre</Text>
        <Text style={styles.profileDescription}>
          texto ejemplo texto ejemplo texto ejemplo texto ejemplo texto ejemplo
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
    color: "gray",
  },
});
