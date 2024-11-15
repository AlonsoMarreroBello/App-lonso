import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";

const AppLayout = () => {
  return (
    <View style={styles.wrapper}>
      <StatusBar />
      <View style={styles.header}>
        <View style={styles.menuIcon}>
          <Text style={styles.menuIconText}>☰</Text>
        </View>
        <Text style={styles.headerText}>My App</Text>
      </View>
      <Slot />
    </View>
  );
};

export default AppLayout;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    backgroundColor: "#D32F2F",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    paddingTop: 40,
  },
  menuIcon: {
    marginRight: 10,
  },
  menuIconText: {
    fontSize: 30,
    color: "#FFFFFF",
  },
  headerText: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
  container: {
    flex: 12,
    justifyContent: "center",
    backgroundColor: "blue",
    paddingTop: 0,
  },
});
