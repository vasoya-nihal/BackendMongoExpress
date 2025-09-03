const mongoose = require('mongoose');
const dotenv =  require('dotenv');


dotenv.config();

const connctDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGODB_URI,{
            useNewUrlParser: true,
        });
        console.log(`MongoDB connected`);
    }catch(err){
        console.error(`Error: ${err.message}`);
        process.exit(1);
    }
}

module.exports = connctDB;