
const { MongoClient} = require("mongodb");

const url = "mongodb+srv://sachin18bme1170:pV9EFCKAnyxeKPjy@cluster0.kvg0b01.mongodb.net/?retryWrites=true&w=majority";
const databaseName = "todolist";
const client = new MongoClient(url);
const collectionName = "todo";

async function dbConnect() {
    await client.connect();
    const db = client.db(databaseName);
    return db.collection(collectionName);
}

module.exports = dbConnect;
