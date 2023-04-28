import { NhanVienModel } from '../models/NhanVienModel.js'
import bcrypt from 'bcrypt';


// controller dùng để xem người dùng
const getnhanvien = async (req,res)=>{
        try {
            const user = await NhanVienModel.find();
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({message: error})
        }
    }
// controller dùng để thêm người dùng
const postnhanvien =  async (req,res)=>{
        const matkhau =  req.body.MatKhau
        const hashedPassword = await bcrypt.hash(matkhau, 10);
        const user = new NhanVienModel({
            TenNhanVien: req.body.TenNhanVien,
            TenDangNhap: req.body.TenDangNhap,
            MatKhau: hashedPassword,
            Role: req.body.Role,
        });

        try {
            const saveUser = await user.save();
            res.send('Thêm thành công');
            res.json(saveUser);
        } catch (error) {
            res.json({message: error})
        }
    }
const getidnhanvien = async (req,res)=>{
        // res.send(req.params.userId)
        try {
            const getUser = await NhanVienModel.findById(req.params.userId);
            res.json(getUser);
        } catch (error) {
            res.json({message: error})
        }
    }
// controller dùng để sửa người dùng
const patchnhanvien  = async (req,res)=>{
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
}

// controller dùng để xoá người dùng
const deletenhanvien  = async (req,res)=>{
    try {
        const removeUser = await NhanVienModel.findByIdAndRemove({_id : req.params.userId});
        res.send('Xóa thành công');
        res.json(removeUser);
    } catch (error) {
        res.json({message: error})
    }
}


// export từng function trong nodejs
export {getidnhanvien,getnhanvien,postnhanvien,patchnhanvien,deletenhanvien}




