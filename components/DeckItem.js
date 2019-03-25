import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import theme from "../utils/theme";
const isAndroid = Platform.OS !== "ios";

export default (DeckItem = ({ onPress, title, totalCards }) => (
  <TouchableOpacity onPress={onPress} style={styles.card}>
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{totalCards} Cards</Text>
    </View>
    <Ionicons
      name={isAndroid ? "md-arrow-forward" : "ios-arrow-forward"}
      size={theme.SIZES.BASE * 2.2}
      color={theme.COLORS.BACKGROUND_MEDIUM}
    />
  </TouchableOpacity>
));

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    height: theme.SIZES.BASE * 5,
    marginBottom: theme.SIZES.BASE * 1.5,
    padding: theme.SIZES.BASE,
    borderRadius: theme.SIZES.RADIUS,
    backgroundColor: theme.COLORS.BACKGROUND,
    borderColor: theme.COLORS.BACKGROUND_MEDIUM,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "space-between"
  },
  cardDescription: {},
  title: {
    fontSize: theme.SIZES.FONT * 1.5,
    fontWeight: "bold",
    color: theme.COLORS.PRIMARY
  },
  subTitle: {
    fontSize: theme.SIZES.FONT,
    color: theme.COLORS.BACKGROUND_DARK
  }
});
