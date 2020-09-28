module.exports = {
  transformIgnorePatterns: [
  ],
  modulePathIgnorePatterns: [
    "<rootDir>/actions-runner/"
  ],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest"
  },
};
