"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUser = exports.viewUser = void 0;

var _User = _interopRequireDefault(require("../models/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var viewUser = function viewUser(req, res, next) {
  res.send('respond with a resource');
};

exports.viewUser = viewUser;

var createUser = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var data, newUser;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            data = req.body;
            _context.next = 3;
            return _User["default"].create(data);

          case 3:
            newUser = _context.sent;
            res.send({
              msg: 'Se pudo crear el usuario',
              newUser: newUser
            });

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createUser(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.createUser = createUser;