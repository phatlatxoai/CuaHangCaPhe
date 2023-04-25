import mongoose from "mongoose";

const schema = new mongoose.Schema({


    Soluong:{
        type:Int16Array,
        required:true
    },
    MaTU:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ThucUong'
    }
    ,
    MaHD:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'HoaDonBanHang'
    }

},{timestamps:true})

export const BanModel = mongoose.model('ChiTietHoaDon',schema)

