module.exports = (ctx) => {
  const dev = ctx.env === "development";

  return {
    map: dev ? { inline: false } : false,
    plugins: [
      require("postcss-import"),
      require("postcss-mixins"),
      require("postcss-custom-properties"),
      require("postcss-color-function")({ preserveCustomProps: false }),
      require("postcss-color-hex-alpha"),
      require("postcss-nested"),
      require("autoprefixer"),
      dev ? null : require("cssnano")({ discardComments: { removeAll: true } })
    ]
  };
};

// module.exports = {
//   plugins: [
//     require("cssnano")({ preset: "default" })
//   ]
// }