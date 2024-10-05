require('dotenv').config();  // Load environment variables from .env

const { MongoClient } = require('mongodb');

const client = new MongoClient(process.env.MONGODB_URI);

const connectToDatabase = async () => {
    try {
        await client.connect();

        const db=client.db('mongodb');

        const collection=db.collection('grades');

        // await collection.insertOne({
        //     student_id:123,
        //     products:[
        //         {
        //             type:"exam",
        //             score:90
        //         },
        //         {
        //             type:"homework",
        //             score:10
        //         }
        //     ],
        //     class_id:1
        // })

        // await collection.insertMany([
        //     {
        //         student_id:456,
        //         products:[
        //             {
        //                 type:"exam",
        //                 score:90
        //             },
        //             {
        //                 type:"homework",
        //                 score:10
        //             }
        //         ],
        //         class_id:2
        //     },
        //     {
        //         student_id:789,
        //         products:[
        //             {
        //                 type:"exam",
        //                 score:90
        //             },
        //             {
        //                 type:"homework",
        //                 score:10
        //             }
        //         ],
        //         class_id:3
        //     }
        // ])

        const getData=await collection.find({student_id:123}).toArray()
        console.log("Mongodb is connected");
        console.log(getData);
    } catch (error) {
        console.log("Mongodb is not connected because of ", error);
    }
}

module.exports = { connectToDatabase };
