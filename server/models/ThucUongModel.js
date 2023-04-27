import mongoose from "mongoose";

const schema = new mongoose.Schema({

    TenThucUong:{
        type:String,
        required:true
    },
    HinhAnh:{
        type:String,
        required:true
    },
    GiaSp:{
        type:Int32Array,
        required:true
    },
    Size:{
        type:String,
        required:true
    }
},{timestamps:true})

export const ThucUongModel = mongoose.model('ThucUong',schema)

