import express from 'express';
const router = express.Router();

import { createUser,getUser,getUserById,updateUser,deleteUser } from '../controllers/userController.js';

router.post('/createUser',createUser);
router.get('/getUser',getUser);
router.get('/users/:id', getUserById);        // Get user by id
router.put('/users/:id', updateUser);         // Update user by id
router.delete('/users/:id', deleteUser); 

export default router;