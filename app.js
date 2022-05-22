const express = require('express')
const app = express()
const port = 3003

const cors = require('cors')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());


const mysql = require('mysql')

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345678',
  database: 'express_db'
})

con.connect(function(err) {
  // if (err) throw err;
  console.log('Connected!')
})

app.post('/add', (req, res) => {
  console.log(req.body)
})

app.get('/', (req, res) => {
  // res.send('Hello World!')

  const select = 'SELECT * FROM users;'

  con.query(select, (err, result) => {
    // if (err) throw err;
    // res.send(result)
    console.log(result)
    const result2 = JSON.parse(JSON.stringify(result))
    console.log(result2)
    res.send(result2)
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})