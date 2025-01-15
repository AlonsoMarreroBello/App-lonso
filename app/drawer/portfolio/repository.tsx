import { StyleSheet, Text, View } from "react-native";
import React from "react";
import QRCode from "react-native-qrcode-svg";

function RepositoryScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.repositoryContainer}>
        <Text style={styles.repositoryTitle}>Mi repositorio</Text>
        <View style={styles.repositoryImage}>
          <QRCode value="https://github.com/AlonsoMarreroBello" />
        </View>
      </View>
    </View>
  );
}

export default RepositoryScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },
  repositoryContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
  },
  repositoryTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  repositoryImage: {
    width: 150,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  repositoryQR: {
    width: "100%",
    height: "100%",
  },
});
