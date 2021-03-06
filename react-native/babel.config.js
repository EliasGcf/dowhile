module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          extensions: ['.ts', '.tsx'],
          alias: {
            src: './src',
            'stitches.config': './stitches.config',
            '@assets': './src/assets',
            '@components': './src/components',
            '@contexts': './src/contexts',
            '@hooks': './src/hooks',
            '@screens': './src/screens',
            '@services': './src/services',
          },
        },
      ],
    ],
  };
};
