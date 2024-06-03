import mongoose from 'mongoose';

const Connection=async()=>{
   
    try{
      await mongoose.connect('mongodb://127.0.0.1:27017/gmail_clone',{useNewUrlParser: true,useUnifiedTopology: true,});
       console.log('Database is connected successfully')
    }catch(error){
        console.log("Error in connection",error.message);
    }
};

export default Connection;