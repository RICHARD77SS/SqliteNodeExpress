
import express from 'express';
import router from './routes.js';
import fs from 'fs';
import https from 'https';
import cors from 'cors';



const app = express();
app.get('/', function (req, res) {
  const html = `
    <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>React no Servidor - Programador a Bordo</title>
      </head>
      <body>
        <div id="app">
         ola mundo
        </div>
      </body>
      </html>
  `
  res.send(html);
})
app.use(express.json());

app.use(cors());

app.use(router);

app.listen(3000, () => console.log('Api rodando em http://localhost:3000'))

https.createServer({
  cert: fs.readFileSync('src/ssl/code.crt'),
  key: fs.readFileSync('src/ssl/code.key')
}, app).listen(443, () => console.log("Rodando em HTTPS https://localhost:443"))

 


