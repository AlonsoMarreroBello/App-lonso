import { Link } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function WelcomePage() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.mainText}>
          Esta es la app de un pibe que: {"\n"} - Tiene Pelo{"\n"} - Tiene
          Gracia{"\n"} - Es Guapo{"\n"} - No Tiene Abuela{"\n\n"}
        </Text>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={require("..\\assets\\imgs\\a-portfolio-of-funny-stock-market-memes-for-people-who-have-no-idea-what-dividends-are.jpg")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  pressable: {
    alignSelf: "center",
    backgroundColor: "#D32F2F",
    padding: 5,
    borderRadius: 5,
    margin: 2,
  },
  mainText: {
    fontSize: 25,
  },
  pressableText: {
    fontSize: 20,
    color: "#fff",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
});
