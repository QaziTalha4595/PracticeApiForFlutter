const express = require('express')
const app = express()
const port = 3000
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'practiceapi'
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/Login', (req, res) => {
    var {email, password} = req.query;
    connection.query(
        'SELECT * FROM user where email = ? AND password = ?',
        [email, password], 
        function(err, data) {
            if(err){
                console.log(err);
            }
            if(data.length > 0){
                res.send(`Login Successfully`)
            }else{
                res.send(`Invalid Credential`)
            }
        }
      );

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})