let express = require('express');
let path = require('path');

let app = express();
let PORT = 8080;

let reservations = [];
let waitlist = [];

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/tables', function(req, res) {
  res.sendFile(path.join(__dirname + '/tables.html'));
});

app.get('/reserve', function(req, res) {
  res.sendFile(path.join(__dirname + '/reserve.html'));
});

app.post('/makeReservation', function(req, res) {
  console.log(req.body);
  if (reservations.length < 5) {
    reservations.push(req.body);
  } else if (waitlist.length < 2) {
    console.log("Added to waitlist");
    waitlist.push(req.body);
  } else {
    console.log("We can't take your reservation at this moment");
  }
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});