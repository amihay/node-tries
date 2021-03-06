var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

var kittySchema = mongoose.Schema({
    name: String
});

kittySchema.methods.speak = function () {
  var greeting = this.name
    ? "Meow name is " + this.name
    : "I don't have a name";
  console.log(greeting);
}

var Kitten = mongoose.model('Kitten', kittySchema);

var cat1 = new Kitten({ name: 'Muki' });
console.log(cat1.name);

var fluffy = new Kitten({ name: 'fluffy' });
fluffy.speak(); // "Meow name is fluffy"

fluffy.save(function (err, fluffy) {
  if (err) {
    console.console.error('err!!');
    return console.error(err);
  }
  fluffy.speak();
});

Kitten.find(function (err, kittens) {
  if (err) {
    return console.error(err);
  } else {
    console.log('ok. kittens:');
    console.log(kittens);
  }
})
