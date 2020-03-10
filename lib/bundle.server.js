/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/db.ts":
/*!**********************!*\
  !*** ./server/db.ts ***!
  \**********************/
/*! exports provided: Request, Material */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Request", function() { return Request; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Material", function() { return Material; });
/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pg */ "pg");
/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sequelize */ "sequelize");
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_1__);


const sequelize = new sequelize__WEBPACK_IMPORTED_MODULE_1__["Sequelize"]('postgres://localhost:5432/manure_registry');
const seed = __webpack_require__(/*! ./seed */ "./server/seed.ts");
sequelize
    .authenticate()
    .then(() => {
    console.log('Connection has been established successfully.');
})
    .catch(err => {
    console.error('Unable to connect to the database:', err);
});
const commonProperties = {
    firstName: { type: sequelize__WEBPACK_IMPORTED_MODULE_1__["DataTypes"].STRING, allowNull: false },
    lastName: { type: sequelize__WEBPACK_IMPORTED_MODULE_1__["DataTypes"].STRING, allowNull: false },
    email: { type: sequelize__WEBPACK_IMPORTED_MODULE_1__["DataTypes"].STRING, allowNull: false },
    phone: { type: sequelize__WEBPACK_IMPORTED_MODULE_1__["DataTypes"].STRING, allowNull: false },
    address: { type: sequelize__WEBPACK_IMPORTED_MODULE_1__["DataTypes"].STRING, allowNull: false },
    city: { type: sequelize__WEBPACK_IMPORTED_MODULE_1__["DataTypes"].STRING, allowNull: false },
    postal: { type: sequelize__WEBPACK_IMPORTED_MODULE_1__["DataTypes"].STRING, allowNull: false },
    manureType: { type: sequelize__WEBPACK_IMPORTED_MODULE_1__["DataTypes"].STRING, allowNull: false },
    quantity: { type: sequelize__WEBPACK_IMPORTED_MODULE_1__["DataTypes"].STRING, allowNull: false },
    organicSystem: {
        type: sequelize__WEBPACK_IMPORTED_MODULE_1__["DataTypes"].BOOLEAN,
        defaultValue: false,
        allowNull: false,
    },
    composted: { type: sequelize__WEBPACK_IMPORTED_MODULE_1__["DataTypes"].BOOLEAN, defaultValue: false, allowNull: false },
    analysisAvailable: {
        type: sequelize__WEBPACK_IMPORTED_MODULE_1__["DataTypes"].BOOLEAN,
        defaultValue: false,
        allowNull: false,
    },
    logisticsComments: { type: sequelize__WEBPACK_IMPORTED_MODULE_1__["DataTypes"].TEXT },
};
class Request extends sequelize__WEBPACK_IMPORTED_MODULE_1__["Model"] {
}
Request.init(Object.assign(Object.assign({}, commonProperties), { deliveryRequired: {
        type: sequelize__WEBPACK_IMPORTED_MODULE_1__["DataTypes"].BOOLEAN,
        defaultValue: false,
        allowNull: false,
    }, applicationRequired: {
        type: sequelize__WEBPACK_IMPORTED_MODULE_1__["DataTypes"].BOOLEAN,
        defaultValue: false,
        allowNull: false,
    } }), {
    sequelize,
    modelName: 'request',
});
class Material extends sequelize__WEBPACK_IMPORTED_MODULE_1__["Model"] {
}
Material.init(Object.assign(Object.assign({}, commonProperties), { deliveryAvailable: {
        type: sequelize__WEBPACK_IMPORTED_MODULE_1__["DataTypes"].BOOLEAN,
        defaultValue: false,
        allowNull: false,
    }, applicationAvailable: {
        type: sequelize__WEBPACK_IMPORTED_MODULE_1__["DataTypes"].BOOLEAN,
        defaultValue: false,
        allowNull: false,
    } }), {
    sequelize,
    modelName: 'material',
});
sequelize.sync({ force: true }).then(() => {
    seed.materials.forEach((data) => {
        Material.create(data);
    });
    seed.requests.forEach((data) => {
        Request.create(data);
    });
});


/***/ }),

/***/ "./server/index.ts":
/*!*************************!*\
  !*** ./server/index.ts ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! body-parser */ "body-parser");
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cors */ "cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./db */ "./server/db.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




const app = express__WEBPACK_IMPORTED_MODULE_2___default()();
const port = 8080;
app.use(body_parser__WEBPACK_IMPORTED_MODULE_0___default.a.json());
app.use(cors__WEBPACK_IMPORTED_MODULE_1___default()());
app.get('/requests', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let limit = parseInt(req.params.limit) || 20;
    let offset = parseInt(req.params.offset) || 0;
    const requests = yield _db__WEBPACK_IMPORTED_MODULE_3__["Request"].findAll({ limit, offset });
    res.send(requests);
}));
app.get('/requests/:requestId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const request = yield _db__WEBPACK_IMPORTED_MODULE_3__["Request"].findByPk(req.params.requestId);
    res.send(request);
}));
app.post('/requests', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const request = yield _db__WEBPACK_IMPORTED_MODULE_3__["Request"].create(Object.assign({}, req.body));
    res.send(request);
}));
app.get('/materials', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let limit = parseInt(req.params.limit) || 20;
    let offset = parseInt(req.params.offset) || 0;
    const materials = yield _db__WEBPACK_IMPORTED_MODULE_3__["Material"].findAll({ limit, offset });
    res.send(materials);
}));
app.get('/materials/:materialId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const material = yield _db__WEBPACK_IMPORTED_MODULE_3__["Material"].findByPk(req.params.materialId);
    res.send(material);
}));
app.post('/materials', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const material = yield _db__WEBPACK_IMPORTED_MODULE_3__["Material"].create(Object.assign({}, req.body));
    res.send(material);
}));
app.listen(port, () => console.log(`App listening on port ${port}!`));


/***/ }),

/***/ "./server/seed.ts":
/*!************************!*\
  !*** ./server/seed.ts ***!
  \************************/
/*! exports provided: materials, requests */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "materials", function() { return materials; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requests", function() { return requests; });
const materials = [
    {
        firstName: 'Ron',
        lastName: 'Swanson',
        email: 'ron.swanson@gmail.com',
        phone: '452-123-2394',
        address: '1940 Main St.',
        city: 'Woodstock',
        postal: 'M6G 3T6',
        manureType: 'swine',
        quantity: '50',
        organicSystem: true,
        composted: false,
        analysisAvailable: false,
        logisticsComments: null,
        deliveryAvailable: false,
        applicationAvailable: false,
        createdAt: new Date('Dec 15 2019'),
    },
    {
        firstName: 'Amy',
        lastName: 'Reed',
        email: 'amy.reed@gmail.com',
        phone: '293-158-2018',
        address: '201 Ashton Ave.',
        city: 'Thamesford',
        postal: 'U0S 3J2',
        manureType: 'cow',
        quantity: '150',
        organicSystem: false,
        composted: false,
        analysisAvailable: true,
        logisticsComments: null,
        deliveryAvailable: true,
        applicationAvailable: true,
        createdAt: new Date('Jan 01 2020'),
    },
    {
        firstName: 'Phil',
        lastName: 'Wilton',
        email: 'phil.wilton@gmail.com',
        phone: '928-927-4284',
        address: '100 Folsom St.',
        city: 'Belmont',
        postal: 'N0P 4I1',
        manureType: 'cow',
        quantity: '700',
        organicSystem: true,
        composted: false,
        analysisAvailable: false,
        logisticsComments: 'Only available until Springtime',
        deliveryAvailable: false,
        applicationAvailable: false,
        createdAt: new Date('Jan 11 2020'),
    },
];
const requests = [
    {
        firstName: 'Elliot',
        lastName: 'Rhodes',
        email: 'elliot.rhodes@gmail.com',
        phone: '829-928-2172',
        address: '1940 Main St.',
        city: 'Woodstock',
        postal: 'M6G 3T6',
        manureType: 'swine',
        quantity: '50',
        organicSystem: true,
        composted: false,
        analysisAvailable: false,
        logisticsComments: null,
        deliveryAvailable: false,
        applicationAvailable: false,
        createdAt: new Date('Jan 03 2020'),
    },
    {
        firstName: 'Jake',
        lastName: 'Sloan',
        email: 'jake.sloan@gmail.com',
        phone: '829-928-2172',
        address: '1940 Main St.',
        city: 'Woodstock',
        postal: 'M6G 3T6',
        manureType: 'swine',
        quantity: '50',
        organicSystem: true,
        composted: false,
        analysisAvailable: false,
        logisticsComments: null,
        deliveryAvailable: false,
        applicationAvailable: false,
        createdAt: new Date('Jan 09 2020'),
    },
    {
        firstName: 'Rob',
        lastName: 'Foster',
        email: 'rob.foster@gmail.com',
        phone: '829-928-2172',
        address: '1940 Main St.',
        city: 'Woodstock',
        postal: 'M6G 3T6',
        manureType: 'swine',
        quantity: '50',
        organicSystem: true,
        composted: false,
        analysisAvailable: false,
        logisticsComments: null,
        deliveryAvailable: false,
        applicationAvailable: false,
        createdAt: new Date('Jan 12 2020'),
    },
    {
        firstName: 'Jane',
        lastName: 'Finch',
        email: 'jane.finch@gmail.com',
        phone: '829-928-2172',
        address: '1940 Main St.',
        city: 'Woodstock',
        postal: 'M6G 3T6',
        manureType: 'swine',
        quantity: '50',
        organicSystem: true,
        composted: false,
        analysisAvailable: false,
        logisticsComments: null,
        deliveryAvailable: false,
        applicationAvailable: false,
        createdAt: new Date('Jan 15 2020'),
    },
    {
        firstName: 'Eric',
        lastName: 'Knope',
        email: 'eric.knope@gmail.com',
        phone: '829-928-2172',
        address: '1940 Main St.',
        city: 'Woodstock',
        postal: 'M6G 3T6',
        manureType: 'swine',
        quantity: '50',
        organicSystem: true,
        composted: false,
        analysisAvailable: false,
        logisticsComments: null,
        deliveryAvailable: false,
        applicationAvailable: false,
        createdAt: new Date('Jan 31 2020'),
    },
    {
        firstName: 'John',
        lastName: 'Elliot',
        email: 'john.elliot@gmail.com',
        phone: '829-928-2172',
        address: '1940 Main St.',
        city: 'Woodstock',
        postal: 'M6G 3T6',
        manureType: 'swine',
        quantity: '50',
        organicSystem: true,
        composted: false,
        analysisAvailable: false,
        logisticsComments: null,
        deliveryAvailable: false,
        applicationAvailable: false,
        createdAt: new Date('Feb 03 2020'),
    },
    {
        firstName: 'Ann',
        lastName: 'Harris',
        email: 'ann.harris@gmail.com',
        phone: '829-928-2172',
        address: '1940 Main St.',
        city: 'Woodstock',
        postal: 'M6G 3T6',
        manureType: 'swine',
        quantity: '50',
        organicSystem: true,
        composted: false,
        analysisAvailable: false,
        logisticsComments: null,
        deliveryAvailable: false,
        applicationAvailable: false,
        createdAt: new Date('Feb 04 2020'),
    },
    {
        firstName: 'Mary',
        lastName: 'Green',
        email: 'mary.green@gmail.com',
        phone: '829-928-2172',
        address: '1940 Main St.',
        city: 'Woodstock',
        postal: 'M6G 3T6',
        manureType: 'swine',
        quantity: '50',
        organicSystem: true,
        composted: false,
        analysisAvailable: false,
        logisticsComments: null,
        deliveryAvailable: false,
        applicationAvailable: false,
        createdAt: new Date('Feb 06 2020'),
    },
];


/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "pg":
/*!*********************!*\
  !*** external "pg" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("pg");

/***/ }),

/***/ "sequelize":
/*!****************************!*\
  !*** external "sequelize" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sequelize");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2RiLnRzIiwid2VicGFjazovLy8uL3NlcnZlci9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvc2VlZC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZXF1ZWxpemVcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVk7QUFDNEM7QUFDeEQsc0JBQXNCLG1EQUFTO0FBQy9CLGFB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SztBQUNMO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7OztBQ3pNQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSwrQjs7Ozs7Ozs7Ozs7QUNBQSxzQyIsImZpbGUiOiJidW5kbGUuc2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zZXJ2ZXIvaW5kZXgudHNcIik7XG4iLCJpbXBvcnQgJ3BnJztcbmltcG9ydCB7IFNlcXVlbGl6ZSwgTW9kZWwsIERhdGFUeXBlcyB9IGZyb20gJ3NlcXVlbGl6ZSc7XG5jb25zdCBzZXF1ZWxpemUgPSBuZXcgU2VxdWVsaXplKCdwb3N0Z3JlczovL2xvY2FsaG9zdDo1NDMyL21hbnVyZV9yZWdpc3RyeScpO1xuY29uc3Qgc2VlZCA9IHJlcXVpcmUoJy4vc2VlZCcpO1xuc2VxdWVsaXplXG4gICAgLmF1dGhlbnRpY2F0ZSgpXG4gICAgLnRoZW4oKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdDb25uZWN0aW9uIGhhcyBiZWVuIGVzdGFibGlzaGVkIHN1Y2Nlc3NmdWxseS4nKTtcbn0pXG4gICAgLmNhdGNoKGVyciA9PiB7XG4gICAgY29uc29sZS5lcnJvcignVW5hYmxlIHRvIGNvbm5lY3QgdG8gdGhlIGRhdGFiYXNlOicsIGVycik7XG59KTtcbmNvbnN0IGNvbW1vblByb3BlcnRpZXMgPSB7XG4gICAgZmlyc3ROYW1lOiB7IHR5cGU6IERhdGFUeXBlcy5TVFJJTkcsIGFsbG93TnVsbDogZmFsc2UgfSxcbiAgICBsYXN0TmFtZTogeyB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HLCBhbGxvd051bGw6IGZhbHNlIH0sXG4gICAgZW1haWw6IHsgdHlwZTogRGF0YVR5cGVzLlNUUklORywgYWxsb3dOdWxsOiBmYWxzZSB9LFxuICAgIHBob25lOiB7IHR5cGU6IERhdGFUeXBlcy5TVFJJTkcsIGFsbG93TnVsbDogZmFsc2UgfSxcbiAgICBhZGRyZXNzOiB7IHR5cGU6IERhdGFUeXBlcy5TVFJJTkcsIGFsbG93TnVsbDogZmFsc2UgfSxcbiAgICBjaXR5OiB7IHR5cGU6IERhdGFUeXBlcy5TVFJJTkcsIGFsbG93TnVsbDogZmFsc2UgfSxcbiAgICBwb3N0YWw6IHsgdHlwZTogRGF0YVR5cGVzLlNUUklORywgYWxsb3dOdWxsOiBmYWxzZSB9LFxuICAgIG1hbnVyZVR5cGU6IHsgdHlwZTogRGF0YVR5cGVzLlNUUklORywgYWxsb3dOdWxsOiBmYWxzZSB9LFxuICAgIHF1YW50aXR5OiB7IHR5cGU6IERhdGFUeXBlcy5TVFJJTkcsIGFsbG93TnVsbDogZmFsc2UgfSxcbiAgICBvcmdhbmljU3lzdGVtOiB7XG4gICAgICAgIHR5cGU6IERhdGFUeXBlcy5CT09MRUFOLFxuICAgICAgICBkZWZhdWx0VmFsdWU6IGZhbHNlLFxuICAgICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgIH0sXG4gICAgY29tcG9zdGVkOiB7IHR5cGU6IERhdGFUeXBlcy5CT09MRUFOLCBkZWZhdWx0VmFsdWU6IGZhbHNlLCBhbGxvd051bGw6IGZhbHNlIH0sXG4gICAgYW5hbHlzaXNBdmFpbGFibGU6IHtcbiAgICAgICAgdHlwZTogRGF0YVR5cGVzLkJPT0xFQU4sXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogZmFsc2UsXG4gICAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgfSxcbiAgICBsb2dpc3RpY3NDb21tZW50czogeyB0eXBlOiBEYXRhVHlwZXMuVEVYVCB9LFxufTtcbmV4cG9ydCBjbGFzcyBSZXF1ZXN0IGV4dGVuZHMgTW9kZWwge1xufVxuUmVxdWVzdC5pbml0KE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgY29tbW9uUHJvcGVydGllcyksIHsgZGVsaXZlcnlSZXF1aXJlZDoge1xuICAgICAgICB0eXBlOiBEYXRhVHlwZXMuQk9PTEVBTixcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBmYWxzZSxcbiAgICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICB9LCBhcHBsaWNhdGlvblJlcXVpcmVkOiB7XG4gICAgICAgIHR5cGU6IERhdGFUeXBlcy5CT09MRUFOLFxuICAgICAgICBkZWZhdWx0VmFsdWU6IGZhbHNlLFxuICAgICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgIH0gfSksIHtcbiAgICBzZXF1ZWxpemUsXG4gICAgbW9kZWxOYW1lOiAncmVxdWVzdCcsXG59KTtcbmV4cG9ydCBjbGFzcyBNYXRlcmlhbCBleHRlbmRzIE1vZGVsIHtcbn1cbk1hdGVyaWFsLmluaXQoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBjb21tb25Qcm9wZXJ0aWVzKSwgeyBkZWxpdmVyeUF2YWlsYWJsZToge1xuICAgICAgICB0eXBlOiBEYXRhVHlwZXMuQk9PTEVBTixcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBmYWxzZSxcbiAgICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICB9LCBhcHBsaWNhdGlvbkF2YWlsYWJsZToge1xuICAgICAgICB0eXBlOiBEYXRhVHlwZXMuQk9PTEVBTixcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBmYWxzZSxcbiAgICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICB9IH0pLCB7XG4gICAgc2VxdWVsaXplLFxuICAgIG1vZGVsTmFtZTogJ21hdGVyaWFsJyxcbn0pO1xuc2VxdWVsaXplLnN5bmMoeyBmb3JjZTogdHJ1ZSB9KS50aGVuKCgpID0+IHtcbiAgICBzZWVkLm1hdGVyaWFscy5mb3JFYWNoKChkYXRhKSA9PiB7XG4gICAgICAgIE1hdGVyaWFsLmNyZWF0ZShkYXRhKTtcbiAgICB9KTtcbiAgICBzZWVkLnJlcXVlc3RzLmZvckVhY2goKGRhdGEpID0+IHtcbiAgICAgICAgUmVxdWVzdC5jcmVhdGUoZGF0YSk7XG4gICAgfSk7XG59KTtcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IGJvZHlQYXJzZXIgZnJvbSAnYm9keS1wYXJzZXInO1xuaW1wb3J0IGNvcnMgZnJvbSAnY29ycyc7XG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCB7IFJlcXVlc3QsIE1hdGVyaWFsIH0gZnJvbSAnLi9kYic7XG5jb25zdCBhcHAgPSBleHByZXNzKCk7XG5jb25zdCBwb3J0ID0gODA4MDtcbmFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpO1xuYXBwLnVzZShjb3JzKCkpO1xuYXBwLmdldCgnL3JlcXVlc3RzJywgKHJlcSwgcmVzKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBsZXQgbGltaXQgPSBwYXJzZUludChyZXEucGFyYW1zLmxpbWl0KSB8fCAyMDtcbiAgICBsZXQgb2Zmc2V0ID0gcGFyc2VJbnQocmVxLnBhcmFtcy5vZmZzZXQpIHx8IDA7XG4gICAgY29uc3QgcmVxdWVzdHMgPSB5aWVsZCBSZXF1ZXN0LmZpbmRBbGwoeyBsaW1pdCwgb2Zmc2V0IH0pO1xuICAgIHJlcy5zZW5kKHJlcXVlc3RzKTtcbn0pKTtcbmFwcC5nZXQoJy9yZXF1ZXN0cy86cmVxdWVzdElkJywgKHJlcSwgcmVzKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zdCByZXF1ZXN0ID0geWllbGQgUmVxdWVzdC5maW5kQnlQayhyZXEucGFyYW1zLnJlcXVlc3RJZCk7XG4gICAgcmVzLnNlbmQocmVxdWVzdCk7XG59KSk7XG5hcHAucG9zdCgnL3JlcXVlc3RzJywgKHJlcSwgcmVzKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zdCByZXF1ZXN0ID0geWllbGQgUmVxdWVzdC5jcmVhdGUoT2JqZWN0LmFzc2lnbih7fSwgcmVxLmJvZHkpKTtcbiAgICByZXMuc2VuZChyZXF1ZXN0KTtcbn0pKTtcbmFwcC5nZXQoJy9tYXRlcmlhbHMnLCAocmVxLCByZXMpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGxldCBsaW1pdCA9IHBhcnNlSW50KHJlcS5wYXJhbXMubGltaXQpIHx8IDIwO1xuICAgIGxldCBvZmZzZXQgPSBwYXJzZUludChyZXEucGFyYW1zLm9mZnNldCkgfHwgMDtcbiAgICBjb25zdCBtYXRlcmlhbHMgPSB5aWVsZCBNYXRlcmlhbC5maW5kQWxsKHsgbGltaXQsIG9mZnNldCB9KTtcbiAgICByZXMuc2VuZChtYXRlcmlhbHMpO1xufSkpO1xuYXBwLmdldCgnL21hdGVyaWFscy86bWF0ZXJpYWxJZCcsIChyZXEsIHJlcykgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgY29uc3QgbWF0ZXJpYWwgPSB5aWVsZCBNYXRlcmlhbC5maW5kQnlQayhyZXEucGFyYW1zLm1hdGVyaWFsSWQpO1xuICAgIHJlcy5zZW5kKG1hdGVyaWFsKTtcbn0pKTtcbmFwcC5wb3N0KCcvbWF0ZXJpYWxzJywgKHJlcSwgcmVzKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zdCBtYXRlcmlhbCA9IHlpZWxkIE1hdGVyaWFsLmNyZWF0ZShPYmplY3QuYXNzaWduKHt9LCByZXEuYm9keSkpO1xuICAgIHJlcy5zZW5kKG1hdGVyaWFsKTtcbn0pKTtcbmFwcC5saXN0ZW4ocG9ydCwgKCkgPT4gY29uc29sZS5sb2coYEFwcCBsaXN0ZW5pbmcgb24gcG9ydCAke3BvcnR9IWApKTtcbiIsImV4cG9ydCBjb25zdCBtYXRlcmlhbHMgPSBbXG4gICAge1xuICAgICAgICBmaXJzdE5hbWU6ICdSb24nLFxuICAgICAgICBsYXN0TmFtZTogJ1N3YW5zb24nLFxuICAgICAgICBlbWFpbDogJ3Jvbi5zd2Fuc29uQGdtYWlsLmNvbScsXG4gICAgICAgIHBob25lOiAnNDUyLTEyMy0yMzk0JyxcbiAgICAgICAgYWRkcmVzczogJzE5NDAgTWFpbiBTdC4nLFxuICAgICAgICBjaXR5OiAnV29vZHN0b2NrJyxcbiAgICAgICAgcG9zdGFsOiAnTTZHIDNUNicsXG4gICAgICAgIG1hbnVyZVR5cGU6ICdzd2luZScsXG4gICAgICAgIHF1YW50aXR5OiAnNTAnLFxuICAgICAgICBvcmdhbmljU3lzdGVtOiB0cnVlLFxuICAgICAgICBjb21wb3N0ZWQ6IGZhbHNlLFxuICAgICAgICBhbmFseXNpc0F2YWlsYWJsZTogZmFsc2UsXG4gICAgICAgIGxvZ2lzdGljc0NvbW1lbnRzOiBudWxsLFxuICAgICAgICBkZWxpdmVyeUF2YWlsYWJsZTogZmFsc2UsXG4gICAgICAgIGFwcGxpY2F0aW9uQXZhaWxhYmxlOiBmYWxzZSxcbiAgICAgICAgY3JlYXRlZEF0OiBuZXcgRGF0ZSgnRGVjIDE1IDIwMTknKSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgZmlyc3ROYW1lOiAnQW15JyxcbiAgICAgICAgbGFzdE5hbWU6ICdSZWVkJyxcbiAgICAgICAgZW1haWw6ICdhbXkucmVlZEBnbWFpbC5jb20nLFxuICAgICAgICBwaG9uZTogJzI5My0xNTgtMjAxOCcsXG4gICAgICAgIGFkZHJlc3M6ICcyMDEgQXNodG9uIEF2ZS4nLFxuICAgICAgICBjaXR5OiAnVGhhbWVzZm9yZCcsXG4gICAgICAgIHBvc3RhbDogJ1UwUyAzSjInLFxuICAgICAgICBtYW51cmVUeXBlOiAnY293JyxcbiAgICAgICAgcXVhbnRpdHk6ICcxNTAnLFxuICAgICAgICBvcmdhbmljU3lzdGVtOiBmYWxzZSxcbiAgICAgICAgY29tcG9zdGVkOiBmYWxzZSxcbiAgICAgICAgYW5hbHlzaXNBdmFpbGFibGU6IHRydWUsXG4gICAgICAgIGxvZ2lzdGljc0NvbW1lbnRzOiBudWxsLFxuICAgICAgICBkZWxpdmVyeUF2YWlsYWJsZTogdHJ1ZSxcbiAgICAgICAgYXBwbGljYXRpb25BdmFpbGFibGU6IHRydWUsXG4gICAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoJ0phbiAwMSAyMDIwJyksXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGZpcnN0TmFtZTogJ1BoaWwnLFxuICAgICAgICBsYXN0TmFtZTogJ1dpbHRvbicsXG4gICAgICAgIGVtYWlsOiAncGhpbC53aWx0b25AZ21haWwuY29tJyxcbiAgICAgICAgcGhvbmU6ICc5MjgtOTI3LTQyODQnLFxuICAgICAgICBhZGRyZXNzOiAnMTAwIEZvbHNvbSBTdC4nLFxuICAgICAgICBjaXR5OiAnQmVsbW9udCcsXG4gICAgICAgIHBvc3RhbDogJ04wUCA0STEnLFxuICAgICAgICBtYW51cmVUeXBlOiAnY293JyxcbiAgICAgICAgcXVhbnRpdHk6ICc3MDAnLFxuICAgICAgICBvcmdhbmljU3lzdGVtOiB0cnVlLFxuICAgICAgICBjb21wb3N0ZWQ6IGZhbHNlLFxuICAgICAgICBhbmFseXNpc0F2YWlsYWJsZTogZmFsc2UsXG4gICAgICAgIGxvZ2lzdGljc0NvbW1lbnRzOiAnT25seSBhdmFpbGFibGUgdW50aWwgU3ByaW5ndGltZScsXG4gICAgICAgIGRlbGl2ZXJ5QXZhaWxhYmxlOiBmYWxzZSxcbiAgICAgICAgYXBwbGljYXRpb25BdmFpbGFibGU6IGZhbHNlLFxuICAgICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKCdKYW4gMTEgMjAyMCcpLFxuICAgIH0sXG5dO1xuZXhwb3J0IGNvbnN0IHJlcXVlc3RzID0gW1xuICAgIHtcbiAgICAgICAgZmlyc3ROYW1lOiAnRWxsaW90JyxcbiAgICAgICAgbGFzdE5hbWU6ICdSaG9kZXMnLFxuICAgICAgICBlbWFpbDogJ2VsbGlvdC5yaG9kZXNAZ21haWwuY29tJyxcbiAgICAgICAgcGhvbmU6ICc4MjktOTI4LTIxNzInLFxuICAgICAgICBhZGRyZXNzOiAnMTk0MCBNYWluIFN0LicsXG4gICAgICAgIGNpdHk6ICdXb29kc3RvY2snLFxuICAgICAgICBwb3N0YWw6ICdNNkcgM1Q2JyxcbiAgICAgICAgbWFudXJlVHlwZTogJ3N3aW5lJyxcbiAgICAgICAgcXVhbnRpdHk6ICc1MCcsXG4gICAgICAgIG9yZ2FuaWNTeXN0ZW06IHRydWUsXG4gICAgICAgIGNvbXBvc3RlZDogZmFsc2UsXG4gICAgICAgIGFuYWx5c2lzQXZhaWxhYmxlOiBmYWxzZSxcbiAgICAgICAgbG9naXN0aWNzQ29tbWVudHM6IG51bGwsXG4gICAgICAgIGRlbGl2ZXJ5QXZhaWxhYmxlOiBmYWxzZSxcbiAgICAgICAgYXBwbGljYXRpb25BdmFpbGFibGU6IGZhbHNlLFxuICAgICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKCdKYW4gMDMgMjAyMCcpLFxuICAgIH0sXG4gICAge1xuICAgICAgICBmaXJzdE5hbWU6ICdKYWtlJyxcbiAgICAgICAgbGFzdE5hbWU6ICdTbG9hbicsXG4gICAgICAgIGVtYWlsOiAnamFrZS5zbG9hbkBnbWFpbC5jb20nLFxuICAgICAgICBwaG9uZTogJzgyOS05MjgtMjE3MicsXG4gICAgICAgIGFkZHJlc3M6ICcxOTQwIE1haW4gU3QuJyxcbiAgICAgICAgY2l0eTogJ1dvb2RzdG9jaycsXG4gICAgICAgIHBvc3RhbDogJ002RyAzVDYnLFxuICAgICAgICBtYW51cmVUeXBlOiAnc3dpbmUnLFxuICAgICAgICBxdWFudGl0eTogJzUwJyxcbiAgICAgICAgb3JnYW5pY1N5c3RlbTogdHJ1ZSxcbiAgICAgICAgY29tcG9zdGVkOiBmYWxzZSxcbiAgICAgICAgYW5hbHlzaXNBdmFpbGFibGU6IGZhbHNlLFxuICAgICAgICBsb2dpc3RpY3NDb21tZW50czogbnVsbCxcbiAgICAgICAgZGVsaXZlcnlBdmFpbGFibGU6IGZhbHNlLFxuICAgICAgICBhcHBsaWNhdGlvbkF2YWlsYWJsZTogZmFsc2UsXG4gICAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoJ0phbiAwOSAyMDIwJyksXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGZpcnN0TmFtZTogJ1JvYicsXG4gICAgICAgIGxhc3ROYW1lOiAnRm9zdGVyJyxcbiAgICAgICAgZW1haWw6ICdyb2IuZm9zdGVyQGdtYWlsLmNvbScsXG4gICAgICAgIHBob25lOiAnODI5LTkyOC0yMTcyJyxcbiAgICAgICAgYWRkcmVzczogJzE5NDAgTWFpbiBTdC4nLFxuICAgICAgICBjaXR5OiAnV29vZHN0b2NrJyxcbiAgICAgICAgcG9zdGFsOiAnTTZHIDNUNicsXG4gICAgICAgIG1hbnVyZVR5cGU6ICdzd2luZScsXG4gICAgICAgIHF1YW50aXR5OiAnNTAnLFxuICAgICAgICBvcmdhbmljU3lzdGVtOiB0cnVlLFxuICAgICAgICBjb21wb3N0ZWQ6IGZhbHNlLFxuICAgICAgICBhbmFseXNpc0F2YWlsYWJsZTogZmFsc2UsXG4gICAgICAgIGxvZ2lzdGljc0NvbW1lbnRzOiBudWxsLFxuICAgICAgICBkZWxpdmVyeUF2YWlsYWJsZTogZmFsc2UsXG4gICAgICAgIGFwcGxpY2F0aW9uQXZhaWxhYmxlOiBmYWxzZSxcbiAgICAgICAgY3JlYXRlZEF0OiBuZXcgRGF0ZSgnSmFuIDEyIDIwMjAnKSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgZmlyc3ROYW1lOiAnSmFuZScsXG4gICAgICAgIGxhc3ROYW1lOiAnRmluY2gnLFxuICAgICAgICBlbWFpbDogJ2phbmUuZmluY2hAZ21haWwuY29tJyxcbiAgICAgICAgcGhvbmU6ICc4MjktOTI4LTIxNzInLFxuICAgICAgICBhZGRyZXNzOiAnMTk0MCBNYWluIFN0LicsXG4gICAgICAgIGNpdHk6ICdXb29kc3RvY2snLFxuICAgICAgICBwb3N0YWw6ICdNNkcgM1Q2JyxcbiAgICAgICAgbWFudXJlVHlwZTogJ3N3aW5lJyxcbiAgICAgICAgcXVhbnRpdHk6ICc1MCcsXG4gICAgICAgIG9yZ2FuaWNTeXN0ZW06IHRydWUsXG4gICAgICAgIGNvbXBvc3RlZDogZmFsc2UsXG4gICAgICAgIGFuYWx5c2lzQXZhaWxhYmxlOiBmYWxzZSxcbiAgICAgICAgbG9naXN0aWNzQ29tbWVudHM6IG51bGwsXG4gICAgICAgIGRlbGl2ZXJ5QXZhaWxhYmxlOiBmYWxzZSxcbiAgICAgICAgYXBwbGljYXRpb25BdmFpbGFibGU6IGZhbHNlLFxuICAgICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKCdKYW4gMTUgMjAyMCcpLFxuICAgIH0sXG4gICAge1xuICAgICAgICBmaXJzdE5hbWU6ICdFcmljJyxcbiAgICAgICAgbGFzdE5hbWU6ICdLbm9wZScsXG4gICAgICAgIGVtYWlsOiAnZXJpYy5rbm9wZUBnbWFpbC5jb20nLFxuICAgICAgICBwaG9uZTogJzgyOS05MjgtMjE3MicsXG4gICAgICAgIGFkZHJlc3M6ICcxOTQwIE1haW4gU3QuJyxcbiAgICAgICAgY2l0eTogJ1dvb2RzdG9jaycsXG4gICAgICAgIHBvc3RhbDogJ002RyAzVDYnLFxuICAgICAgICBtYW51cmVUeXBlOiAnc3dpbmUnLFxuICAgICAgICBxdWFudGl0eTogJzUwJyxcbiAgICAgICAgb3JnYW5pY1N5c3RlbTogdHJ1ZSxcbiAgICAgICAgY29tcG9zdGVkOiBmYWxzZSxcbiAgICAgICAgYW5hbHlzaXNBdmFpbGFibGU6IGZhbHNlLFxuICAgICAgICBsb2dpc3RpY3NDb21tZW50czogbnVsbCxcbiAgICAgICAgZGVsaXZlcnlBdmFpbGFibGU6IGZhbHNlLFxuICAgICAgICBhcHBsaWNhdGlvbkF2YWlsYWJsZTogZmFsc2UsXG4gICAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoJ0phbiAzMSAyMDIwJyksXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGZpcnN0TmFtZTogJ0pvaG4nLFxuICAgICAgICBsYXN0TmFtZTogJ0VsbGlvdCcsXG4gICAgICAgIGVtYWlsOiAnam9obi5lbGxpb3RAZ21haWwuY29tJyxcbiAgICAgICAgcGhvbmU6ICc4MjktOTI4LTIxNzInLFxuICAgICAgICBhZGRyZXNzOiAnMTk0MCBNYWluIFN0LicsXG4gICAgICAgIGNpdHk6ICdXb29kc3RvY2snLFxuICAgICAgICBwb3N0YWw6ICdNNkcgM1Q2JyxcbiAgICAgICAgbWFudXJlVHlwZTogJ3N3aW5lJyxcbiAgICAgICAgcXVhbnRpdHk6ICc1MCcsXG4gICAgICAgIG9yZ2FuaWNTeXN0ZW06IHRydWUsXG4gICAgICAgIGNvbXBvc3RlZDogZmFsc2UsXG4gICAgICAgIGFuYWx5c2lzQXZhaWxhYmxlOiBmYWxzZSxcbiAgICAgICAgbG9naXN0aWNzQ29tbWVudHM6IG51bGwsXG4gICAgICAgIGRlbGl2ZXJ5QXZhaWxhYmxlOiBmYWxzZSxcbiAgICAgICAgYXBwbGljYXRpb25BdmFpbGFibGU6IGZhbHNlLFxuICAgICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKCdGZWIgMDMgMjAyMCcpLFxuICAgIH0sXG4gICAge1xuICAgICAgICBmaXJzdE5hbWU6ICdBbm4nLFxuICAgICAgICBsYXN0TmFtZTogJ0hhcnJpcycsXG4gICAgICAgIGVtYWlsOiAnYW5uLmhhcnJpc0BnbWFpbC5jb20nLFxuICAgICAgICBwaG9uZTogJzgyOS05MjgtMjE3MicsXG4gICAgICAgIGFkZHJlc3M6ICcxOTQwIE1haW4gU3QuJyxcbiAgICAgICAgY2l0eTogJ1dvb2RzdG9jaycsXG4gICAgICAgIHBvc3RhbDogJ002RyAzVDYnLFxuICAgICAgICBtYW51cmVUeXBlOiAnc3dpbmUnLFxuICAgICAgICBxdWFudGl0eTogJzUwJyxcbiAgICAgICAgb3JnYW5pY1N5c3RlbTogdHJ1ZSxcbiAgICAgICAgY29tcG9zdGVkOiBmYWxzZSxcbiAgICAgICAgYW5hbHlzaXNBdmFpbGFibGU6IGZhbHNlLFxuICAgICAgICBsb2dpc3RpY3NDb21tZW50czogbnVsbCxcbiAgICAgICAgZGVsaXZlcnlBdmFpbGFibGU6IGZhbHNlLFxuICAgICAgICBhcHBsaWNhdGlvbkF2YWlsYWJsZTogZmFsc2UsXG4gICAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoJ0ZlYiAwNCAyMDIwJyksXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGZpcnN0TmFtZTogJ01hcnknLFxuICAgICAgICBsYXN0TmFtZTogJ0dyZWVuJyxcbiAgICAgICAgZW1haWw6ICdtYXJ5LmdyZWVuQGdtYWlsLmNvbScsXG4gICAgICAgIHBob25lOiAnODI5LTkyOC0yMTcyJyxcbiAgICAgICAgYWRkcmVzczogJzE5NDAgTWFpbiBTdC4nLFxuICAgICAgICBjaXR5OiAnV29vZHN0b2NrJyxcbiAgICAgICAgcG9zdGFsOiAnTTZHIDNUNicsXG4gICAgICAgIG1hbnVyZVR5cGU6ICdzd2luZScsXG4gICAgICAgIHF1YW50aXR5OiAnNTAnLFxuICAgICAgICBvcmdhbmljU3lzdGVtOiB0cnVlLFxuICAgICAgICBjb21wb3N0ZWQ6IGZhbHNlLFxuICAgICAgICBhbmFseXNpc0F2YWlsYWJsZTogZmFsc2UsXG4gICAgICAgIGxvZ2lzdGljc0NvbW1lbnRzOiBudWxsLFxuICAgICAgICBkZWxpdmVyeUF2YWlsYWJsZTogZmFsc2UsXG4gICAgICAgIGFwcGxpY2F0aW9uQXZhaWxhYmxlOiBmYWxzZSxcbiAgICAgICAgY3JlYXRlZEF0OiBuZXcgRGF0ZSgnRmViIDA2IDIwMjAnKSxcbiAgICB9LFxuXTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJvZHktcGFyc2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZXF1ZWxpemVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==