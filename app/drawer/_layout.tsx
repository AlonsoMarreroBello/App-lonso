import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Drawer } from "expo-router/drawer";
import {
  DrawerContentScrollView,
  DrawerItemList,
  type DrawerNavigationProp,
} from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";

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

const CustomDrawerContent: React.FC<any> = (props) => {
  const handleLogout = () => {
    console.log("Logging out...");
    props.navigation.closeDrawer();
    router.navigate("/login/login");
  };

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.drawerContent}
    >
      <DrawerItemList {...props} />
      <View style={styles.divider} />
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};

const AppLayout = () => {
  return (
    <>
      <StatusBar backgroundColor="#D32F2F" />
      <Drawer
        screenOptions={{
          header: () => <CustomHeader />,
        }}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name="welcome/index" options={{ drawerLabel: "Home" }} />
        <Drawer.Screen
          name="portfolio"
          options={{ drawerLabel: "Portfolio" }}
        />
        <Drawer.Screen
          name="shoppingCart/index"
          options={{ drawerLabel: "Shopping Cart" }}
        />
      </Drawer>
    </>
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
    paddingTop: 10,
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
  drawerContent: {
    flexGrow: 1,
    paddingHorizontal: 10,
    backgroundColor: "#F5F5F5",
  },
  divider: {
    marginVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  logoutButton: {
    paddingVertical: 15,
    backgroundColor: "#D32F2F",
    alignItems: "center",
    borderRadius: 5,
    marginHorizontal: 10,
  },
  logoutText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});
