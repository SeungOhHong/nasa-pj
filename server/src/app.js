// App.js라는 새로운 파일에 넣을 express 미들웨어 코드와 server.js에 넣을 서버 기능을 분리하여 코드를 구성할 수 있다.

const express = require("express");

const app = express();
app.use(express.json());

module.exports = app;
