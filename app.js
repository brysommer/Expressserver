const express = require('express');
const server = express();
const ejs = require('ejs');

let people = ['geddy', 'neil', 'alex'];
let student = {
    name: 'Іван',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null
  };


let json = JSON.stringify(student);

let html = ejs.render('<%= people.join(", "); %>', {people: people});


server.use(express.static('public'));

server.get('/file', (req, res) => {
    res.sendFile('G:/express/public/1.jpg');
});

server.get('/', (req, res) => {
    res.send(index.html);
});

server.get('/json', (req, res) => {
    res.send(json);
});

server.get('/ejs', (req, res) => {
    res.send(html);
});


server.listen(3000);