import { openDb } from './configDB.js';
import express from 'express';
import { insertUser, updateUser, selectUsers, selectUser } from './call/aduser.js'

openDb();

const app = express();
app.use(express.json());

app.get('/', function (req, res) {
  res.send("ola imundo");
});
app.get('/users', async function (req, res) {
  let Usuarios = await selectUsers();
  res.json(Usuarios);
});
app.get('/user', async function (req, res) {
  let Usuario = await selectUser(req.body.id);
  res.json(Usuario);
});


// INSERT INTO TABLE

app.post('/user', function (req, res) {
  insertUser(req.body);
  res.json({
    "statusCode": 200
  })
});
//UPDATE INTO TABLE
app.put('/user', function (req, res) {
  if (req.body && !req.body.id) {
    res.json({
      "statusCode": "400",
      "msg": "Você precisa informar um id "
    })
  } else {
    updateUser(req.body);
    res.json({
      "statusCode": 200
    })

  }
});

app.listen(3000, () => console.log('api rodando'))