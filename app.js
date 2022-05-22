const express = require('express')
const app = express()
const port = 3000


// CREATE
app.get('/create', (req, res) => {
    res.send('This is CREATE page.')
  })
// READ
app.get('/read', (req, res) => {
  res.send('This is READ page.')
})
// UPDATE
app.get('/update', (req, res) => {
  res.send('This is UPDATE page.')
})
// DELETE
app.get('/delete', (req, res) => {
  res.send('This is DELETE page.')
})

app.get('/', (req, res) => {
  res.send('This is Home!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})