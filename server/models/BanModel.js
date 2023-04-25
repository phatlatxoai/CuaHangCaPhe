import mongoose from "mongoose";

const schema = new mongoose.Schema({

    TenBan:{
        type:String,
        required:true
    },
    TrangThai:{
        type:String,
        required:true
    },
    MaKhuVuc:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'KhuVuc'
    }

},{timestamps:true})

export const BanModel = mongoose.model('Ban',schema)

