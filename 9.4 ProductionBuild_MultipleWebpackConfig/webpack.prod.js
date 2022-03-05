const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PurgeCss = require("purgecss-webpack-plugin");
const glob = require("glob");
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");

const purgePath = {
  src: path.join(__dirname, "src"),
};

module.exports = merge(commonConfig, {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.s[ac]ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/assets/images/*"),
          to: path.resolve(__dirname, "dist"),
          context: "src",
        },
      ],
    }),
    new PurgeCss({
      paths: glob.sync(`${purgePath.src}/**/*`, { nodir: true }),
      safelist: ["dummy-css"],
    }),
    new MiniCssExtractPlugin(),
  ],
});
