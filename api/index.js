import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
dotenv.config();
const app = express();
app.use(express.json());

mongoose.connect(
 process.env.MONGO
).then(()=>{
    console.log('Connected to MOngoDB!');
}).catch((err)=>{
    console.log(err);
})

//by deafult we are not allow to send json to server so here we allow to send json by this line of code



app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});


// app.get('/test',(req,res)=>{
//     res.send('hello world')
// });

// app.get("/test", (req, res) => {
//   res.json({
//     message:"hello world!",
//   })
// });

app.use('/api/user',userRouter);
app.use('/api/auth',authRouter);


//middlleware for errors
app.use((err,req,res,next)=>{

const statusCode=err.statusCode || 500;
const message=err.message || 'Internal Server error';
return res.status(statusCode).json({
    success:false,
    statusCode,
    message,
})
})



