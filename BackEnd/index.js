const express=require("express");
const app=express()
const port=5000;

const cors = require('cors');


app.use(express.json());
app.use(cors({
    origin : ['http://localhost:3000']
}));

const userRouter=require("./router/userRouter")

app.use("/user",userRouter);

app.listen(port,()=>{
console.log("Express Started");
})