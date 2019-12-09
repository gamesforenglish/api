const Questions = require('../models/questions');

module.exports.get = (req, res, next) => {
  Questions.findOne({}, {}, { sort: { 'created_at' : -1 } }, function(err, post) {
    res.header("Access-Control-Allow-Origin", "*");
    res.send( post );
  });
}

module.exports.post = (req, res, next) => {
  let length = (Object.keys(req.body).length);
  let data = [];
  for (let i=0; i<length; i++){
    let queryStr = "data[" + i + "][]";
    data.push(req.body[queryStr]);
  }
  Questions.insertMany({questions:data}, (err, doc) => {
    if(err){console.log(err)}
    else{res.send('OK')}
  });
}
