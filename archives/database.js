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
            themeurl:`https://atom.io/themes/${name}`,
            description:description,
            author:author,
            authorurl:`https://atom.io/users/${author}`,
            downloads:downloads,
            imagename:imagename
          },(err, result) => {
            if (err) {
              return console.log('Failed to Insert.', err);
            }
          })
    }
}

function databasePull(themeName){
  db1.collection('Themes').find({name:themeName}).toArray().then((theme) => {
   console.log(theme)
   return theme

  })

}




module.exports.databasePull = databasePull
module.exports.databaseInsert = databaseInsert


