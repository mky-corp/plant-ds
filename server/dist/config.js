"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dotenv = require("dotenv");

(0, _dotenv.config)();
var _default = {
  DB_URL: process.env.DB_URL || 'none',
  PORT: process.env.PORT || '4000'
};
exports["default"] = _default;