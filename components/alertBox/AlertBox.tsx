import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

type AlertBoxPropType = {
  message: string;
  setShowMessage: Function;
};

const AlertBox = ({ message, setShowMessage }: AlertBoxPropType) => {
  const handleClose = () => {
    setShowMessage(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
      <Pressable onPress={handleClose}>
        <Text>X</Text>
      </Pressable>
    </View>
  );
};

export default AlertBox;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: -100,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "rgba(255, 0, 0, 0.5)",
    borderRadius: 16,
  },
  text: {
    color: "white",
  },
});
