const { MongoClient, ObjectId } = require('mongodb');

async function run() {
    const url = 'mongodb://localhost:27017';
    const client = new MongoClient(url);

    client.connect();

    const object = new ObjectId();
    //  console.log(object);


    console.log('CONNECTED');

    const db = client.db('animals');
    // const result = db.collection('mammals').insertOne({
    //     name: 'dog',
    //     legs: 4
    // });
    // console.log('INSERTED');


}

run();
