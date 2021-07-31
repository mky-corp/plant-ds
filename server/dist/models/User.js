"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var userSchema = new _mongoose.Schema({
  names: {
    type: String,
    required: true
  },
  surnames: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  state: {
    type: Boolean,
    "default": true
  }
});

var _default = (0, _mongoose.model)('Users', userSchema);

exports["default"] = _default;