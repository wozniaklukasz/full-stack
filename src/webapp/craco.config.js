module.exports = {
  devServer: {
    port: 3007,
    proxy: [{
      context: ['/rest'],
      target: 'http://localhost:8087'
    }]
  },
};
