const express = require('express')
const app = express()
const port = 3000

const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const example_data = [
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

// // CREATE
// app.get('/create', (req, res) => {
//     res.send('This is CREATE page.')
//   })
// READ
app.get('/read', (req, res) => {
  res.send(example_data)
})

app.post('/create', (req, res) => {
  let id = req.body.id
  let name = req.body.name
  example_data.push({
      id: id,
      name: name
  })
  console.log(example_data)
  res.send(example_data)
})

app.post('/update', (req, res) => {
  let id = req.body.id
  let name = req.body.name
  example_data[id] = {
      id: id,
      name: name
  }
  console.log(example_data)
  res.send(example_data)
})

app.get('/delete', (req, res) => {
  example_data.pop()
  console.log(example_data)
  res.send(example_data)
})


// // UPDATE
// app.get('/update', (req, res) => {
//   res.send('This is UPDATE page.')
// })
// // DELETE
// app.get('/delete', (req, res) => {
//   res.send('This is DELETE page.')
// })

app.get('/', (req, res) => {
  res.send('This is Home!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

console.log(example_data)