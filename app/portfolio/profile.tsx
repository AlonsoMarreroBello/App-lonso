import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";
import { thingsILikeALot as favouriteThings } from "../../data/thingsILikeALot";
import Card from "../../components/card/Card";
import RandomQuote from "../../components/randomQuote/RandoQuote";

function ProfileScreen() {
  return (
    <View style={styles.container}>
      <RandomQuote isDarkTheme={false} />
      <Text style={styles.favoriteThingsTitle}>cosas que me gustan mucho:</Text>
      <ScrollView style={styles.favouriteThingScrollView}>
        {favouriteThings.map((thing, index) => (
          <Card
            key={index}
            textString={thing}
            style={styles.favoriteThingsText}
          />
        ))}
      </ScrollView>
    </View>
  );
}

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },
  favoriteThingsTitle: {
    color: "black",
    fontWeight: "900",
    textTransform: "capitalize",
    fontSize: 20,
    textAlign: "center",
  },
  favouriteThingScrollView: {
    padding: 10,
  },
  favoriteThingsText: {
    borderColor: "black",
    borderWidth: 1,
    borderStyle: "dashed",
    padding: 20,
    color: "darkred",
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 16,
    backgroundColor: "lightgray",
  },
});
