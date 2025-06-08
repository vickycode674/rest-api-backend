import express from 'express'
import Connectdb from './config/db.js'
import userRoutes from './routes/userRoutes.js'
import { configDotenv } from 'dotenv'
const app = express()

const port = 3000

app.use(express.json())
configDotenv();


Connectdb();

app.use('/',userRoutes); //here we will use the user routes



app.listen(port,()=>{
    console.log("server is running at port 3000")
})