const express = require('express')
const app = express()
// let config = {headers: {'Access-Control-Allow-Origin': '*'}};
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.get('/abc', function (req, res) {
  res.send('Hello World')
})
app.listen(3001)