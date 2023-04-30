import express from 'express'
import {login,logout}  from '../controllers/authController.js'
const router = express.Router();

// Đăng nhập login
router.post('/', login)

router.delete('/', logout)

export default router
