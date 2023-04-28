import express from 'express'
import {getidnhanvien,getnhanvien,postnhanvien,patchnhanvien,deletenhanvien} from '../controllers/NhanVienController.js'

const router = express.Router();

// trả ra tất cả người dùng
router.get('/', getnhanvien)

// thêm người dùng
router.post('/',postnhanvien)

// trả ra thông tin người dùng có id là userId
router.get('/:userId', getidnhanvien)

// sửa thông tin người dùng có id là userId
router.patch('/:userId',patchnhanvien)

// xóa người dùng có id là userId
router.delete('/:userId',deletenhanvien)


export default router;