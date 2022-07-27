import { Router } from 'express';
import { insertUser, updateUser, selectUsers, selectUser, deleteUser } from './call/aduser.js';


const router = Router();

router.get('/', (req, res) => {
  res.send('Rotas do express.')
})

export default router;