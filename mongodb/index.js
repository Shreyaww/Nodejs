const { MongoClient, ObjectId } = require('mongodb');

async function run() {
    const url = 'mongodb://localhost:27017';
    const client = new MongoClient(url);

    client.connect();

    const object = new ObjectId();
    //  console.log(object);


    console.log('CONNECTED');

    const db = client.db('animals');
    // CREATE  DATA

    // const result = db.collection('mammals').insertOne({
    //     name: 'doggie',
    //     legs: 4
    // });
    // console.log('INSERTED');


    // db.collection('mammals').find().toArray(function(err, result){
    //     if(err) throw err;

    //     console.log(result);
    // })



    // UPDATE DATA

    // db.collection('mammals').findOneAndUpdate({
    //     _id: new ObjectId('665042324e643b07e9113d72')

    // },
    //     { $set: { name: 'updated_name' } }
    // ).then(result => {
    //     console.log(result)
    // }).catch(err => {
    //     console.log(err)
    // });


    // DELETE 

    // db.collection('mammals').deleteMany({
    //     name : 'horse'
    // })

    // db.collection('mammals').deleteOne({
    //     name : 'dog'
    // })

    // db.collection('mammals').deleteAndFind({
    //     name : 'dog'
    // })

    db.collection('mammals').findOneAndDelete({
        _id: new ObjectId('665042324e643b07e9113d72')
    }).then(result => {
        console.log(result)
    })

}

run();
