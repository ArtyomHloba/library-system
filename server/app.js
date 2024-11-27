const express = require('express');
const app = express();
const cors = require('cors'); // Для работы с кросс-доменными запросами
const bodyParser = require('body-parser'); // Для обработки тела запросов
const { sequelize } = require('./models'); // Подключение к Sequelize

// Маршруты
const bookRoutes = require('./routes/bookRoutes');
const readerRoutes = require('./routes/readerRoutes');
const issueRoutes = require('./routes/issueRoutes');

// Middleware
app.use(cors()); // Разрешение кросс-доменных запросов
app.use(bodyParser.json()); // Для обработки JSON в теле запросов

// Использование маршрутов
app.use('/api/books', bookRoutes);
app.use('/api/readers', readerRoutes);
app.use('/api/issues', issueRoutes);

// Подключение к базе данных и запуск сервера
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
