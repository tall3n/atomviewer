const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/AtomScrape', (err, db)=>{
    if (err){
        return console.log(`Unable to connect to MongoDB server ${err}`);
    }
    console.log('Connected to MongoDB server')
    global.db1 = db
});
function databaseInsert(name,description,author,downloads,imagename){

      console.log(name)
        if (name != ""){
          db1.collection('Themes').insertOne({
            name:name,
            description:description,
            author:author,
            downloads:downloads,
            imagename:imagename
          },(err, result) => {
            if (err) {
              return console.log('Failed to Insert.', err);
            }
            console.log(JSON.stringify(result.ops,undefined, 2));
          })

    }

}




module.exports.databaseInsert = databaseInsert
