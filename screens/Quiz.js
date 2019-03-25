import React from "react";
import { connect } from "react-redux";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import theme from "../utils/theme";
import Touchable from "../components/Touchable";
import {
  clearLocalNotification,
  setLocalNotification
} from "../utils/notification";
import Count from "../components/Count";

class Quiz extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: `Quiz ${navigation.state.params.deck.title}`,
      headerStyle: {
        backgroundColor: theme.COLORS.THEME
      },
      headerTintColor: theme.COLORS.WHITE
    };
  };

  state = {
    rightAnswers: 0,
    cardIndex: 0,
    showAnswer: false,
    finished: false
  };

  showAnswer = () => {
    this.setState({
      showAnswer: true
    });
  };

  correctAnswer = () => {
    this.setState(state => ({
      rightAnswers: state.rightAnswers + 1
    }));

    this.nextCard();
  };

  nextCard = () => {
    if (this.state.cardIndex === this.props.cardsQty - 1) {
      this.setState({ finished: true });
      clearLocalNotification().then(setLocalNotification);
    } else {
      this.setState(state => ({
        showAnswer: false,
        cardIndex: state.cardIndex + 1
      }));
    }
  };

  restartQuiz = () => {
    this.setState({
      rightAnswers: 0,
      cardIndex: 0,
      showAnswer: false,
      finished: false
    });
  };

  render() {
    const { cards, cardSequence, cardsQty } = this.props;
    const { cardIndex, showAnswer, rightAnswers, finished } = this.state;
    const currentCardId = cardSequence[cardIndex];

    if (finished) {
      return (
        <ScrollView style={styles.container}>
          <Text style={styles.cardTitle}>Result</Text>
          <Count value={rightAnswers} of={cardsQty} title="You points" />

          <View style={styles.actions}>
            <Touchable
              onPress={() => this.props.navigation.goBack()}
              name="Back To Deck"
              type="outline"
            />
            <Touchable onPress={() => this.restartQuiz()} name="Try Again" />
          </View>
        </ScrollView>
      );
    }

    return (
      <ScrollView style={styles.container}>
        <Count value={cardIndex + 1} of={cardsQty} title="Card" />

        {showAnswer === false ? (
          <View>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Question:</Text>
              <Text style={styles.cardQuestion}>
                {cards[currentCardId].question}
              </Text>
            </View>
            <Touchable onPress={() => this.showAnswer()} name="Show Answer" />
          </View>
        ) : (
          <View>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Correct answer is:</Text>
              <Text>{cards[currentCardId].answer}</Text>
            </View>
            <View style={styles.actions}>
              <Touchable
                onPress={() => this.nextCard()}
                name="Incorrect"
                type="outline"
              />
              <Touchable onPress={() => this.correctAnswer()} name="Correct" />
            </View>
          </View>
        )}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: theme.SIZES.BASE
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
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
  },
  cardTitle: {
    fontSize: theme.SIZES.FONT * 1.2,
    color: theme.COLORS.SUCCESS,
    fontWeight: "bold",
    marginBottom: theme.SIZES.BASE,
    flex: 1,
    textAlign: "center"
  },
  cardQuestion: {
    fontSize: theme.SIZES.FONT * 0.8,
    color: theme.COLORS.BLACK,
    fontWeight: "bold"
  },
  card: {
    backgroundColor: theme.COLORS.BACKGROUND,
    padding: theme.SIZES.BASE,
    marginBottom: theme.SIZES.BASE * 2,
    textAlign: "center",
    borderColor: theme.COLORS.SUCCESS,
    borderWidth: 1,
    borderRadius: theme.SIZES.RADIUS
  },
  cardText: {
    fontSize: theme.SIZES.FONT
  }
});

function mapStateToProps({ decks, cards }, { navigation }) {
  const { deck } = navigation.state.params;
  const deckCards = cards[deck.id];

  const cardSequence = deckCards
    ? Object.keys(deckCards).sort(() => 0.5 - Math.random())
    : null;
  const cardsQty = cardSequence.length;
  return {
    deck,
    cards: deckCards,
    cardsQty,
    cardSequence
  };
}

export default connect(mapStateToProps)(Quiz);
