const express=require('express');

const app=express();
const PORT=3000;
app.get("/",(req,res)=>{
    res.send("Hello Geeks");
})
app.listen(process.env.PORT||PORT,()=>{
    console.log("Server started");
})