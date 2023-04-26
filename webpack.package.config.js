// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

const stylesHandler = MiniCssExtractPlugin.loader;

const config = (env) => {
  return {
    target: "web",
    entry: {
      index: "./src/Erase.ts",
    },
    output: {
      path: path.resolve(__dirname, "./package"),
      filename: env.lang ? `erase.${env.lang}.js` : "erase.js",
      library: "Erase",
      libraryTarget: "umd",
      globalObject: "this",
      umdNamedDefine: true,
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
      }),
      new MiniCssExtractPlugin({ filename: env.lang ? `erase.${env.lang}.css` : "erase.css" }),
    ],
    resolve: {
      extensions: [".tsx", ".ts", ".jsx", ".js", "..."],
    },
  };
};

module.exports = config;
