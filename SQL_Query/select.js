const mysql = require('mysql')

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345678',
  database: 'express_db'
})

const select = "SELECT * FROM users;"

// console.log(create_table)
con.connect(function(err) {
  if (err) throw err;
  console.log('Connected!')
  con.query(select, (err, result) => {
    if (err) throw err;
    console.log('A value is selectedd.');
    console.log(result);
  })
  con.end();
})

