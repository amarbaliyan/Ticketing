import mongoose from 'mongoose';
import {app} from './app';

const start=async()=>{
  if(!process.env.JWT_KEY){
    throw new Error("secret must be defined "); 
  }
  try{
    console.log("yes");
    await mongoose.connect('mongodb://auth-mongo-srv:27017/auth');
    console.log("connected to mongodb");
  }catch (err){
    console.error(err);
  }
  app.listen(3000, () => {
    console.log('Listening on port 3000');
  });
  
};



start();
