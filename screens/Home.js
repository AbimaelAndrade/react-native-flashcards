import React, { Component } from "react";
import { connect } from "react-redux";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { withNavigation } from "react-navigation";
import { Ionicons } from "@expo/vector-icons";
import theme from "../utils/theme";
import DeckItem from "../components/DeckItem";
import { handleFetchDecks } from "../actions/decks";
import { handleFetchCards } from "../actions/cards";

const isAndroid = Platform.OS !== "ios";

class Home extends Component {
  componentDidMount() {
    this.props.dispatch(handleFetchDecks());
    this.props.dispatch(handleFetchCards());
  }

  static navigationOptions = ({ navigation }) => ({
    title: "Flashcards",
    headerStyle: {
      backgroundColor: theme.COLORS.THEME
    },
    headerTintColor: theme.COLORS.WHITE,
    headerRight: (
      <TouchableOpacity
        onPress={() => navigation.navigate("NewDeck")}
        style={{
          paddingLeft: theme.SIZES.BASE * 1.5,
          paddingRight: theme.SIZES.BASE * 1.5
        }}
      >
        <Ionicons
          name={isAndroid ? "md-add" : "ios-add"}
          size={theme.SIZES.BASE * 2.2}
          color={theme.COLORS.WHITE}
        />
      </TouchableOpacity>
    )
  });

  goTo = (screen, data) => {
    this.props.navigation.navigate(screen, { ...data });
  };

  render() {
    const { decks, cards } = this.props;
    return (
      <ScrollView style={styles.container}>
        {Object.keys(decks)
          .reverse()
          .map(key => (
            <DeckItem
              key={key}
              onPress={() =>
                this.goTo("Deck", {
                  deck: decks[key]
                })
              }
              title={decks[key].title}
              totalCards={`${cards[key] ? Object.keys(cards[key]).length : 0}`}
            />
          ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: theme.SIZES.BASE,
    backgroundColor: theme.COLORS.WHITE
  }
});

function mapStateToProps({ decks, cards }) {
  return {
    decks,
    cards
  };
}

export default withNavigation(connect(mapStateToProps)(Home));
