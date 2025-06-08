import mongoose from 'mongoose';

async function Connectdb() {
    try{
          const connection=await mongoose.connect(process.env.MONGO_URI);

          if(connection){
            console.log("mongo db is connected succesfully")
          }
    }

    catch(err){
        console.log("here is the error",err);
    }
}

export default Connectdb;
