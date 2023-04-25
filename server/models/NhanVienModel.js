import mongoose from "mongoose";

const schema = new mongoose.Schema({

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

export const KhuVucModel = mongoose.model('NhanVien',schema)

