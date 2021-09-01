"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault"),_regenerator=_interopRequireDefault(require("@babel/runtime/regenerator")),_asyncToGenerator2=_interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator")),_mongoose=_interopRequireDefault(require("mongoose")),_config=_interopRequireDefault(require("./config/config"));(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function a(){var b;return _regenerator["default"].wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,_mongoose["default"].set("useCreateIndex",!0),a.next=4,_mongoose["default"].connect(_config["default"].DB_URL,{useNewUrlParser:!0,useUnifiedTopology:!0,useFindAndModify:!1});case 4:b=a.sent,console.log("Mongodb connection SUCCESS \u2714"),console.log("Database is connected to:",b.connection.name),a.next=14;break;case 9:a.prev=9,a.t0=a["catch"](0),console.error("Mongodb connection FAIL \u274C"),console.error(a.t0),process.exit(1);case 14:case"end":return a.stop();}},a,null,[[0,9]])}))();