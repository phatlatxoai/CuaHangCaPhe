import mongoose from "mongoose";

const schema = new mongoose.Schema({

    TenNhaCungCap:{
        type:String,
        required:true
    },
    DienThoai:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true,
        unique: true
    },
    DiaChi:{
        type:String,
        required:true,

    },
    TongTienHang:{
        type:Int16Array,
        required:true,

    },
    No:{
        type:Int16Array,
        required:true,

    },


},{timestamps:true})

export const BanModel = mongoose.model('NhaCungCap',schema)

