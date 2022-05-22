const mysql = require('mysql')

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345678',
  database: 'express_db'
})

const create_table = '\
CREATE TABLE users (\
id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, \
name VARCHAR(255) NOT NULL\
)'

// console.log(create_table)
con.connect(function(err) {
    if (err) throw err;
    console.log('Connected!')
    con.query(create_table, (err, result) => {
          if (err) throw err;
          console.log('table created!');
        })
    con.end();
  })