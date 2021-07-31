"use strict";

var _express = _interopRequireDefault(require("express"));

var _index = _interopRequireDefault(require("./index"));

var _path = _interopRequireDefault(require("path"));

var _cors = _interopRequireDefault(require("cors"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _httpErrors = _interopRequireDefault(require("http-errors"));

var _ServerExceptions = _interopRequireDefault(require("./utils/ServerExceptions"));

var _index2 = _interopRequireDefault(require("./routes/index.routes"));

var _user = _interopRequireDefault(require("./routes/api/user.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// routes views
// routes api
_index["default"].set('PORT', (0, _ServerExceptions["default"])(process.env.PORT || '5200')); // view engine setup


_index["default"].set('views', _path["default"].join(__dirname, 'views'));

_index["default"].set('view engine', 'pug'); // middlewares


_index["default"].use((0, _cors["default"])({
  origin: 'http://localhost:3000',
  credentials: true
}));

_index["default"].use((0, _morgan["default"])('dev'));

_index["default"].use(_express["default"].json());

_index["default"].use(_express["default"].urlencoded({
  extended: false
}));

_index["default"].use((0, _cookieParser["default"])());

_index["default"].use(_express["default"]["static"](_path["default"].join(__dirname, 'public'))); // routes views


_index["default"].use('/', _index2["default"]); // routes api


_index["default"].use('/api/users', _user["default"]); // catch 404 and forward to error handler


_index["default"].use(function (req, res, next) {
  next((0, _httpErrors["default"])(404));
}); // error handler


_index["default"].use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {}; // render the error page

  res.status(err.status || 500);
  res.render('error');
});

_index["default"].listen(_index["default"].get('PORT'), function () {
  console.log("Listen on http://localhost:".concat(_index["default"].get('PORT')));
});