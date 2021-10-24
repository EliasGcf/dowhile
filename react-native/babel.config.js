module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          extensions: ['.ts', '.tsx'],
          alias: {
            src: './src',
            '@assets': './src/assets',
            '@components': './src/components',
            '@screens': './src/screens',
          },
        },
      ],
    ],
  };
};
