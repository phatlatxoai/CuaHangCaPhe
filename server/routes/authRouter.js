import express from 'express'
import {login}  from '../controllers/authController.js'
const router = express.Router();

// Đăng nhập login
router.post('/', login)


export default router
