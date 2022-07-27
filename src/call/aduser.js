import { openDb } from "../configDB.js";

export async function insertUser(req, res) {
  let usuarios = req.body;
  openDb().then(db => {
    db.run('INSERT INTO usuarios (email, password, name, username) VALUES (?,?,?,?)', [usuarios.email, usuarios.password, usuarios.name, usuarios.username])
  });
  res.json({
    "statusCode": 200
  })
}
export async function selectUsers(req, res) {
  openDb().then(db => {
    db.all('SELECT * FROM usuarios')
      .then(users => res.json(users))
  });
}

export async function selectUser(req, res) {
  let id = req.body.id;
  openDb().then(db => {
    db.get('SELECT * FROM usuarios WHERE id=?', [id])
      .then(user => res.json(user));
  });
}

export async function updateUser(req, res) {
  let usuarios = req.body;
  openDb().then(db => {
    db.run('UPDATE usuarios SET email=?, password=?, name=?, username=? WHERE id=?', [usuarios.email, usuarios.password, usuarios.name, usuarios.username, usuarios.id])
  });
  res.json({
    "statusCode": 200
  })
}


export async function deleteUser(req, res) {
  let id = req.body.id;
  openDb().then(db => {
    db.get('DELETE FROM usuarios WHERE id=?', [id])
      .then(res => res)
  });
  res.json({
    "statusCode": 200
  })
}
