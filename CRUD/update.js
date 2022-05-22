const axios = require('axios');


const id = 3
const name = "qurious" + String(id)

axios.post('http://localhost:3000/update', {
    id: id,
    name: name
  })
  .then(function (response) {
  // 성공 핸들링
  console.log(response.data);
  })
  .catch(function (error) {
  // 에러 핸들링
  console.log(error);
  })
  .then(function () {
  // 항상 실행되는 영역
  });


