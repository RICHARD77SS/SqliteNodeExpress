import axios from 'axios';

const url = "http://localhost:3000/users"

const newUser = {
  "email": "richard_wwwsolto",
  "password": "richard",
  "name": "richard",
  "username": "richard"
}

export function getUsers() {
  axios.get(url)
    .then(res => {
      const data = res.data
      console.log(data)
    })
  .catch(error => console.log(error))
} 

export function addUser() {
  axios.post('http://localhost:3000/user', newUser)
    .then(res => {
      const data = res.data
      console.log(data)
    })
    .catch(error => console.log(error))
}
