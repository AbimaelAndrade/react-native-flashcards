import { StackNavigator } from "react-navigation";

import Home from "../screens/Home";
import NewDeck from "../screens/NewDeck";
import NewCard from "../screens/NewCard";
import Deck from "../screens/Deck";
import Quiz from "../screens/Quiz";

const Navigator = StackNavigator({
  Home: {
    screen: Home
  },
  NewDeck: {
    screen: NewDeck
  },
  Deck: {
    screen: Deck
  },
  NewCard: {
    screen: NewCard
  },
  Quiz: {
    screen: Quiz
  },
  initialRouteName: "Home"
});

export default Navigator;
