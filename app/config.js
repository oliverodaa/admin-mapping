// var dbURI = 'mongodb://localhost:27017/';
var dbURI = 'localhost:27017/pages';

function connect() {
  var options = {server:{socketOptions:{keepAlive: 1}}};
  return mongoose.connect(dbURI, options).connection;
}

connect().on('error', console.log)
  .on('disconnected', connect)
  .once('open', function(){console.log("started");});