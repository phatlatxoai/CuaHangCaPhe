import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
// import { KhuVucModel } from './models/KhuVucModel.js'
// import { BanModel } from './models/BanModel.js'
import nhanvienRoute from './routes/nhanvien.js'

import authRouter from './routes/authRouter.js'

import nhacungcapRoute from './routes/nhacungcap.js'

const app = express()

// link database của Phát
// const URI = 'mongodb+srv://ntplakao123:12345@caphe.twcayy6.mongodb.net/?retryWrites=true&w=majority'
// link database của Kiên
const URI = 'mongodb+srv://quangbrave987:12345@cluster0.havafup.mongodb.net/?retryWrites=true&w=majority'

// giới hạn request gửi lên mấy chủ dưới dạng json với kích thước tối đa 30MB
app.use(bodyParser.json({limit: '30mb'}))

app.use(bodyParser.urlencoded({extended:true,limit:'30mb'}))
app.use(cors())

// http://localhost:5000/nhanvien
app.use('/nhanvien',nhanvienRoute)
app.use('/dangnhap',authRouter)
app.use('/nhacungcap',nhacungcapRoute)

// kết nói với database
mongoose.connect(URI,{useNewUrlParser:true, useUnifiedTopology:true}).then(()=>{
    try {
        console.log('Kết nối thành công')
    } catch (error) {
        console.log('err',error)
    }
})





// app.get('/',(req,res)=>{
//     res.send('Hello')
// })

// chưa dùng tới
// app.get('/KhuVuc',async  (req,res)=>{
//      const KhuVuc = await KhuVucModel.find()
//      res.send(KhuVuc)
// })

// app.get('/Ban',async  (req,res)=>{
//     const Ban = await BanModel.find()
//     res.send(Ban)
// })
// Port của project
const PORT = process.env.PORT || 5000;


app.listen(PORT,() => {
    console.log(`Server run on PORT: http://localhost:${PORT}`)
})