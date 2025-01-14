import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Drawer } from "expo-router/drawer";
import type { DrawerNavigationProp } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";

const CustomHeader: React.FC = () => {
  const navigation = useNavigation<DrawerNavigationProp<{}>>();

  const openDrawer = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={openDrawer} style={styles.menuIcon}>
        <Text style={styles.menuIconText}>☰</Text>
      </TouchableOpacity>
      <Text style={styles.headerText}>My App</Text>
    </View>
  );
};

const AppLayout = () => {
  return (
    <Drawer
      screenOptions={{
        header: () => <CustomHeader />,
      }}
    >
      <Drawer.Screen name="welcome/index" options={{ drawerLabel: "Home" }} />
      <Drawer.Screen name="portfolio" options={{ drawerLabel: "Portfolio" }} />
      <Drawer.Screen
        name="shoppingCart/index"
        options={{ drawerLabel: "Shopping Cart" }}
      />
    </Drawer>
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
