webpackHotUpdate("app",{

/***/ "./client/components/Header.js":
/*!*************************************!*\
  !*** ./client/components/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "../node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();






var Header = function Header(_ref) {
  var loggedIn = _ref.loggedIn;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    'div',
    null,
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
      { to: '/' },
      'Homed'
    ),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
      { to: '/about' },
      'About'
    ),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
      { to: '/contact' },
      'Contact'
    ),
    loggedIn && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
      { to: '/secret' },
      'Secret'
    )
  );
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    loggedIn: state.loggedIn
  };
};

Header.propTypes = {
  loggedIn: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool.isRequired
};

var _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(Header);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "../node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "../node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Header, 'Header', '/Users/ankushsaini/Public/react-base-setup/src/client/components/Header.js');
  reactHotLoader.register(mapStateToProps, 'mapStateToProps', '/Users/ankushsaini/Public/react-base-setup/src/client/components/Header.js');
  reactHotLoader.register(_default, 'default', '/Users/ankushsaini/Public/react-base-setup/src/client/components/Header.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})