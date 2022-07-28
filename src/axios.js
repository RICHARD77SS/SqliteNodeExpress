import axios from 'axios';

const url = "http://localhost:3000/users"
const url2 = "http://localhost:3000/user"

const newUser = {
  "email": "rico",
  "password": "ricwhard",
  "name": "richarwd",
  "username": "richward"
}
const userGet = {
  method: 'GET',
  url: 'http://localhost:3000/user',
  headers: { 'Content-Type': 'application/json' },
  data: { id: '6' }
};
const userEdit = {
  method: 'PUT',
  url: 'http://localhost:3000/user',
  headers: { 'Content-Type': 'application/json' },
  data: {
    id: '6',
    email: 'Gamora',
    password: 'w',
    name: 'richarwdpessoa',
    username: 'richward'
  }
};
const userDelete = {
  method: 'DELETE',
  url: 'http://localhost:3000/user',
  headers: { 'Content-Type': 'application/json' },
  data: { id: '3' }
};

export function getUsers() {
  axios.get(url)
  .then(res => {
    const data = res.data
      console.log(data)
    })
  .catch(error => console.log(error))
} 
export function getUser() {
  axios.request(userGet).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
} 



export function addUser() {
  axios.post(url2, newUser)
    .then(res => {
      const data = res.data
      console.log(data)
    })
    .catch(error => console.log(error))
}


export function editUser() {
  axios.request(userEdit).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
}





export function deleteUser() {
  axios.request(userDelete).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
}