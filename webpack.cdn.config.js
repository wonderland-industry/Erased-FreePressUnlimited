// Generated using webpack-cli https://github.com/webpack/webpack-cli

const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const stylesHandler = MiniCssExtractPlugin.loader;

const config = (env) => {
  return {
    target: "web",
    entry: {
      index: "./src/index.ts",
    },
    output: {
      path: path.resolve(__dirname, "./cdn"),
      filename: env.lang ? `erase.${env.lang}.js` : "erase.js",
    },

    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/i,
          loader: "ts-loader",
          exclude: ["/node_modules/"],
        },
        {
          test: /\.(css|module.css)$/i,
          use: [stylesHandler, "css-loader"],
        },
        {
          test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
          type: "asset",
          generator: {
            filename: "fonts/[name][ext][query]",
          },
        },
      ],
    },
    plugins: [
      new webpack.DefinePlugin({
        "process.env.LANG_EN": env.lang === "en",
        "process.env.LANG_ES": env.lang === "es",
        "process.env.LANG_FR": env.lang === "fr",
        "process.env.LANG_NL": env.lang === "nl",
        "process.env.LANG_RU": env.lang === "ru",
        "process.env.LANG_AR": env.lang === "ar",
      }),
      new MiniCssExtractPlugin({ filename: env.lang ? `erase.${env.lang}.css` : "erase.css" }),
    ],
    resolve: {
      extensions: [".tsx", ".ts", ".jsx", ".js", "..."],
    },
  };
};

module.exports = config;
