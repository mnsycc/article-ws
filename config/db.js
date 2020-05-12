// конфигурация базы данных
module.exports = {
  db: {
    uri: 'mongodb://localhost:27017/AuthTest',
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
};
