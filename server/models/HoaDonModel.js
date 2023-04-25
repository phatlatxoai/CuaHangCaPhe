import mongoose from "mongoose";

const schema = new mongoose.Schema({

    NgayHDBH:{
        type:String,
        required:true
    },
    TongTien:{
        type:Int16Array,
        required:true
    },
    TienNhan:{
        type:Int16Array,
        required:true
    },
    TienThoi:{
        type:Int16Array,
        required:true
    },
    MaNV:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'NhanVien'
    },
    MaBan:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ban'
    }

},{timestamps:true})

export const BanModel = mongoose.model('HoaDon',schema)

