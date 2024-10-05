const {MongoClient} = require('mongodb');

const client=new MongoClient(process.env.MONGODB_URI);

const connectToDatabase=async()=>{
    try {
        await client.connect();
        console.log("Mongodb is connected");
    } catch (error) {
        console.log("Mongodb is not connected because of ",error);
    }
}
