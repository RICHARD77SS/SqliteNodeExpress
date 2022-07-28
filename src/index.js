
import express from 'express';
import router from './routes.js';
import fs from 'fs';
import https from 'https';
import cors from 'cors';
import { editUser, addUser } from './axios.js';





const app = express();

app.use(express.json());

app.use(cors());

app.use(router);

app.listen(3000, () => console.log('Api rodando em http://localhost:3000'))

https.createServer({
  cert: fs.readFileSync('src/ssl/code.crt'),
  key: fs.readFileSync('src/ssl/code.key')
}, app).listen(443, () => console.log("Rodando em HTTPS https://localhost:443"))

 
// import { insertUser, updateUser, selectUsers, selectUser, deleteUser } from './call/aduser.js'

// app.get('/', function (req, res) {
//   res.send("ola imundo");
// });
// app.get('/users', async function (req, res) {
//   let Usuarios = await selectUsers(); 
//   res.json(Usuarios);
// });
// app.get('/user', async function (req, res) {
//   let Usuario = await selectUser(req.body.id);
//   res.json(Usuario);
// });


// // INSERT INTO TABLE

// app.post('/user', function (req, res) {
//   insertUser(req.body);
//   res.json({
//     "statusCode": 200
//   })
// });
// //UPDATE INTO TABLE
// app.put('/user', function (req, res) {
//   if (req.body && !req.body.id) {
//     res.json({
//       "statusCode": "400",
//       "msg": "Você precisa informar um id "
//     })
//   } else {
//     updateUser(req.body);
//     res.json({
//       "statusCode": 200
//     })

//   }
// });
// //DELETE
// app.delete('/user', async function (req, res) {
//   let usuario = await deleteUser(req.body.id);
//   res.json(usuario);
// })


