const COLORS = {
  WHITE: "#FFFFFF",
  BLACK: "#000000",
  YELLOW: "#FCE38F",
  BACKGROUND: "#F5F7F8",
  BACKGROUND_MEDIUM: "#D6DCDB",
  BACKGROUND_DARK: "#909190",
  THEME: "#62C8FF",
  TRANSPARENT: "transparent",
  SUCCESS: "#7EE3C7",
  PRIMARY: "#62C8FF",
  INFO: "#0773b2",
  WARNING: "#FF921A",
  ERROR: "#fd1d0c",
  COLORS_DECKS: () => {
    const colors = ["#62C8FF", "#7EE3C7", "#0773b2", "#FF921A", "#FCE38F"];
    return colors[Math.floor(Math.random() * colors.length)];
  }
};

const SIZES = {
  BASE: 16,
  FONT: 16,
  OPACITY: 0.8,
  RADIUS: 4
};

export default {
  COLORS,
  SIZES
};
