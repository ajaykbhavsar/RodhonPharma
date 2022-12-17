import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import Styles from "../config/styles";
const { color,Typography} = Styles;

export const LinkButton = props => {
  const { title, onPress, titleStyle = {}, style = {} } = props;
  const { container, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <View style={[container, style]}>
        <Text style={[textStyle, titleStyle]}>{title || "Title"}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textStyle: { 
    fontSize: Typography.FONT_SIZE14,
    fontFamily: Typography.FONT_MEDIUM,
    fontStyle: Typography.FONT_WEIGHT_NORMAL,
    lineHeight: 16,
    letterSpacing: 0,
    textAlign:'center',
  }
});
