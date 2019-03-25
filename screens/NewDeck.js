import React, { Component } from "react";
import { connect } from "react-redux";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Platform,
  TouchableOpacity
} from "react-native";
import { NavigationActions } from "react-navigation";
import theme from "../utils/theme";
import { handleAddDeck } from "../actions/decks";

class NewDeck extends Component {
  state = {
    newDeck: ""
  };

  static navigationOptions = {
    title: "Novo baralho",
    headerStyle: {
      backgroundColor: theme.COLORS.THEME
    },
    headerTintColor: theme.COLORS.WHITE
  };

  goBack = () => {
    this.props.navigation.dispatch(NavigationActions.back());
  };

  handleInputChange = newDeck => {
    this.setState({ newDeck });
  };

  handleNewDeck = async () => {
    const content = this.state.newDeck;

    if (!content) return;

    this.props.dispatch(handleAddDeck(content));

    this.goBack();
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Nome do baralho"
          placeholderTextColor={theme.COLORS.BACKGROUND_DARK}
          returnKeyType="send"
          onChangeText={this.handleInputChange}
          value={this.state.newDeck}
        />
        <TouchableOpacity style={styles.button} onPress={this.handleNewDeck}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.COLORS.BACKGROUND
  },
  button: {
    marginLeft: theme.SIZES.BASE * 1.5,
    marginRight: theme.SIZES.BASE * 1.5,
    padding: theme.SIZES.BASE,
    borderRadius: theme.SIZES.RADIUS,
    backgroundColor: theme.COLORS.SUCCESS,
    justifyContent: "center",
    alignItems: "center"
  },

  buttonText: {
    color: theme.COLORS.WHITE,
    fontSize: theme.SIZES.FONT,
    fontWeight: "bold"
  },
  input: {
    borderColor: theme.COLORS.SUCCESS,
    backgroundColor: theme.COLORS.BACKGROUND,
    borderWidth: 1,
    borderRadius: theme.SIZES.RADIUS,
    margin: theme.SIZES.BASE * 1.5,
    padding: theme.SIZES.BASE,
    fontSize: theme.SIZES.FONT,
    color: theme.COLORS.BLACK
  }
});

export default connect()(NewDeck);
