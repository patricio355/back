const express = require('express');
const cors = require('cors');
var app = express();

//middlewares
const corsConfig = {
  origin: "*",
  credential: true,
  methods: ["GET","POST","PUT","DELETE"],
};
app.options("",cors(corsConfig));
app.use(cors(corsConfig));

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use('/api/users', require('./routes/users.js'));

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
    console.log(`Servidor iniciado en puerto`, app.get('port'));
});

// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');
// const cors = require('cors');

// var usersRoutes = require('./routes/users');

// var app = express();



// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(cors());

// app.use('/api/users', usersRoutes);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.send('error');
// });

// module.exports = app;
