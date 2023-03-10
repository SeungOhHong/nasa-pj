const express = require("express");

const planetsRouter = require("./routes/planets/planets.router");

const app = express();

app.use(express.json());
// app.use 로 미들웨어를 연결해준다
app.use(planetsRouter);

module.exports = app;
