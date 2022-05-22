const mysql = require('mysql')

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345678',
  database: 'express_db'
})

const delete_value = "DELETE FROM users WHERE id = 1;";

// console.log(create_table)
con.connect(function(err) {
  if (err) throw err;
  console.log('Connected!')
  con.query(delete_value, (err, result) => {
        if (err) throw err;
        console.log('A value is deleted.');
      })
  con.end();
})

