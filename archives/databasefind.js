const MongoClient = require('mongodb').MongoClient;


MongoClient.connect('mongodb://localhost:27017/AtomScrape', (err, db)=>{
      if (err){
          return console.log(`Unable to connect to MongoDB server ${err}`);
      }
      console.log('Connected to MongoDB server')
      global.db1 = db
  });






