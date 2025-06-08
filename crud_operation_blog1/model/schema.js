import mongoose from "mongoose";

const modelSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },

    email:{
        type:String,
        require:true
    }
})

const User = mongoose.models.User || mongoose.model("User",modelSchema);

export default User;