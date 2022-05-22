## Express 설치하기
```
$ npm init -y
$ npm install express
$ npm install axios
```
## git 설정
```
$ git init
$ git add .
$ git commit -m "first commit"
$ git branch -M v2_axios
$ git remote add origin https://github.com/bizzy91/proverload.git
$ git push -u origin v2_axios
```
## 진행 상황
```
const example_data = 
[
    {
        id: 0,
        name: "bizzy0",
    },
    {
        id: 1,
        name: "bizzy1",
    },
    {
        id: 2,
        name: "bizzy2",
    },
]
```
POST /create
```
let id = req.body.id
let name = req.body.name
example_data.push({
    id: id,
    name: name
})
console.log(example_data)
```
GET /read
```
console.log(example_data)
```

POST /update
```
let id = req.body.id
let name = req.body.name
example_data[id] = {
    id: id,
    name: name
})
console.log(example_data)
```

GET /delete
```
example_data.pop()
console.log(example_data)
```