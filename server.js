// This is a test for the server
// const http = require('http');
// http.createServer((request, response) => {
//     response.writeHead(200, {
//         'Content-Type' : 'text/plain'
//     });
//
//     response.write('Hello, this is a server!\n');
//
//     response.end();
// }).listen(1337);

// This is a test with express
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

const {Teacher, TeacherList} = require('./src/Teacher');
const {join} = require("path");

app.get('/', function(request, res){
    const pathFile = join(__dirname, 'public', 'index.html');
    res.sendFile(pathFile);
});

app.listen(port, function () {
    console.log('Server running at port: http://localhost:' + port);
});

const teacherList = new TeacherList();

app.get('/add-teacher', function (req, res) {
    const {name, birth, graduation} = req.body;
    const teacher = new Teacher(name, birth, graduation);

    teacherList.addTeacher(teacher);
    teacherList.saveData();
})

// 'use strict'
//
// const tls = require('tls');
// const fs = require('fs');
// const path = require("path");
// const qs = require('querystring');
//
// const PORT = 443;
// const HOST = '127.0.0.1';
//
// let options = {
//     key: fs.readFileSync(path.join(__dirname, 'ssl-keys', 'private-key.pem')),
//     cert: fs.readFileSync(path.join(__dirname, 'ssl-keys', 'public-cert.pem'))
// }
//
// let server = tls.createServer(options, function(socket) {
//     socket.write('I am the server sending you an message.');
//
//     socket.on('data', function(data) {
//         console.log('Received: %s [it is %d bytes long]',
//             data.toString().replace(/(\n)/gm, ""),
//             data.length
//         );
//     });
//
//     socket.on('end', function () {
//         console.log('End of transmition.');
//     });
// });
//
// server.listen(PORT, HOST, function() {
//     console.log('Listening at %s, on port %s', HOST, PORT);
// });
//
// server.on('error', function(error) {
//     console.log(error);
//     server.destroy();
// });
