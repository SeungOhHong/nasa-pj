const express = require("express");

// 응답받은 데이터 json 객체를 임포트해준다
const { getAllPlanets } = require("./planets.controller");

const planetsRouter = express.Router();

// 컨트롤러와 라우터는 한 폴더에 둔다
planetsRouter.get("/planets", getAllPlanets);

// app.js 에서 임포트해준다
module.exports = planetsRouter;
