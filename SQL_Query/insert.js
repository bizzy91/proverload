const mysql = require('mysql')

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345678',
  database: 'express_db'
})

const insert_value = "INSERT INTO users (name) VALUES ('bizzy');";

// console.log(create_table)
con.connect(function(err) {
  if (err) throw err;
  console.log('Connected!')
  con.query(insert_value, (err, result) => {
    if (err) throw err;
    console.log('A value is inserted.');
  })
  con.end();
})

