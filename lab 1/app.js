const express = require('express');
const app = express();
const photoBlogRoutes = require('./routes/photoBlog');
const expressLayouts = require('express-ejs-layouts');

// Налаштування EJS і макетів
app.set('view engine', 'ejs');
app.use(expressLayouts); // Увімкнення макетів
app.set('layout', 'layouts/layout'); // Встановлення стандартного макета

// Маршрути
app.use('/', photoBlogRoutes);

// Запуск сервера
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Сервер запущено: http://localhost:${PORT}`);
});
