// planets 는 서버에 저장될 DB 데이터이다
// planets.model 에서 정의해준다
// 정의한 모델을 require 함수로 임포트해준다
const planets = require("../../models/planets.model");

// /planets에 get요청시에 실행되는 getAllPlanets 컨트롤러 함수를 여기에서 정의한다
function getAllPlanets(req, res) {
  return res.status(200).json(planets);
}

// getAllPlanets 함수로 응답받은 데이터 객체를 익스포트하고 라우터에서 임포트한다
module.exports = {
  getAllPlanets,
};
