// const reactHotReloadPlugin = require('craco-plugin-react-hot-reload');

module.exports = {
  devServer: {
    port: 3007,
    proxy: [{
      context: ['/rest', '/info'],
      target: 'http://localhost:8082'
    }]
  },
  // plugins: [{
  //   plugin: reactHotReloadPlugin
  // }]
};
