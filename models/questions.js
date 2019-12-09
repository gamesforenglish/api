const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://gamesforenglish:gamesforenglishnotcontain@cluster0-sbygc.mongodb.net/db1?retryWrites=true&w=majority", (err) => {
  if(err){console.log(err)}
  else{console.log('OK connect to db')}
});

let Schema = mongoose.Schema;
let Questions = mongoose.model('Questions', new Schema({questions:[], created_at: {type: Date, default: () => {return new Date()} }}));
module.exports = Questions;
