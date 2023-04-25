import mongoose from "mongoose";

const schema = new mongoose.Schema({

    TenKhuvuc:{
        type:String,
        required:true
    },
    TrangThai:{
        type:String,
        required:true
    }

},{timestamps:true})

export const KhuVucModel = mongoose.model('KhuVuc',schema)

