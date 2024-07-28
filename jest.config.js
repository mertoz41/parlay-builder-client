export default {
  preset: "ts-jest",
  transform: { "\\.js$": "client/node_modules/babel-jest"},
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
};
