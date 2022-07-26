import { openDb } from './configDB.js';
import express from 'express';
import { insertUser, updateUser } from './call/aduser.js'

openDb();

const app = express();
app.use(express.json());

app.get('/', function (req, res) {
  res.send("ola imundo");
});

app.post('/user', function (req, res) {
  insertUser(req.body);
  res.json({
    "statusCode": 200
  })
});
app.put('/user', function (req, res) {
  if (req.body && !req.body.id) {
    res.json({
      "statusCode": "400",
      "msg":"Você precisa informar um id "
    })
  } else {
    updateUser(req.body);
    res.json({
      "statusCode": 200
    })
    
  }
});

app.listen(3000, () => console.log('api rodando'))