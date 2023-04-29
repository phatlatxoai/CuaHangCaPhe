import { NhaCungCapModel } from '../models/NhaCungCapModel.js'

// controller dùng để xem nhà cung cấp
const getnhacungcap = async (req,res)=>{
    try {
        const user = await NhaCungCapModel.find();
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message: error})
    }
}
// controller dùng để thêm nhà cung cấp
const postnhacungcap =  async (req,res)=>{
    const user = new NhaCungCapModel({
        TenNhaCungCap: req.body.TenNhaCungCap,
        DienThoai: req.body.DienThoai,
        Email: req.body.Email,
        DiaChi: req.body.DiaChi,
        TongTienHang: req.body.TongTienHang,
        No: req.body.No,
    });
    try {
        const saveUser = await user.save();
        res.send('Thêm thành công');
        res.json(saveUser);
    } catch (error) {
        res.json({message: error})
    }
}
const getidnhacungcap = async (req,res)=>{
    // res.send(req.params.userId)
    try {
        const getUser = await NhaCungCapModel.findById(req.params.userId);
        res.json(getUser);
    } catch (error) {
        res.json({message: error})
    }
}
// controller dùng để sửa nhà cung cấp
const patchnhacungcap  = async (req,res)=>{
    try {
        const updateUser = await NhaCungCapModel.updateOne(
            {_id: req.params.userId},
            {$set: {
                TenNhaCungCap: req.body.TenNhaCungCap,
                DienThoai: req.body.DienThoai,
                Email: req.body.Email,
                DiaChi: req.body.DiaChi,
                TongTienHang: req.body.TongTienHang,
                No: req.body.No,
            }}
        );
        res.send('Cập nhật thành công');
        res.json(updateUser);
    } catch (error) {
        res.json({message: error})
    }
}
// controller dùng để xoá người dùng
const deletenhacungcap  = async (req,res)=>{
    try {
        const removeUser = await NhaCungCapModel.findByIdAndRemove({_id : req.params.userId});
        res.send('Xóa thành công');
        res.json(removeUser);
    } catch (error) {
        res.json({message: error})
    }
}

// export từng function trong nodejs
export {getidnhacungcap,getnhacungcap,postnhacungcap,patchnhacungcap,deletenhacungcap}