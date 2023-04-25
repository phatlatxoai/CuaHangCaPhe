import mongoose from "mongoose";

const schema = new mongoose.Schema({

    NgayNhap:{
        type:String,
        required:true
    },
    GhiChu:{
        type:String,
        required:true
    },
    HinhThuc:{
        type:String,
        required:true
    },
    TienHang:{
        type:Int16Array,
        required:true
    },
    ChietKhau:{
        type:Int16Array,
        required:true
    },
    TongTien:{
        type:Int16Array,
        required:true
    },
    ThanhToan:{
        type:Int16Array,
        required:true
    },
    No:{
        type:Int16Array,
        required:true
    },
    MaNV:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'NhanVien'
    },
    MaNCC:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'NhaCungCap'
    }

},{timestamps:true})

export const BanModel = mongoose.model('NhapKho',schema)

