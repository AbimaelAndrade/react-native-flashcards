import React, { Component } from "react";
import { connect } from "react-redux";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity
} from "react-native";
import { NavigationActions, withNavigation } from "react-navigation";
import theme from "../utils/theme";
import { handleAddCard } from "../actions/cards";

class NewCard extends Component {
  state = {
    question: "",
    answer: ""
  };

  static navigationOptions = {
    title: "New Card",
    headerStyle: {
      backgroundColor: theme.COLORS.THEME
    },
    headerTintColor: theme.COLORS.WHITE
  };

  goBack = () => {
    this.props.navigation.dispatch(NavigationActions.back());
  };

  handleInputChangeQuestion = question => {
    this.setState({ question });
  };

  handleInputChangeAnswer = answer => {
    this.setState({ answer });
  };

  handleNewCard = async () => {
    const { question, answer } = this.state;
    const { deckId } = this.props.navigation.state.params;

    if (!question || !answer) return;

    this.props.dispatch(handleAddCard(deckId, question, answer));

    this.goBack();
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Your question"
          placeholderTextColor={theme.COLORS.BACKGROUND_DARK}
          onChangeText={this.handleInputChangeQuestion}
          value={this.state.question}
        />
        <TextInput
          style={styles.input}
          placeholder="Your answer"
          placeholderTextColor={theme.COLORS.BACKGROUND_DARK}
          onChangeText={this.handleInputChangeAnswer}
          value={this.state.answer}
        />
        <TouchableOpacity
          style={[styles.button, { marginTop: theme.SIZES.BASE * 3 }]}
          onPress={this.handleNewCard}
        >
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
    marginLeft: theme.SIZES.BASE * 1.5,
    marginRight: theme.SIZES.BASE * 1.5,
    marginTop: theme.SIZES.BASE * 1.5,
    padding: theme.SIZES.BASE,
    fontSize: theme.SIZES.FONT,
    color: theme.COLORS.BLACK
  }
});

export default withNavigation(connect()(NewCard));
