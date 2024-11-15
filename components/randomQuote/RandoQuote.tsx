import { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";

type RandomQuoteProps = {
  isDarkTheme: boolean;
};

const RandomQuote = ({ isDarkTheme }: RandomQuoteProps) => {
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(true);
  const internalStyles = getInternalStyles(isDarkTheme);

  useEffect(() => {
    fetch("https://quote-generator-api-six.vercel.app/api/quotes/random")
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.quote);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error while fetching quote", error);
        setQuote("Con paciencia y saliva ...");
        setLoading(false);
      });
  }, []);

  return (
    <View style={internalStyles.container}>
      <Text style={internalStyles.quoteTitle}>Frase del dia</Text>
      {loading ? (
        <ActivityIndicator size="small" />
      ) : (
        <Text style={internalStyles.quoteText}>{quote}</Text>
      )}
    </View>
  );
};

const getInternalStyles = (isDarkTheme: boolean) =>
  StyleSheet.create({
    container: {
      alignItems: "center",
      marginHorizontal: 5,
    },
    quoteTitle: {
      textAlign: "center",
      fontWeight: "700",
      fontSize: 20,
      color: isDarkTheme ? "white" : "black",
    },
    quoteText: {
      color: isDarkTheme ? "white" : "black",
      paddingBottom: 10,
    },
  });

export default RandomQuote;
