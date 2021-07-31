"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.viewIndex = void 0;

var viewIndex = function viewIndex(req, res, next) {
  res.render('index', {
    title: 'Express'
  });
};

exports.viewIndex = viewIndex;