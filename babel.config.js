module.exports = {
  presets: ["next/babel", "@zeit/next-typescript/babel"],
  plugins: [["react-native-web", { commonjs: true }]],
};
