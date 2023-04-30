import jwt from 'jsonwebtoken';

// Middleware kiểm tra JWT và xác thực người dùng
function requireJWT(req, res, next) {
  const tokenHeader  = req.headers.authorization;
  var token = tokenHeader.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Bạn cần cung cấp JWT để truy cập tài nguyên này' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.userId;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'JWT không hợp lệ' });
  }
}

export default requireJWT;
