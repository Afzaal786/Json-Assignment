let express = require('express');
let app = express();
let port = process.env.PORT || 3000;



var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


let quotes = [
  { id : 1, name : "Emil", country : 'sweden'},
  { id : 2, name : "fmil", country : 'American'},
  { id : 3, name : "Dmil", country : 'pakistan'},
  { id : 4, name : "mil", country : 'england'}
];


app.get('/user1', function(req, res) {
 
  res.json(quotes);
 res.statusCode = 200;
});

app.get('/user1/:id', function(req, res) {
  if(quotes.length <= req.params.id || req.params.id < 0) {
    res.statusCode = 404;
  }

  var q = quotes[req.params.id];
  res.json(q);
});

app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})


 app.post('/process_post', function(req, res) {

      var response = {
          id: req.body.id,
          name:req.body.name,
          country:req.body.country
      };
      
      // var id = req.body.id;
      // var name =req.body.name;
      // var country= req.body.country;
      // var response = id +' ' +name+  ' ' + country;
   console.log(JSON.stringify(response));
   res.end(JSON.stringify(response));
});

app.put('/user2', function(req, res) {

  res.json(quotes);
});

app.listen(port);
console.log('Server started! At http://localhost:' + port);