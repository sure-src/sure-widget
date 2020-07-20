(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["SureWidget"] = factory();
	else
		root["SureWidget"] = factory();
})(window, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/lib/styles/index.styl
var styles = __webpack_require__(0);

// CONCATENATED MODULE: ./src/lib/core/SureWidget.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SureWidget = /*#__PURE__*/function () {
  function SureWidget(orgId) {
    var _this = this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      openOnInit: true
    };

    _classCallCheck(this, SureWidget);

    var defaultOptions = {
      openOnInit: true
    };
    this.options = _objectSpread(_objectSpread({}, defaultOptions), options);
    this.origin = location.origin;
    this.widgetOrigin = 'https://sure.so';
    this.widgetQuery = "origin=".concat(this.origin, "&orgId=").concat(orgId);
    this.widgetHomeUrl = "".concat(this.widgetOrigin, "/widget?").concat(this.widgetQuery);
    this.elements = {};
    this.iframeOnLoad = null;

    if (this.options.openOnInit) {
      this.open();
    }

    window.addEventListener('message', function (event) {
      if (event.origin !== _this.widgetOrigin) {
        return;
      }

      _this.onIframeMessage(event);
    });
  }

  _createClass(SureWidget, [{
    key: "onIframeMessage",
    value: function onIframeMessage(event) {
      switch (event.data) {
        case 'widget-checkout':
          this.elements.container.classList.add('f-interacted');
          break;

        case 'widget-close':
          this.elements.container.classList.remove('f-interacted');
          break;
      }
    }
  }, {
    key: "open",
    value: function open() {
      if (!this.elements.container) {
        this.createWidget();
      }

      this.elements.container.classList.add('f-opened');
    }
  }, {
    key: "close",
    value: function close() {
      var remove = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (this.elements.container) {
        this.elements.container.classList.remove('f-opened');
        this.elements.container.classList.add('f-closed');

        if (remove) {
          document.body.removeChild(this.elements.container);
          this.elements.container = null;
        }
      }
    }
  }, {
    key: "createWidget",
    value: function createWidget() {
      this.createContainer(true).createIframe(this.widgetHomeUrl, true);
    }
  }, {
    key: "createIframe",
    value: function createIframe(src) {
      var append = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      this.elements.iframe = document.createElement('iframe');
      this.elements.iframe.setAttribute('class', 'sure-widget__iframe');
      this.elements.iframe.setAttribute('allow', 'payment'); // this.elements.iframe.style.display = 'none';

      this.elements.iframe.src = src;
      this.bindIframeEvents();

      if (append) {
        if (this.elements.container) {
          this.elements.container.innerHTML = '';
          this.elements.container.appendChild(this.elements.iframe);
        }
      }

      return this;
    }
  }, {
    key: "createContainer",
    value: function createContainer() {
      var append = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var container = document.createElement('div');
      container.setAttribute('class', 'sure-widget');
      container.setAttribute('id', 'sure-widget');

      if (append) {
        var exist = document.body.querySelector('#sure-widget');

        if (exist) {
          document.body.removeChild(exist);
        }

        document.body.appendChild(container);
      }

      this.elements.container = container;
      return this;
    }
  }, {
    key: "bindIframeEvents",
    value: function bindIframeEvents() {
      var _this2 = this;

      if (this.elements.iframe) {
        this.iframeOnLoad = function () {
          _this2.elements.iframe.removeEventListener('load', _this2.iframeOnLoad);

          _this2.elements.container.classList.add('f-loaded');

          _this2.elements.iframe.classList.add('f-loaded');
        };

        this.elements.iframe.addEventListener('load', this.iframeOnLoad);
      }

      return this;
    }
  }]);

  return SureWidget;
}();


// CONCATENATED MODULE: ./src/lib/index.js


/* harmony default export */ var lib = __webpack_exports__["default"] = (SureWidget);

/***/ })
/******/ ]);
});