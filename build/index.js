(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("moment"));
	else if(typeof define === 'function' && define.amd)
		define("SamDateHandler", ["moment"], factory);
	else if(typeof exports === 'object')
		exports["SamDateHandler"] = factory(require("moment"));
	else
		root["SamDateHandler"] = factory(root["moment"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["convertDateToNewDate"] = convertDateToNewDate;
/* harmony export (immutable) */ __webpack_exports__["newDateWithGMT"] = newDateWithGMT;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);


function convertDateToNewDate(date) {
    var offset = __WEBPACK_IMPORTED_MODULE_0_moment___default()(date);
    var momentDate = __WEBPACK_IMPORTED_MODULE_0_moment___default()(date).utcOffset(offset._tzm);
    return new Date(momentDate.get("year"), momentDate.get("month"), momentDate.get("date"), momentDate.get("hour"), momentDate.get("minute"), momentDate.get("second"));
}

function newDateWithGMT(offset, date, localTimeZone) {
    var dateOffset = __WEBPACK_IMPORTED_MODULE_0_moment___default()(date).format();
    if (localTimeZone) {
        offset = applyDayLightSaving(date, offset, localTimeZone);
    }
    var timeZoneHours = parseInt(offset / 60);
    var timeZoneMinute = Math.abs(offset % 60);
    var sinal = "-";
    if (timeZoneHours >= 0) {
        sinal = "+";
    }
    var minute = convertTimeZineToGMTMinute(timeZoneMinute);
    var hour = convertTimeZineToGMTHour(timeZoneHours);
    return dateOffset.substring(0, 19) + sinal + hour + ":" + minute;
}

function applyDayLightSaving(date, offset, localTimeZone) {
    if (localTimeZone.useDaylightSaving) {
        if (__WEBPACK_IMPORTED_MODULE_0_moment___default()(localTimeZone.daylightSavingStartDate).isSameOrBefore(date) && __WEBPACK_IMPORTED_MODULE_0_moment___default()(localTimeZone.daylightSavingFinishDate).isSameOrAfter(date)) {
            var offsetDaylightSaving = 60;
            if (localTimeZone.offsetDaylightSaving === 2) {
                return offset + offsetDaylightSaving;
            }
            if (localTimeZone.offsetDaylightSaving === 1) {
                return offset - offsetDaylightSaving;
            }
        }
    }
    return offset;
}

function convertTimeZineToGMTMinute(timeZoneMinuteEnd) {
    if (timeZoneMinuteEnd < 10) {
        return "0" + timeZoneMinuteEnd;
    } else {
        return timeZoneMinuteEnd;
    }
}

function convertTimeZineToGMTHour(timeZoneHours) {
    if (timeZoneHours >= 0) {
        if (timeZoneHours < 10) {
            return "0" + timeZoneHours;
        } else {
            return timeZoneHours;
        }
    } else {
        if (timeZoneHours > -10) {
            timeZoneHours = timeZoneHours * -1;
            return "0" + timeZoneHours;
        } else {
            return timeZoneHours;
        }
    }
}

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ })
/******/ ]);
});