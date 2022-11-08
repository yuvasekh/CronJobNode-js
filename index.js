app = require('express')()
uuid=require('uuid')
var MongoClient = require('mongodb').MongoClient;
const port = 6083
var server = app.listen(port, function () {
    console.log("Example app listening 127.0.0.1:", port);
})
const uri ="mongodb+srv://yuva:YYFN23lJdJiBcRvb@cluster1.pg4aere.mongodb.net/yuvadb?retryWrites=true&w=majority";
if(uri)
 {
  console.log("connectd");
}
else
{
  console.log("not connected");
}
const client = new MongoClient(uri);
app.post('/post',function(req,res)
{
     const database = client.db("yuvadb");
      haiku = database.collection("userorders");
      got=  { "id": uuid.v4(), "name": "sasi", "m1": 60, "m2": 70, "m3": 87, "m4": 67, "m5": 89 };
       result =  haiku.insertOne(got);
       if (result) {
        res.status(200).send({ status: true, data: result, msg: 'Successfully retrive the data' })
    }
    else {
        res.status(500).send({ status: false, data: 'error', msg: ' oh shit User Not Found' });
    }
});
app.get('/view/:id', function(req, res)

{  
  num = req.params['id']
  const uri ="mongodb+srv://yuva:YYFN23lJdJiBcRvb@cluster1.pg4aere.mongodb.net/yuvadb?retryWrites=true&w=majority";
     const client = new MongoClient(uri);
MongoClient.connect(uri, function(err, db) {
  if (err) throw err;
  const database = client.db("yuvadb");
  var query = { id:num};
  database.collection("userorders").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    res.send(result)
    db.close();
  });
});
  });

  app.get('/view', function(req, res)

{  
  num = req.params['id']
  const uri ="mongodb+srv://yuva:YYFN23lJdJiBcRvb@cluster1.pg4aere.mongodb.net/yuvadb?retryWrites=true&w=majority";
     const client = new MongoClient(uri);
MongoClient.connect(uri, function(err, db) {
  if (err) throw err;
  const database = client.db("yuvadb");
  var query = {};
  database.collection("userorders").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    res.send(result)
    db.close();
  });
});
  });


  
  app.delete('/dlt/:id',function(req,res)
  {
    num=req.params['id']
    const uri ="mongodb+srv://yuva:YYFN23lJdJiBcRvb@cluster1.pg4aere.mongodb.net/yuvadb?retryWrites=true&w=majority";
    const client = new MongoClient(uri);
MongoClient.connect(uri, function(err, db) {
 if (err) throw err;
 const database = client.db("yuvadb");
 var query = { id:num};
 database.collection("userorders").deleteOne(query,function(err, obj) {
   if (err) throw err;
   console.log("deleted");
   res.send("deleted")
   db.close();
 })
})
  });
  app.put('/updt/:id',function(req,res)
  {
    num=req.params['id']
    const uri ="mongodb+srv://yuva:YYFN23lJdJiBcRvb@cluster1.pg4aere.mongodb.net/yuvadb?retryWrites=true&w=majority";
    const client = new MongoClient(uri);
MongoClient.connect(uri, function(err, db) {
 if (err) throw err;
 const database = client.db("yuvadb");
 var query = {id:num}; 
 var newvalues = {$set: {name: "kala"} };
 database.collection("userorders").updateOne(query,newvalues,function(err, obj) {
   if (err) throw err;
   console.log(obj);
   res.send(obj)
   db.close();
  })
})
  });