const express = require('express')
const app = express()
const port = 3000

// 
app.use(express.urlencoded({extended: true}))
// JSON
app.use(express.json())
// CORS
const cors = require('cors')
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/result', (req, res) => {
    const data = req.body
    console.log(data)
})

app.listen(port, () => { console.log(`Example app listening on port ${port}`) })