import mongoose from "mongoose";

const nhacungcapschema = new mongoose.Schema({

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
        type:Number,
        required:true,

    },
    No:{
        type:Number,
        required:true,

    },


},{timestamps:true})

export const NhaCungCapModel = mongoose.model('NhaCungCap',nhacungcapschema)

