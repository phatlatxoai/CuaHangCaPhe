import bcrypt from 'bcrypt';
import jwt  from 'jsonwebtoken';
import { NhanVienModel } from '../models/NhanVienModel.js';
import dotenv from 'dotenv';

dotenv.config();

const login = async (req, res) => {
  try {
    const { TenDangNhap, MatKhau } = req.body;

    // Tìm kiếm user với username từ request
    const user = await NhanVienModel.findOne({ TenDangNhap });

    // Nếu không tìm thấy user, trả về lỗi
    if (!user) {
      return res.status(401).json({ success: false, message: 'Invalid username or password' });
    }

    // Kiểm tra password được cung cấp từ request có khớp với password của user không
    const isPasswordMatch = await bcrypt.compare(MatKhau, user.MatKhau);
    if (!isPasswordMatch) {
      return res.status(401).json({ success: false, message: 'Invalid username or password' });
    }

    // Tạo một JSON Web Token để đăng nhập thành công
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET,{ expiresIn: '1h' });


    // Gửi token trả về cho client
    res.setHeader('Authorization', 'Bearer ' + token);

    res.status(200).json({ success: true, message: 'Login successful', token ,user });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to login', error });
  }
};

const logout = async (req, res) => {


  // Gán token mới vào header của response






}

export {login,logout}
