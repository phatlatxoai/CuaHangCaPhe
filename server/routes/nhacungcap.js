import express from 'express'
import {getidnhacungcap,getnhacungcap,postnhacungcap,patchnhacungcap,deletenhacungcap} from '../controllers/NhaCungCapController.js'

const router = express.Router();

// trả ra tất cả nhà cung cấp
router.get('/', getnhacungcap)

// thêm người nhà cung cấp
router.post('/', postnhacungcap)

// trả ra thông tin nhà cung cấp có id là userId
router.get('/:userId', getidnhacungcap)

// sửa thông tin nhà cung cấp có id là userId
router.patch('/:userId', patchnhacungcap)

// xóa nhà cung cấp có id là userId
router.delete('/:userId', deletenhacungcap)


export default router;