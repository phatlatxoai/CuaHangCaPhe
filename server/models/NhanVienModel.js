import mongoose from "mongoose";

const nhanvienSchema = new mongoose.Schema({

    TenNhanVien:{
        type:String,
        required:true
    },
    TenDangNhap:{
        type:String,
        required:true
    },
    MatKhau:{
        type:String,
        required:true
    },
    Role:{
        type:String,
        required:true
    },
},{timestamps:true})

export const NhanVienModel = mongoose.model('NhanVien',nhanvienSchema)

