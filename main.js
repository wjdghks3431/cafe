const express = require('express')
const app = express()

app.listen(3000, ()=> {
    console.log('누군가 연락했다')
})

app.get("/",(req,res)=>{
    res.send("여기는 루트입니다.")
})

app.get("/login",(req,res)=>{
    res.send("여기는 로그인입니다.")
})

