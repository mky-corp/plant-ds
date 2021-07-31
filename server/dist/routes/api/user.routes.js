"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _user = require("../../controllers/user.controllers");

var router = (0, _express.Router)();
/* GET users listing. */

router.get('/', _user.viewUser);
/* POST users creating. */

router.post('/', _user.createUser);
var _default = router;
exports["default"] = _default;