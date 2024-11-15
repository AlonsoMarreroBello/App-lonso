import { Link } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function WelcomePage() {
  return (
    <View style={styles.container}>
      <View style={styles.mainTextContainer}>
        <Text style={styles.mainText}>
          Esta es la app de un pibe que: {"\n"} - Tiene Pelo{"\n"} - Tiene
          Gracia{"\n"} - Es Guapo{"\n"} - No Tiene Abuela{"\n\n"}
        </Text>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={require("..\\assets\\imgs\\a-portfolio-of-funny-stock-market-memes-for-people-who-have-no-idea-what-dividends-are.jpg")}
        />
        <Link style={styles.link} href={"/portfolio"}>
          <Pressable style={styles.pressable}>
            <Text style={styles.pressableText}>Botón</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
  pressable: {
    alignSelf: "center",
    backgroundColor: "#D32F2F",
    padding: 5,
    borderRadius: 5,
  },
  mainTextContainer: {
    flex: 1,
    justifyContent: "center", // Centrar contenido verticalmente
    alignItems: "center", // Centrar contenido horizontalmente
    paddingHorizontal: 20, // Espacio horizontal para evitar bordes cortados
  },
  mainText: {
    fontSize: 20, // Ajustar el tamaño del texto
    textAlign: "center", // Centrar el texto
    flexWrap: "wrap", // Permitir que el texto se divida en varias líneas
  },
  link: {
    marginHorizontal: "auto",
  },
  pressableText: {
    fontSize: 20,
    color: "#fff",
  },
  image: {
    width: "100%",
    height: undefined, // Permitir que la imagen se ajuste con aspectRatio
    aspectRatio: 1, // Mantener la proporción de la imagen
  },
});
