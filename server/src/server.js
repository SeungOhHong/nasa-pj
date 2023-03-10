// npm install express
// npm install nodemon
// 스크립트를 추가해준다
// 모든 자바스크립트 코드를 src 폴더에 모아서 관리해준다

/* package.json 관련 
main의 경로를 src/server.js로 바꿔준다
watch 스크립트를 추가해준다

*/
const http = require("http");

const app = require("./app");

/* 서버 관리자는 기본 제공 process모듈을 호출하여 액세스할 수 있는 환경 변수(env)로 실행할 포트를 지정할 수 있습니다.
|| 문법으로 env에 지정된 포트가 있는지 여부를 확인하고, 없으면 포트를 기본값 8000으로 설정한다. */
const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
