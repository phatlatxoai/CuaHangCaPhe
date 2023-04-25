import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import { KhuVucModel } from './models/KhuVucModel.js'
import { BanModel } from './models/BanModel.js'

const app = express()
const URI = 'mongodb+srv://ntplakao123:12345@caphe.twcayy6.mongodb.net/?retryWrites=true&w=majority'
app.use(bodyParser.json({limit: '30mb'}))
app.use(bodyParser.urlencoded({extended:true,limit:'30mb'}))
app.use(cors())


mongoose.connect(URI,{useNewUrlParser:true, useUnifiedTopology:true}).then(()=>{

try {
    console.log('ket noi thanh cong ')
} catch (error) {
    console.log('err',error)
}

})



app.get('/KhuVuc',async  (req,res)=>{
     const KhuVuc = await KhuVucModel.find()
     res.send(KhuVuc)
})

app.get('/Ban',async  (req,res)=>{
    const Ban = await BanModel.find()
    res.send(Ban)
})

const PORT = process.env.PORT || 5000;


app.listen(PORT,() => {

    console.log(` PORT cua server la ${PORT}`)


})

