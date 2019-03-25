import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import theme from "../utils/theme";

export default (DeckItem = ({ name, onPress, type, style }) =>
  type && type === "outline" ? (
    <TouchableOpacity
      style={[styles.btn, styles.buttonOutline, style]}
      onPress={onPress}
    >
      <Text style={[styles.buttonTextOutline, {}]}>{name}</Text>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      style={[styles.btn, styles.btnDefault, style]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, {}]}>{name}</Text>
    </TouchableOpacity>
  ));

const styles = StyleSheet.create({
  btn: {
    marginLeft: theme.SIZES.BASE * 1.5,
    marginRight: theme.SIZES.BASE * 1.5,
    padding: theme.SIZES.BASE,
    borderRadius: theme.SIZES.RADIUS,
    borderColor: theme.COLORS.SUCCESS,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  btnOutline: {
    backgroundColor: theme.COLORS.WHITE
  },
  btnDefault: {
    backgroundColor: theme.COLORS.SUCCESS
  },

  buttonText: {
    color: theme.COLORS.WHITE,
    fontSize: theme.SIZES.FONT,
    fontWeight: "bold"
  },
  buttonTextOutline: {
    color: theme.COLORS.SUCCESS,
    fontSize: theme.SIZES.FONT,
    fontWeight: "bold"
  }
});
