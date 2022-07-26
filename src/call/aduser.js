import { openDb } from "../configDB.js";

export async function insertUser(usuarios) {
  openDb().then(db => {
    db.run('INSERT INTO usuarios (email, password, name, username) VALUES (?,?,?,?)', [usuarios.email, usuarios.password, usuarios.name, usuarios.username])
  });
}
export async function updateUser(usuarios) {
  openDb().then(db => {
    db.run('UPDATE usuarios SET email=?, password=?, name=?, username=? WHERE id=?', [usuarios.email, usuarios.password, usuarios.name, usuarios.username, usuarios.id])
  });
}
export async function selectUsers() {
  return openDb().then(db => {
    return db.all('SELECT * FROM usuarios')
      .then(res => res)
  });
}
export async function selectUser(id) {
  return openDb().then(db => {
    return db.get('SELECT * FROM usuarios WHERE id=?', [id])
      .then(res => res)
  });
}
