const express = require('express')
const path = require('path')
const dotenv = require('dotenv');
dotenv.config();
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const createError = require('http-errors');
const mongoose = require('mongoose');
const passport = require('passport');
const cors = require('cors')
//const jwt = require('./config/jwt-config');
const errorHandler = require('./config/error-handler');
const app = express()
require('./config/passport')(passport);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(jwt());
const db = require('./config/keys').mongoURI;
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    req.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  // var whitelist = ['https://8ac54a0281c2.ngrok.io','http://8ac54a0281c2.ngrok.io']
  // var corsOptionsDelegate = function (req, callback) {
  //   var corsOptions;
  //   if (whitelist.indexOf(req.header('Origin')) !== -1) {
  //     corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
  //   } else {
  //     corsOptions = { origin: false } // disable CORS for this request
  //   }
  //   callback(null, corsOptions) // callback expects two parameters: error and options
  // }
  // app.use(cors(corsOptionsDelegate));
 
// catch 404 and forward to error handler
app.use(passport.initialize());
app.use(passport.session());
app.use('/', require('./routes/index.js'));


// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
app.use(errorHandler);
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
if(err.status==401){
  res.json({message:"gdfgdfg"})
}
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
 
  res.status(err.status || 500);
  res.send('error');
});

var port = process.env.PORT || 5000
app.listen(port)
console.log('server started ' + port)