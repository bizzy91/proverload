const mysql = require('mysql')

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345678',
  database: 'express_db'
})

const update_value = "UPDATE users SET name='bizzy3' WHERE id = '3';";

// console.log(create_table)
con.connect(function(err) {
  if (err) throw err;
  console.log('Connected!')
  con.query(update_value, (err, result) => {
    if (err) throw err;
    console.log('A value is updated.');
  })
  con.end();
})

