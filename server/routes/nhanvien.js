import express from 'express'
import { NhanVienModel } from '../models/NhanVienModel.js'

const router = express.Router();

// trả ra tất cả người dùng
router.get('/', async (req,res)=>{
    try {
        const user = await NhanVienModel.find();
        res.json(user);
    } catch (error) {
        res.json({message: error})
    }
})

// thêm người dùng
router.post('/', async (req,res)=>{
    const user = new NhanVienModel({
        TenNhanVien: req.body.TenNhanVien,
        TenDangNhap: req.body.TenDangNhap,
        MatKhau: req.body.MatKhau,
        Role: req.body.Role,
    });

    try {
        const saveUser = await user.save();
        res.send('Thêm thành công');
        res.json(saveUser);
    } catch (error) {
        res.json({message: error})
    }
})

// trả ra thông tin người dùng có id là userId
router.get('/:userId', async (req,res)=>{
    // res.send(req.params.userId)
    try {
        const getUser = await NhanVienModel.findById(req.params.userId);
        res.json(getUser);
    } catch (error) {
        res.json({message: error})
    }
})

// sửa thông tin người dùng có id là userId
router.patch('/:userId', async (req,res)=>{
    try {
        const updateUser = await NhanVienModel.updateOne(
            {_id: req.params.userId},
            {$set: {
                TenNhanVien: req.body.TenNhanVien,
                TenDangNhap: req.body.TenDangNhap,
                MatKhau: req.body.MatKhau,
                Role: req.body.Role,
            }}
        );
        res.send('Cập nhật thành công');
        res.json(updateUser);
    } catch (error) {
        res.json({message: error})
    }
})

// xóa người dùng có id là userId
router.delete('/:userId', async (req,res)=>{
    try {
        const removeUser = await NhanVienModel.findByIdAndRemove({_id : req.params.userId});
        res.send('Xóa thành công');
        res.json(removeUser);
    } catch (error) {
        res.json({message: error})
    }
})


export default router;