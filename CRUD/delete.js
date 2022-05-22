const axios = require('axios');



axios.get('http://localhost:3000/delete')
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


