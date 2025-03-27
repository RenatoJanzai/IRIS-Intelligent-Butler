// babel.config.js
module.exports = {
  presets: [
    '@babel/preset-env',
    // If you are using Vue 2+JSX, you need to add @vue/babel-preset-jsx
    // '@vue/babel-preset-jsx'
  ],
  plugins: [
    '@babel/plugin-transform-private-methods',
  ],
};
