module.exports = ({ baseConfig, env, config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve("babel-loader"),
        options: {
          presets: [
            ["react-app", { flow: false, typescript: true }],
            [
              "@emotion/babel-preset-css-prop",
              {
                autoLabel: true,
                labelFormat: "[local]"
              }
            ]
          ]
        }
      },
      {
        loader: require.resolve("react-docgen-typescript-loader"),
        options: {
          propFilter: prop => {
            if (prop.parent == null) {
              return true;
            }

            // Filter out props which type definition is placed in react package
            return (
              prop.parent.fileName.indexOf("node_modules/@types/react") < 0
            );
          }
        }
      }
    ]
  });
  config.resolve.extensions.push(".ts", ".tsx");
  return config;
};
