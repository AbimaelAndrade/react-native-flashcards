import React from "react";
import { StyleSheet, View, StatusBar as Status } from "react-native";
import { Constants } from "expo";
import theme from "../utils/theme";

export default class StatusBar extends React.Component {
  render() {
    const { color } = this.props;
    return (
      <View
        style={[
          styles.container,
          { backgroundColor: color || theme.COLORS.THEME }
        ]}
      >
        <Status
          style={{
            backgroundColor: color || theme.COLORS.THEME
          }}
          translucent
          barStyle="light-content"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: Constants.statusBarHeight
  }
});
