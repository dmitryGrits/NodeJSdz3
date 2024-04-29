'use strict';

const path = require('path');
const fs = require('fs');
const express = require('express');

const pathToFile = path.join(__dirname, 'Views.json');

const port = 3000;
const app = express();

app.get('/', (req, res) => {
    const dataIndexViews = JSON.parse(fs.readFileSync(pathToFile, 'utf8'));
    dataIndexViews.home += 1;
    fs.writeFileSync(pathToFile, JSON.stringify(dataIndexViews));
    res.send(`<h1>Корневая страница </h1>
    <p>Просмотров: ${dataIndexViews.home}</p>
     <a href="/about">Ссылка на страницу About</a>`);
});

app.get('/about', (req, res) => {
    const dataAboutViews = JSON.parse(fs.readFileSync(pathToFile, 'utf8'));
    dataAboutViews.about += 1;
    fs.writeFileSync(pathToFile, JSON.stringify(dataAboutViews));
    res.send(`<h1>Страница About </h1>
    <p>Просмотров: ${dataAboutViews.about}</p>
     <a href="/">Ссылка корневую страницу</a>`);

});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});