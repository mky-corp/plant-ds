"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault"),_express=_interopRequireDefault(require("express")),_index=_interopRequireDefault(require("./index")),_path=_interopRequireDefault(require("path")),_cors=_interopRequireDefault(require("cors")),_morgan=_interopRequireDefault(require("morgan")),_cookieParser=_interopRequireDefault(require("cookie-parser")),_expressFileupload=_interopRequireDefault(require("express-fileupload")),_ServerExceptions=require("./utils/ServerExceptions"),_index2=_interopRequireDefault(require("./routes/index.routes")),_user=_interopRequireDefault(require("./routes/api/user.routes")),_image=_interopRequireDefault(require("./routes/api/image.routes")),_auth=_interopRequireDefault(require("./routes/api/auth.routes"));// utils
// routers
// view engine setup
// middlewares
/**
 * Para poder obtener la red neuronal con todos sus archivos necesitamos tenerlo
 * disponible desde nuestro servidor para cargar todos los 28 archivos que nos
 * genero la transformación del "modelo.h5".
 *
 * Todo se subirá en la ruta URL/cnn para poder realizar nuestra petición con tfjs
 */ // routes
// catch 404 and forward to error handler
// error handler
// listener server
_index["default"].set("views",_path["default"].join(__dirname,"views")),_index["default"].set("view engine","pug"),_index["default"].use((0,_cors["default"])({origin:_index["default"].get("FRONT"),credentials:!0})),_index["default"].use((0,_morgan["default"])("dev")),_index["default"].use(_express["default"].json()),_index["default"].use(_express["default"].urlencoded({extended:!1})),_index["default"].use((0,_cookieParser["default"])()),_index["default"].use(_express["default"]["static"](_path["default"].join(__dirname,"public"))),_index["default"].use((0,_expressFileupload["default"])({limits:{fileSize:52428800}})),_index["default"].use("/cnn",_express["default"]["static"](_path["default"].join(__dirname,"cnn_plants"))),_index["default"].use("/",_index2["default"]),_index["default"].use("/api/users",_user["default"]),_index["default"].use("/api/images",_image["default"]),_index["default"].use("/api/auth",_auth["default"]),_index["default"].use(_ServerExceptions.handleNotFound),_index["default"].use(_ServerExceptions.handleError),_index["default"].listen(_index["default"].get("PORT"),function(){console.log("Listen on http://localhost:".concat(_index["default"].get("PORT")))});