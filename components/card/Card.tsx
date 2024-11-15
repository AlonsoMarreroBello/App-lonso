import React from "react";
import { Text, TextStyle } from "react-native";

type CardProps = {
  textString: string;
  style: TextStyle;
};

const Card = ({ textString, style }: CardProps) => {
  return (
    <>
      <Text style={style}>{textString}</Text>
    </>
  );
};

export default Card;
