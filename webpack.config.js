// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              // Dart Sass is explicitly set here
              implementation: require("sass"), // <-- Modern Dart Sass API
            },
          },
        ],
      },
    ],
  },
};
