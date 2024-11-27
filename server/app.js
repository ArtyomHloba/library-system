const express = require('express');
const app = express();
const cors = require('cors'); // Для работы с кросс-доменными запросами
const bodyParser = require('body-parser'); // Для обработки тела запросов
const { sequelize } = require('./models'); // Подключение к Sequelize

// Маршруты
const bookRoutes = require('./routes/bookRoutes');
const readerRoutes = require('./routes/readerRoutes');
const issueRoutes = require('./routes/issueRoutes');

app.use(cors());
app.use(bodyParser.json());

app.use('/api/books', bookRoutes);
app.use('/api/readers', readerRoutes);
app.use('/api/issues', issueRoutes);

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
