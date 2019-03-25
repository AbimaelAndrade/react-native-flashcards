import React from "react";
import { View, Text, StyleSheet } from "react-native";
import theme from "../utils/theme";

const Count = ({ value, of, title }) => (
  <View>
    <Text style={styles.cardCount}>
      {title} {value} of {of}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  cardCount: {
    textAlign: "center",
    alignSelf: "center",
    fontSize: theme.SIZES.FONT,
    fontWeight: "bold",
    marginBottom: theme.SIZES.BASE * 2,
    borderRadius: theme.SIZES.RADIUS,
    backgroundColor: theme.COLORS.THEME,
    color: theme.COLORS.WHITE,
    padding: theme.SIZES.BASE
  }
});

export default Count;
