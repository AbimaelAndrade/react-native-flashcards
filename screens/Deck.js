import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import { withNavigation } from "react-navigation";
import Touchable from "../components/Touchable";
import theme from "../utils/theme";

class Deck extends Component {
  static navigationOptions = {
    title: "Card",
    headerStyle: {
      backgroundColor: theme.COLORS.THEME
    },
    headerTintColor: theme.COLORS.WHITE
  };

  goTo = (screen, data) => {
    this.props.navigation.navigate(screen, { ...data });
  };

  render() {
    const { deck } = this.props.navigation.state.params;
    const { cards } = this.props;
    const card = cards[deck.id];

    return (
      <View style={styles.container}>
        <View style={styles.description}>
          <Text style={styles.title}>{deck.title}</Text>
          <Text style={styles.subTitle}>
            {card ? Object.keys(card).length : 0} Cards
          </Text>
        </View>
        <View>
          <Touchable
            name="Add Card"
            type="outline"
            style={styles.btn}
            onPress={() => this.goTo("NewCard", { deckId: deck.id })}
          />
          {card && Object.keys(card).length > 0 ? (
            <Touchable
              name="Start Quiz"
              style={styles.btn}
              onPress={() => this.goTo("Quiz", { deck, cads: card })}
            />
          ) : null}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.COLORS.BACKGROUND
  },
  btn: {
    marginTop: theme.SIZES.BASE
  },
  description: {
    alignItems: "center",
    justifyContent: "center",
    padding: theme.SIZES.BASE * 2
  },
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

function mapStateToProps({ cards }) {
  return {
    cards
  };
}

export default withNavigation(connect(mapStateToProps)(Deck));
