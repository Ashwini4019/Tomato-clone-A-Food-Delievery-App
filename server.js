import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import foodRouter from './routes/FoodRoute.js';
import userRouter from './routes/userRoute.js';
import 'dotenv/config.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';

const app = express();
const port = 4000;

// Middleware
app.use(express.json());
app.use(cors());  // ✅ Keep only this

// DB Connection
connectDB();

// API Endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static('uploads'));
app.use("/api/user", userRouter);
app.use("/api/cart",cartRouter);
app.use("/api/order",orderRouter)

app.get("/", (req, res) => {
    res.send("API working");
});

// Start Server
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});

/*import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'
import foodRouter from './routes/FoodRoute.js'
import userRouter from './routes/userRoute.js'
import 'dotenv/config.js'

const app=express()
const port=4000
//middleware
app.use(express.json())
const cors = require('cors');
app.use(cors());


//db connection
connectDB();

//api endpoint
 app.use("/api/food",foodRouter);
 app.use("/images",express.static('uploads'));
 app.use("/api/user",userRouter)
app.get("/",(req,res)=>{
    res.send("API working")

})
app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`)
})

//mongodb+srv://ashwini18jan:<db_password>@cluster0.hf8n4.mongodb.net/?*/
