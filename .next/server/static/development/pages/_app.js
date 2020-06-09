module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@shopify/polaris/locales/en.json":
/*!*******************************************************!*\
  !*** ./node_modules/@shopify/polaris/locales/en.json ***!
  \*******************************************************/
/*! exports provided: Polaris, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"Polaris\":{\"Avatar\":{\"label\":\"Avatar\",\"labelWithInitials\":\"Avatar with initials {initials}\"},\"Autocomplete\":{\"spinnerAccessibilityLabel\":\"Loading\"},\"Badge\":{\"PROGRESS_LABELS\":{\"incomplete\":\"Incomplete\",\"partiallyComplete\":\"Partially complete\",\"complete\":\"Complete\"},\"STATUS_LABELS\":{\"info\":\"Info\",\"success\":\"Success\",\"warning\":\"Warning\",\"critical\":\"Critical\",\"attention\":\"Attention\",\"new\":\"New\"}},\"Button\":{\"spinnerAccessibilityLabel\":\"Loading\",\"connectedDisclosureAccessibilityLabel\":\"Related actions\"},\"Common\":{\"checkbox\":\"checkbox\",\"undo\":\"Undo\",\"cancel\":\"Cancel\",\"newWindowAccessibilityHint\":\"(opens a new window)\",\"clear\":\"Clear\",\"close\":\"Close\",\"submit\":\"Submit\",\"more\":\"More\"},\"ContextualSaveBar\":{\"save\":\"Save\",\"discard\":\"Discard\"},\"DataTable\":{\"sortAccessibilityLabel\":\"sort {direction} by\",\"navAccessibilityLabel\":\"Scroll table {direction} one column\",\"totalsRowHeading\":\"Totals\",\"totalRowHeading\":\"Total\"},\"DatePicker\":{\"previousMonth\":\"Show previous month, {previousMonthName} {showPreviousYear}\",\"nextMonth\":\"Show next month, {nextMonth} {nextYear}\",\"today\":\"Today \",\"months\":{\"january\":\"January\",\"february\":\"February\",\"march\":\"March\",\"april\":\"April\",\"may\":\"May\",\"june\":\"June\",\"july\":\"July\",\"august\":\"August\",\"september\":\"September\",\"october\":\"October\",\"november\":\"November\",\"december\":\"December\"},\"daysAbbreviated\":{\"monday\":\"Mo\",\"tuesday\":\"Tu\",\"wednesday\":\"We\",\"thursday\":\"Th\",\"friday\":\"Fr\",\"saturday\":\"Sa\",\"sunday\":\"Su\"}},\"DiscardConfirmationModal\":{\"title\":\"Discard all unsaved changes\",\"message\":\"If you discard changes, you’ll delete any edits you made since you last saved.\",\"primaryAction\":\"Discard changes\",\"secondaryAction\":\"Continue editing\"},\"DropZone\":{\"overlayTextFile\":\"Drop file to upload\",\"overlayTextImage\":\"Drop image to upload\",\"errorOverlayTextFile\":\"File type is not valid\",\"errorOverlayTextImage\":\"Image type is not valid\",\"FileUpload\":{\"actionTitleFile\":\"Add file\",\"actionTitleImage\":\"Add image\",\"actionHintFile\":\"or drop files to upload\",\"actionHintImage\":\"or drop images to upload\",\"label\":\"Upload file\"}},\"EmptySearchResult\":{\"altText\":\"Empty search results\"},\"Frame\":{\"skipToContent\":\"Skip to content\",\"Navigation\":{\"closeMobileNavigationLabel\":\"Close navigation\"}},\"Icon\":{\"backdropWarning\":\"The {color} icon doesn’t accept backdrops. The icon colors that have backdrops are: {colorsWithBackDrops}\"},\"ActionMenu\":{\"RollupActions\":{\"rollupButton\":\"Actions\"}},\"Filters\":{\"moreFilters\":\"More filters\",\"moreFiltersWithCount\":\"More filters ({count})\",\"filter\":\"Filter {resourceName}\",\"noFiltersApplied\":\"No filters applied\",\"cancel\":\"Cancel\",\"done\":\"Done\",\"clearAllFilters\":\"Clear all filters\",\"clear\":\"Clear\",\"clearLabel\":\"Clear {filterName}\"},\"Modal\":{\"iFrameTitle\":\"body markup\",\"modalWarning\":\"These required properties are missing from Modal: {missingProps}\"},\"Pagination\":{\"previous\":\"Previous\",\"next\":\"Next\",\"pagination\":\"Pagination\"},\"ProgressBar\":{\"negativeWarningMessage\":\"Values passed to the progress prop shouldn’t be negative. Resetting {progress} to 0.\",\"exceedWarningMessage\":\"Values passed to the progress prop shouldn’t exceed 100. Setting {progress} to 100.\"},\"ResourceList\":{\"sortingLabel\":\"Sort by\",\"defaultItemSingular\":\"item\",\"defaultItemPlural\":\"items\",\"showing\":\"Showing {itemsCount} {resource}\",\"showingTotalCount\":\"Showing {itemsCount} of {totalItemsCount} {resource}\",\"loading\":\"Loading {resource}\",\"selected\":\"{selectedItemsCount} selected\",\"allItemsSelected\":\"All {itemsLength}+ {resourceNamePlural} in your store are selected.\",\"selectAllItems\":\"Select all {itemsLength}+ {resourceNamePlural} in your store\",\"emptySearchResultTitle\":\"No {resourceNamePlural} found\",\"emptySearchResultDescription\":\"Try changing the filters or search term\",\"selectButtonText\":\"Select\",\"a11yCheckboxDeselectAllSingle\":\"Deselect {resourceNameSingular}\",\"a11yCheckboxSelectAllSingle\":\"Select {resourceNameSingular}\",\"a11yCheckboxDeselectAllMultiple\":\"Deselect all {itemsLength} {resourceNamePlural}\",\"a11yCheckboxSelectAllMultiple\":\"Select all {itemsLength} {resourceNamePlural}\",\"ariaLiveSingular\":\"{itemsLength} item\",\"ariaLivePlural\":\"{itemsLength} items\",\"Item\":{\"actionsDropdownLabel\":\"Actions for {accessibilityLabel}\",\"actionsDropdown\":\"Actions dropdown\",\"viewItem\":\"View details for {itemName}\"},\"BulkActions\":{\"actionsActivatorLabel\":\"Actions\",\"moreActionsActivatorLabel\":\"More actions\",\"warningMessage\":\"To provide a better user experience. There should only be a maximum of {maxPromotedActions} promoted actions.\"},\"FilterCreator\":{\"filterButtonLabel\":\"Filter\",\"selectFilterKeyPlaceholder\":\"Select a filter…\",\"addFilterButtonLabel\":\"Add filter\",\"showAllWhere\":\"Show all {resourceNamePlural} where:\"},\"FilterControl\":{\"textFieldLabel\":\"Search {resourceNamePlural}\"},\"FilterValueSelector\":{\"selectFilterValuePlaceholder\":\"Select a filter…\"},\"DateSelector\":{\"dateFilterLabel\":\"Select a value\",\"dateValueLabel\":\"Date\",\"dateValueError\":\"Match YYYY-MM-DD format\",\"dateValuePlaceholder\":\"YYYY-MM-DD\",\"SelectOptions\":{\"PastWeek\":\"in the last week\",\"PastMonth\":\"in the last month\",\"PastQuarter\":\"in the last 3 months\",\"PastYear\":\"in the last year\",\"ComingWeek\":\"next week\",\"ComingMonth\":\"next month\",\"ComingQuarter\":\"in the next 3 months\",\"ComingYear\":\"in the next year\",\"OnOrBefore\":\"on or before\",\"OnOrAfter\":\"on or after\"},\"FilterLabelForValue\":{\"past_week\":\"in the last week\",\"past_month\":\"in the last month\",\"past_quarter\":\"in the last 3 months\",\"past_year\":\"in the last year\",\"coming_week\":\"next week\",\"coming_month\":\"next month\",\"coming_quarter\":\"in the next 3 months\",\"coming_year\":\"in the next year\",\"on_or_before\":\"before {date}\",\"on_or_after\":\"after {date}\"}}},\"SkeletonPage\":{\"loadingLabel\":\"Page loading\"},\"Spinner\":{\"warningMessage\":\"The color {color} is not meant to be used on {size} spinners. The colors available on large spinners are: {colors}\"},\"Tabs\":{\"toggleTabsLabel\":\"More tabs\"},\"Tag\":{\"ariaLabel\":\"Remove {children}\"},\"TextField\":{\"characterCount\":\"{count} characters\",\"characterCountWithMaxLength\":\"{count} of {limit} characters used\"},\"TopBar\":{\"toggleMenuLabel\":\"Toggle menu\",\"SearchField\":{\"clearButtonLabel\":\"Clear\",\"search\":\"Search\"}},\"MediaCard\":{\"popoverButton\":\"Actions\"},\"VideoThumbnail\":{\"playButtonA11yLabel\":{\"default\":\"Play video\",\"defaultWithDuration\":\"Play video of length {duration}\",\"duration\":{\"hours\":{\"other\":{\"only\":\"{hourCount} hours\",\"andMinutes\":\"{hourCount} hours and {minuteCount} minutes\",\"andMinute\":\"{hourCount} hours and {minuteCount} minute\",\"minutesAndSeconds\":\"{hourCount} hours, {minuteCount} minutes, and {secondCount} seconds\",\"minutesAndSecond\":\"{hourCount} hours, {minuteCount} minutes, and {secondCount} second\",\"minuteAndSeconds\":\"{hourCount} hours, {minuteCount} minute, and {secondCount} seconds\",\"minuteAndSecond\":\"{hourCount} hours, {minuteCount} minute, and {secondCount} second\",\"andSeconds\":\"{hourCount} hours and {secondCount} seconds\",\"andSecond\":\"{hourCount} hours and {secondCount} second\"},\"one\":{\"only\":\"{hourCount} hour\",\"andMinutes\":\"{hourCount} hour and {minuteCount} minutes\",\"andMinute\":\"{hourCount} hour and {minuteCount} minute\",\"minutesAndSeconds\":\"{hourCount} hour, {minuteCount} minutes, and {secondCount} seconds\",\"minutesAndSecond\":\"{hourCount} hour, {minuteCount} minutes, and {secondCount} second\",\"minuteAndSeconds\":\"{hourCount} hour, {minuteCount} minute, and {secondCount} seconds\",\"minuteAndSecond\":\"{hourCount} hour, {minuteCount} minute, and {secondCount} second\",\"andSeconds\":\"{hourCount} hour and {secondCount} seconds\",\"andSecond\":\"{hourCount} hour and {secondCount} second\"}},\"minutes\":{\"other\":{\"only\":\"{minuteCount} minutes\",\"andSeconds\":\"{minuteCount} minutes and {secondCount} seconds\",\"andSecond\":\"{minuteCount} minutes and {secondCount} second\"},\"one\":{\"only\":\"{minuteCount} minute\",\"andSeconds\":\"{minuteCount} minute and {secondCount} seconds\",\"andSecond\":\"{minuteCount} minute and {secondCount} second\"}},\"seconds\":{\"other\":\"{secondCount} seconds\",\"one\":\"{secondCount} second\"}}}}}}");

/***/ }),

/***/ "./node_modules/@shopify/polaris/styles.css":
/*!**************************************************!*\
  !*** ./node_modules/@shopify/polaris/styles.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn(`Warning: the \`Container\` in \`_app\` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated`);
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error(`Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated`);
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shopify/polaris-icons */ "@shopify/polaris-icons");
/* harmony import */ var _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shopify_polaris_locales_en_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shopify/polaris/locales/en.json */ "./node_modules/@shopify/polaris/locales/en.json");
var _shopify_polaris_locales_en_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! @shopify/polaris/locales/en.json */ "./node_modules/@shopify/polaris/locales/en.json", 1);
/* harmony import */ var _shopify_polaris_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shopify/polaris/styles.css */ "./node_modules/@shopify/polaris/styles.css");
/* harmony import */ var _shopify_polaris_styles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris_styles_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shopify/app-bridge-react */ "@shopify/app-bridge-react");
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! apollo-boost */ "apollo-boost");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! store-js */ "store-js");
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _shopify_app_bridge__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @shopify/app-bridge */ "@shopify/app-bridge");
/* harmony import */ var _shopify_app_bridge__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @shopify/app-bridge/actions */ "@shopify/app-bridge/actions");
/* harmony import */ var _shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_13__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















const client = new apollo_boost__WEBPACK_IMPORTED_MODULE_9___default.a({
  fetchOptions: {
    credentials: 'include'
  }
});
const app = Object(_shopify_app_bridge__WEBPACK_IMPORTED_MODULE_12__["createApp"])({
  apiKey: 'e4414e65bcc81be4c7eb5e153132934e',
  shopOrigin: js_cookie__WEBPACK_IMPORTED_MODULE_8___default.a.get("shopOrigin")
});

class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_1___default.a {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      isUserMenuOpen: false,
      toggleIsUserMenuOpen: false,
      mobileNavigationActive: false,
      userRole: store_js__WEBPACK_IMPORTED_MODULE_11___default.a.get('userRole'),
      firstName: store_js__WEBPACK_IMPORTED_MODULE_11___default.a.get('firstName') ? store_js__WEBPACK_IMPORTED_MODULE_11___default.a.get('firstName') : 'Guest',
      lastName: store_js__WEBPACK_IMPORTED_MODULE_11___default.a.get('lastName') ? store_js__WEBPACK_IMPORTED_MODULE_11___default.a.get('lastName') : ''
    });
  }

  handleNavigationToggle() {
    this.setState({
      mobileNavigationActive: !this.state.mobileNavigationActive
    });
    console.log('toggle navigation visibility ' + this.state.mobileNavigationActive);
  }

  toggleIsUserMenuOpen() {
    this.setState({
      isUserMenuOpen: !this.state.isUserMenuOpen
    });
    console.log(this.state.isUserMenuOpen);
  }

  render() {
    const shop = js_cookie__WEBPACK_IMPORTED_MODULE_8___default.a.get("shopOrigin");
    const redirect = _shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_13__["Redirect"].create(app);
    const {
      Component,
      pageProps
    } = this.props;
    const {
      isUserMenuOpen,
      mobileNavigationActive,
      firstName,
      lastName
    } = this.state;

    const userMenuMarkup = __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["TopBar"].UserMenu, {
      actions: [{
        items: [{
          content: 'Back to Shopify',
          icon: _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_4__["ArrowLeftMinor"]
        }]
      }, {
        items: [{
          content: 'Signout',
          onClick: () => {
            alert('sds');
            store_js__WEBPACK_IMPORTED_MODULE_11___default.a.set('userRole', '');
            redirect.dispatch(_shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_13__["Redirect"].Action.APP, '/');
          }
        }]
      }],
      name: firstName,
      detail: firstName + ' ' + lastName,
      initials: firstName.charAt(0).toUpperCase(),
      open: isUserMenuOpen,
      onToggle: () => this.toggleIsUserMenuOpen()
    });

    let menuitems = [];

    if (this.state.userRole == 'dropshipper') {
      menuitems = [{
        label: 'DropShipper Dashboard',
        icon: _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_4__["HomeMajorMonotone"],
        onClick: () => {}
      }, {
        label: 'Search Products',
        icon: _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_4__["SearchMajorMonotone"],
        onClick: () => {
          redirect.dispatch(_shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_13__["Redirect"].Action.APP, '/search');
        }
      }, {
        label: 'My Products',
        icon: _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_4__["ProductsMajorTwotone"],
        onClick: () => {
          redirect.dispatch(_shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_13__["Redirect"].Action.APP, '/my-products');
        }
      }, {
        label: 'Manage Orders',
        icon: _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_4__["DraftOrdersMajorMonotone"],
        onClick: () => {
          redirect.dispatch(_shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_13__["Redirect"].Action.APP, '/manage-orders');
        }
      }, {
        label: 'Pricing',
        icon: _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_4__["SettingsMajorMonotone"],
        onClick: () => {
          redirect.dispatch(_shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_13__["Redirect"].Action.APP, '/choose_plan');
        }
      }, {
        label: 'Settings',
        icon: _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_4__["SettingsMajorMonotone"],
        onClick: () => {
          redirect.dispatch(_shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_13__["Redirect"].Action.APP, '/settings');
        }
      }, {
        label: 'Signout',
        icon: _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_4__["CustomersMinor"],
        onClick: () => {
          store_js__WEBPACK_IMPORTED_MODULE_11___default.a.set('userRole', '');
          redirect.dispatch(_shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_13__["Redirect"].Action.APP, '/');
        }
      }];
    } else if (this.state.userRole == 'seller') {
      menuitems = [{
        label: 'Seller Dashboard',
        icon: _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_4__["HomeMajorMonotone"],
        url: '/'
      }, {
        label: 'Selling Products',
        icon: _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_4__["OrdersMajorTwotone"],
        onClick: () => {
          redirect.dispatch(_shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_13__["Redirect"].Action.APP, '/selling_products');
        }
      },, {
        label: 'Settings',
        icon: _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_4__["SettingsMajorMonotone"],
        onClick: () => {
          redirect.dispatch(_shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_13__["Redirect"].Action.APP, '/settings');
        }
      }, {
        label: 'Signout',
        icon: _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_4__["CustomersMinor"],
        onClick: () => {
          store_js__WEBPACK_IMPORTED_MODULE_11___default.a.set('userRole', '');
          redirect.dispatch(_shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_13__["Redirect"].Action.APP, '/');
        }
      }];
    } else {
      menuitems = [{
        label: 'SignIn',
        icon: _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_4__["CustomersMinor"],
        onClick: () => {
          redirect.dispatch(_shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_13__["Redirect"].Action.APP, '/');
        }
      }, {
        label: 'Signup',
        icon: _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_4__["CustomersMinor"],
        onClick: () => {
          redirect.dispatch(_shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_13__["Redirect"].Action.APP, '/signup');
        }
      }];
    }

    const navigationMarkup = __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Navigation"], {
      location: "/"
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Navigation"].Section, {
      items: [{
        label: 'Back to Shopify',
        icon: _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_4__["ArrowLeftMinor"]
      }]
    }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Navigation"].Section, {
      separator: true,
      title: "Dropshipper App",
      items: menuitems,
      action: {
        icon: _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_4__["ConversationMinor"],
        accessibilityLabel: 'Signout',
        onClick: () => {
          store_js__WEBPACK_IMPORTED_MODULE_11___default.a.set('userRole', '');
          store_js__WEBPACK_IMPORTED_MODULE_11___default.a.set('firstName', 'Guest');
          store_js__WEBPACK_IMPORTED_MODULE_11___default.a.set('lastName', '');
          store_js__WEBPACK_IMPORTED_MODULE_11___default.a.set('email', '');
          store_js__WEBPACK_IMPORTED_MODULE_11___default.a.set('username', '');
          store_js__WEBPACK_IMPORTED_MODULE_11___default.a.set('id', '');
          redirect.dispatch(_shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_13__["Redirect"].Action.APP, '/');
        }
      }
    }));

    const topBarMarkup = __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["TopBar"], {
      showNavigationToggle: true,
      userMenu: userMenuMarkup,
      onNavigationToggle: () => this.handleNavigationToggle()
    });

    const config = {
      apiKey: "e4414e65bcc81be4c7eb5e153132934e",
      shopOrigin: js_cookie__WEBPACK_IMPORTED_MODULE_8___default.a.get("shopOrigin"),
      forceRedirect: true
    };
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx("title", null, "dropshipper"), __jsx("meta", {
      charSet: "utf-8"
    })), __jsx(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_7__["Provider"], {
      config: config
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["AppProvider"], {
      i18n: _shopify_polaris_locales_en_json__WEBPACK_IMPORTED_MODULE_5__
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Frame"], {
      topBar: topBarMarkup,
      navigation: navigationMarkup,
      showMobileNavigation: mobileNavigationActive,
      onNavigationDismiss: () => this.handleNavigationToggle()
    }, __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_10__["ApolloProvider"], {
      client: client
    }, __jsx(Component, pageProps))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@shopify/app-bridge":
/*!**************************************!*\
  !*** external "@shopify/app-bridge" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@shopify/app-bridge");

/***/ }),

/***/ "@shopify/app-bridge-react":
/*!********************************************!*\
  !*** external "@shopify/app-bridge-react" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@shopify/app-bridge-react");

/***/ }),

/***/ "@shopify/app-bridge/actions":
/*!**********************************************!*\
  !*** external "@shopify/app-bridge/actions" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@shopify/app-bridge/actions");

/***/ }),

/***/ "@shopify/polaris":
/*!***********************************!*\
  !*** external "@shopify/polaris" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@shopify/polaris");

/***/ }),

/***/ "@shopify/polaris-icons":
/*!*****************************************!*\
  !*** external "@shopify/polaris-icons" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@shopify/polaris-icons");

/***/ }),

/***/ "apollo-boost":
/*!*******************************!*\
  !*** external "apollo-boost" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-boost");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "store-js":
/*!***************************!*\
  !*** external "store-js" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("store-js");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3BhZ2VzL19hcHAudHN4Iiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHNob3BpZnkvYXBwLWJyaWRnZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBzaG9waWZ5L2FwcC1icmlkZ2UtcmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2hvcGlmeS9hcHAtYnJpZGdlL2FjdGlvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2hvcGlmeS9wb2xhcmlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHNob3BpZnkvcG9sYXJpcy1pY29uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFwb2xsby1ib29zdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzLWNvb2tpZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYXBvbGxvXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3RvcmUtanNcIiJdLCJuYW1lcyI6WyJwYWdlUHJvcHMiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbXBvbmVudERpZENhdGNoIiwicmVuZGVyIiwiX19OX1NTRyIsInVybCIsImNyZWF0ZVVybCIsIkFwcCIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJhcHBHZXRJbml0aWFsUHJvcHMiLCJnZXRJbml0aWFsUHJvcHMiLCJ3YXJuQ29udGFpbmVyIiwiY29uc29sZSIsIndhcm5VcmwiLCJwIiwiYmFjayIsInJvdXRlciIsInB1c2giLCJwdXNoVG8iLCJwdXNoUm91dGUiLCJhcyIsInB1c2hVcmwiLCJyZXBsYWNlIiwicmVwbGFjZVRvIiwicmVwbGFjZVJvdXRlIiwicmVwbGFjZVVybCIsImNsaWVudCIsIkFwb2xsb0NsaWVudCIsImZldGNoT3B0aW9ucyIsImNyZWRlbnRpYWxzIiwiYXBwIiwiY3JlYXRlQXBwIiwiYXBpS2V5Iiwic2hvcE9yaWdpbiIsIkNvb2tpZXMiLCJnZXQiLCJNeUFwcCIsImlzVXNlck1lbnVPcGVuIiwidG9nZ2xlSXNVc2VyTWVudU9wZW4iLCJtb2JpbGVOYXZpZ2F0aW9uQWN0aXZlIiwidXNlclJvbGUiLCJzdG9yZSIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiaGFuZGxlTmF2aWdhdGlvblRvZ2dsZSIsInNldFN0YXRlIiwic3RhdGUiLCJsb2ciLCJzaG9wIiwicmVkaXJlY3QiLCJSZWRpcmVjdCIsImNyZWF0ZSIsInByb3BzIiwidXNlck1lbnVNYXJrdXAiLCJpdGVtcyIsImNvbnRlbnQiLCJpY29uIiwiQXJyb3dMZWZ0TWlub3IiLCJvbkNsaWNrIiwiYWxlcnQiLCJzZXQiLCJkaXNwYXRjaCIsIkFjdGlvbiIsIkFQUCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwibWVudWl0ZW1zIiwibGFiZWwiLCJIb21lTWFqb3JNb25vdG9uZSIsIlNlYXJjaE1ham9yTW9ub3RvbmUiLCJQcm9kdWN0c01ham9yVHdvdG9uZSIsIkRyYWZ0T3JkZXJzTWFqb3JNb25vdG9uZSIsIlNldHRpbmdzTWFqb3JNb25vdG9uZSIsIkN1c3RvbWVyc01pbm9yIiwiT3JkZXJzTWFqb3JUd290b25lIiwibmF2aWdhdGlvbk1hcmt1cCIsIkNvbnZlcnNhdGlvbk1pbm9yIiwiYWNjZXNzaWJpbGl0eUxhYmVsIiwidG9wQmFyTWFya3VwIiwiY29uZmlnIiwiQVBJX0tFWSIsImZvcmNlUmVk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QUFBMEQ4QyxtQkFBYSxFQUFFO0FBQXpFLEtBQWY7QUFFQSxXQUNFLE1BQUMsNENBQUQsQ0FBTyxRQUFQLFFBQ0UsTUFBQyxnREFBRCxRQUNFLG1DQURGLEVBRUU7QUFBTSxhQUFPLEVBQUM7QUFBZCxNQUZGLENBREYsRUFLRSxNQUFDLGtFQUFEO0FBQVUsWUFBTSxFQUFFRjtBQUFsQixPQUNBLE1BQUMsNERBQUQ7QUFBYyxVQUFJLEVBQUVHLDZEQUFZQTtBQUFoQyxPQUNBLE1BQUMsc0RBQUQ7QUFBTyxZQUFNLEVBQUVKLFlBQWY7QUFDQSxnQkFBVSxFQUFFSCxnQkFEWjtBQUVBLDBCQUFvQixFQUFFcEMsc0JBRnRCO0FBR0EseUJBQW1CLEVBQUUsTUFBSSxLQUFLSyxzQkFBTDtBQUh6QixPQUtBLE1BQUMsNERBQUQ7QUFBZ0IsWUFBTSxFQUFFbEI7QUFBeEIsT0FDSSxNQUFDLFNBQUQsRUFBZTNCLFNBQWYsQ0FESixDQUxBLENBREEsQ0FEQSxDQUxGLENBREY7QUFzQkQ7O0FBaFBxQjs7QUFrUFRxQyxvRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pRQSxnRDs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxxQyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9wYWdlcy9fYXBwJylcbiIsImltcG9ydCBSZWFjdCwgeyBFcnJvckluZm8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIGV4ZWNPbmNlLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGUsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJy4uL2NsaWVudC9yb3V0ZXInXG5cbmV4cG9ydCB7IEFwcEluaXRpYWxQcm9wcyB9XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHQgPSBBcHBDb250ZXh0VHlwZTxSb3V0ZXI+XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzPFAgPSB7fT4gPSBBcHBQcm9wc1R5cGU8Um91dGVyLCBQPlxuXG4vKipcbiAqIGBBcHBgIGNvbXBvbmVudCBpcyB1c2VkIGZvciBpbml0aWFsaXplIG9mIHBhZ2VzLiBJdCBhbGxvd3MgZm9yIG92ZXJ3cml0aW5nIGFuZCBmdWxsIGNvbnRyb2wgb2YgdGhlIGBwYWdlYCBpbml0aWFsaXphdGlvbi5cbiAqIFRoaXMgYWxsb3dzIGZvciBrZWVwaW5nIHN0YXRlIGJldHdlZW4gbmF2aWdhdGlvbiwgY3VzdG9tIGVycm9yIGhhbmRsaW5nLCBpbmplY3RpbmcgYWRkaXRpb25hbCBkYXRhLlxuICovXG5hc3luYyBmdW5jdGlvbiBhcHBHZXRJbml0aWFsUHJvcHMoe1xuICBDb21wb25lbnQsXG4gIGN0eCxcbn06IEFwcENvbnRleHQpOiBQcm9taXNlPEFwcEluaXRpYWxQcm9wcz4ge1xuICBjb25zdCBwYWdlUHJvcHMgPSBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgY3R4KVxuICByZXR1cm4geyBwYWdlUHJvcHMgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHA8UCA9IHt9LCBDUCA9IHt9LCBTID0ge30+IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFxuICBQICYgQXBwUHJvcHM8Q1A+LFxuICBTXG4+IHtcbiAgc3RhdGljIG9yaWdHZXRJbml0aWFsUHJvcHMgPSBhcHBHZXRJbml0aWFsUHJvcHNcbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyA9IGFwcEdldEluaXRpYWxQcm9wc1xuXG4gIC8vIEtlcHQgaGVyZSBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuXG4gIC8vIFdoZW4gc29tZW9uZSBlbmRlZCBBcHAgdGhleSBjb3VsZCBjYWxsIGBzdXBlci5jb21wb25lbnREaWRDYXRjaGAuXG4gIC8vIEBkZXByZWNhdGVkIFRoaXMgbWV0aG9kIGlzIG5vIGxvbmdlciBuZWVkZWQuIEVycm9ycyBhcmUgY2F1Z2h0IGF0IHRoZSB0b3AgbGV2ZWxcbiAgY29tcG9uZW50RGlkQ2F0Y2goZXJyb3I6IEVycm9yLCBfZXJyb3JJbmZvOiBFcnJvckluZm8pOiB2b2lkIHtcbiAgICB0aHJvdyBlcnJvclxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgcm91dGVyLCBDb21wb25lbnQsIHBhZ2VQcm9wcywgX19OX1NTRywgX19OX1NTUCB9ID0gdGhpc1xuICAgICAgLnByb3BzIGFzIEFwcFByb3BzPENQPlxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb21wb25lbnRcbiAgICAgICAgey4uLnBhZ2VQcm9wc31cbiAgICAgICAge1xuICAgICAgICAgIC8vIHdlIGRvbid0IGFkZCB0aGUgbGVnYWN5IFVSTCBwcm9wIGlmIGl0J3MgdXNpbmcgbm9uLWxlZ2FjeVxuICAgICAgICAgIC8vIG1ldGhvZHMgbGlrZSBnZXRTdGF0aWNQcm9wcyBhbmQgZ2V0U2VydmVyU2lkZVByb3BzXG4gICAgICAgICAgLi4uKCEoX19OX1NTRyB8fCBfX05fU1NQKSA/IHsgdXJsOiBjcmVhdGVVcmwocm91dGVyKSB9IDoge30pXG4gICAgICAgIH1cbiAgICAgIC8+XG4gICAgKVxuICB9XG59XG5cbmxldCB3YXJuQ29udGFpbmVyOiAoKSA9PiB2b2lkXG5sZXQgd2FyblVybDogKCkgPT4gdm9pZFxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB3YXJuQ29udGFpbmVyID0gZXhlY09uY2UoKCkgPT4ge1xuICAgIGNvbnNvbGUud2FybihcbiAgICAgIGBXYXJuaW5nOiB0aGUgXFxgQ29udGFpbmVyXFxgIGluIFxcYF9hcHBcXGAgaGFzIGJlZW4gZGVwcmVjYXRlZCBhbmQgc2hvdWxkIGJlIHJlbW92ZWQuIGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9hcHAtY29udGFpbmVyLWRlcHJlY2F0ZWRgXG4gICAgKVxuICB9KVxuXG4gIHdhcm5VcmwgPSBleGVjT25jZSgoKSA9PiB7XG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgIGBXYXJuaW5nOiB0aGUgJ3VybCcgcHJvcGVydHkgaXMgZGVwcmVjYXRlZC4gaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL3VybC1kZXByZWNhdGVkYFxuICAgIClcbiAgfSlcbn1cblxuLy8gQGRlcHJlY2F0ZWQgbm9vcCBmb3Igbm93IHVudGlsIHJlbW92YWxcbmV4cG9ydCBmdW5jdGlvbiBDb250YWluZXIocDogYW55KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuQ29udGFpbmVyKClcbiAgcmV0dXJuIHAuY2hpbGRyZW5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVVybChyb3V0ZXI6IFJvdXRlcikge1xuICAvLyBUaGlzIGlzIHRvIG1ha2Ugc3VyZSB3ZSBkb24ndCByZWZlcmVuY2VzIHRoZSByb3V0ZXIgb2JqZWN0IGF0IGNhbGwgdGltZVxuICBjb25zdCB7IHBhdGhuYW1lLCBhc1BhdGgsIHF1ZXJ5IH0gPSByb3V0ZXJcbiAgcmV0dXJuIHtcbiAgICBnZXQgcXVlcnkoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcXVlcnlcbiAgICB9LFxuICAgIGdldCBwYXRobmFtZSgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBwYXRobmFtZVxuICAgIH0sXG4gICAgZ2V0IGFzUGF0aCgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBhc1BhdGhcbiAgICB9LFxuICAgIGJhY2s6ICgpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJvdXRlci5iYWNrKClcbiAgICB9LFxuICAgIHB1c2g6ICh1cmw6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiByb3V0ZXIucHVzaCh1cmwsIGFzKVxuICAgIH0sXG4gICAgcHVzaFRvOiAoaHJlZjogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgY29uc3QgcHVzaFJvdXRlID0gYXMgPyBocmVmIDogJydcbiAgICAgIGNvbnN0IHB1c2hVcmwgPSBhcyB8fCBocmVmXG5cbiAgICAgIHJldHVybiByb3V0ZXIucHVzaChwdXNoUm91dGUsIHB1c2hVcmwpXG4gICAgfSxcbiAgICByZXBsYWNlOiAodXJsOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcm91dGVyLnJlcGxhY2UodXJsLCBhcylcbiAgICB9LFxuICAgIHJlcGxhY2VUbzogKGhyZWY6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIGNvbnN0IHJlcGxhY2VSb3V0ZSA9IGFzID8gaHJlZiA6ICcnXG4gICAgICBjb25zdCByZXBsYWNlVXJsID0gYXMgfHwgaHJlZlxuXG4gICAgICByZXR1cm4gcm91dGVyLnJlcGxhY2UocmVwbGFjZVJvdXRlLCByZXBsYWNlVXJsKVxuICAgIH0sXG4gIH1cbn1cbiIsImltcG9ydCBBcHAgZnJvbSAnbmV4dC9hcHAnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7IEFwcFByb3ZpZGVyLEZyYW1lLEZvb3RlckhlbHAsTGluayxUb3BCYXIsTmF2aWdhdGlvbn0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcyc7XG5pbXBvcnQge0Fycm93TGVmdE1pbm9yLEN1c3RvbWVyc01pbm9yLFNldHRpbmdzTWFqb3JNb25vdG9uZSxEcmFmdE9yZGVyc01ham9yTW9ub3RvbmUsT25saW5lU3RvcmVNYWpvck1vbm90b25lLFByb2R1Y3RzTWFqb3JUd290b25lLFNlYXJjaE1ham9yTW9ub3RvbmUsIENvbnZlcnNhdGlvbk1pbm9yLCBIb21lTWFqb3JNb25vdG9uZSwgT3JkZXJzTWFqb3JUd290b25lfSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzLWljb25zJztcbmltcG9ydCB0cmFuc2xhdGlvbnMgZnJvbSAnQHNob3BpZnkvcG9sYXJpcy9sb2NhbGVzL2VuLmpzb24nO1xuaW1wb3J0ICdAc2hvcGlmeS9wb2xhcmlzL3N0eWxlcy5jc3MnO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdAc2hvcGlmeS9hcHAtYnJpZGdlLXJlYWN0JztcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XG5pbXBvcnQgQXBvbGxvQ2xpZW50IGZyb20gJ2Fwb2xsby1ib29zdCc7XG5pbXBvcnQgeyBBcG9sbG9Qcm92aWRlciB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnc3RvcmUtanMnO1xuaW1wb3J0IHsgY3JlYXRlQXBwIH0gZnJvbSAnQHNob3BpZnkvYXBwLWJyaWRnZSc7XG5pbXBvcnQgeyBSZWRpcmVjdCB9IGZyb20gJ0BzaG9waWZ5L2FwcC1icmlkZ2UvYWN0aW9ucyc7XG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSAnQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdCc7XG5jb25zdCBjbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KHtcbiAgZmV0Y2hPcHRpb25zOiB7XG4gICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJ1xuICB9LFxufSk7XG5jb25zdCBhcHAgPSBjcmVhdGVBcHAoe1xuICBhcGlLZXk6ICdlNDQxNGU2NWJjYzgxYmU0YzdlYjVlMTUzMTMyOTM0ZScsXG4gIHNob3BPcmlnaW46IENvb2tpZXMuZ2V0KFwic2hvcE9yaWdpblwiKSxcbn0pO1xuY2xhc3MgTXlBcHAgZXh0ZW5kcyBBcHAgeyAgXG5cbiAgc3RhdGU9e1xuICAgIGlzVXNlck1lbnVPcGVuOmZhbHNlLFxuICAgIHRvZ2dsZUlzVXNlck1lbnVPcGVuOmZhbHNlLFxuICAgIG1vYmlsZU5hdmlnYXRpb25BY3RpdmU6ZmFsc2UsXG4gICAgdXNlclJvbGU6c3RvcmUuZ2V0KCd1c2VyUm9sZScpLFxuICAgIGZpcnN0TmFtZTpzdG9yZS5nZXQoJ2ZpcnN0TmFtZScpP3N0b3JlLmdldCgnZmlyc3ROYW1lJyk6J0d1ZXN0JyxcbiAgICBsYXN0TmFtZTpzdG9yZS5nZXQoJ2xhc3ROYW1lJyk/c3RvcmUuZ2V0KCdsYXN0TmFtZScpOicnXG4gIH07XG4gIGhhbmRsZU5hdmlnYXRpb25Ub2dnbGUoKXtcbiAgICB0aGlzLnNldFN0YXRlKHttb2JpbGVOYXZpZ2F0aW9uQWN0aXZlOiF0aGlzLnN0YXRlLm1vYmlsZU5hdmlnYXRpb25BY3RpdmV9KVxuICAgIGNvbnNvbGUubG9nKCd0b2dnbGUgbmF2aWdhdGlvbiB2aXNpYmlsaXR5ICcrdGhpcy5zdGF0ZS5tb2JpbGVOYXZpZ2F0aW9uQWN0aXZlKTtcbiAgfVxuICB0b2dnbGVJc1VzZXJNZW51T3Blbigpe1xuICAgIFxuICAgIHRoaXMuc2V0U3RhdGUoe2lzVXNlck1lbnVPcGVuOiF0aGlzLnN0YXRlLmlzVXNlck1lbnVPcGVufSlcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmlzVXNlck1lbnVPcGVuKVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzaG9wPUNvb2tpZXMuZ2V0KFwic2hvcE9yaWdpblwiKTtcbiAgICBjb25zdCByZWRpcmVjdCA9IFJlZGlyZWN0LmNyZWF0ZShhcHApO1xuICAgIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3R7aXNVc2VyTWVudU9wZW4sbW9iaWxlTmF2aWdhdGlvbkFjdGl2ZSxmaXJzdE5hbWUsbGFzdE5hbWV9PXRoaXMuc3RhdGU7XG4gICAgY29uc3QgdXNlck1lbnVNYXJrdXAgPSAoXG4gICAgICA8VG9wQmFyLlVzZXJNZW51XG4gICAgICAgIGFjdGlvbnM9e1tcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpdGVtczogW3tjb250ZW50OiAnQmFjayB0byBTaG9waWZ5JywgaWNvbjogQXJyb3dMZWZ0TWlub3J9XSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGl0ZW1zOiBbe2NvbnRlbnQ6ICdTaWdub3V0JywgXG4gICAgICAgICAgICBvbkNsaWNrOiAoKT0+e1xuICAgICAgICAgICAgICBhbGVydCgnc2RzJylcbiAgICAgICAgICAgICAgc3RvcmUuc2V0KCd1c2VyUm9sZScsJycpXG4gICAgICAgICAgICAgIHJlZGlyZWN0LmRpc3BhdGNoKFxuICAgICAgICAgICAgICAgIFJlZGlyZWN0LkFjdGlvbi5BUFAsJy8nXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH1dLFxuICAgICAgICAgIH0sXG4gICAgICAgIF19XG4gICAgICAgIG5hbWU9e2ZpcnN0TmFtZX1cbiAgICAgICAgZGV0YWlsPXtmaXJzdE5hbWUrJyAnK2xhc3ROYW1lfVxuICAgICAgICBpbml0aWFscz17Zmlyc3ROYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfVxuICAgICAgICBvcGVuPXtpc1VzZXJNZW51T3Blbn1cbiAgICAgICAgb25Ub2dnbGU9eygpPT50aGlzLnRvZ2dsZUlzVXNlck1lbnVPcGVuKCl9XG4gICAgICAvPlxuICAgICk7XG4gICAgbGV0ICBtZW51aXRlbXM9W107XG4gICAgaWYodGhpcy5zdGF0ZS51c2VyUm9sZT09J2Ryb3BzaGlwcGVyJyl7XG4gICAgICBtZW51aXRlbXM9W1xuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6ICdEcm9wU2hpcHBlciBEYXNoYm9hcmQnLFxuICAgICAgICAgIGljb246IEhvbWVNYWpvck1vbm90b25lLFxuICAgICAgICAgIG9uQ2xpY2s6ICgpPT57fSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiAnU2VhcmNoIFByb2R1Y3RzJyxcbiAgICAgICAgICBpY29uOiBTZWFyY2hNYWpvck1vbm90b25lLFxuICAgICAgICAgIG9uQ2xpY2s6ICgpPT57XG4gICAgICAgICAgICByZWRpcmVjdC5kaXNwYXRjaChcbiAgICAgICAgICAgICAgUmVkaXJlY3QuQWN0aW9uLkFQUCwnL3NlYXJjaCdcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiAnTXkgUHJvZHVjdHMnLFxuICAgICAgICAgIGljb246IFByb2R1Y3RzTWFqb3JUd290b25lLFxuICAgICAgICAgIG9uQ2xpY2s6ICgpPT57XG4gICAgICAgICAgICByZWRpcmVjdC5kaXNwYXRjaChcbiAgICAgICAgICAgICAgUmVkaXJlY3QuQWN0aW9uLkFQUCwnL215LXByb2R1Y3RzJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDonTWFuYWdlIE9yZGVycycsXG4gICAgICAgICAgaWNvbjpEcmFmdE9yZGVyc01ham9yTW9ub3RvbmUsXG4gICAgICAgICAgb25DbGljazogKCk9PntcbiAgICAgICAgICAgIHJlZGlyZWN0LmRpc3BhdGNoKFxuICAgICAgICAgICAgICBSZWRpcmVjdC5BY3Rpb24uQVBQLCcvbWFuYWdlLW9yZGVycydcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOidQcmljaW5nJyxcbiAgICAgICAgICBpY29uOlNldHRpbmdzTWFqb3JNb25vdG9uZSxcbiAgICAgICAgICBvbkNsaWNrOiAoKT0+e1xuICAgICAgICAgICAgcmVkaXJlY3QuZGlzcGF0Y2goXG4gICAgICAgICAgICAgIFJlZGlyZWN0LkFjdGlvbi5BUFAsJy9jaG9vc2VfcGxhbidcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOidTZXR0aW5ncycsXG4gICAgICAgICAgaWNvbjpTZXR0aW5nc01ham9yTW9ub3RvbmUsXG4gICAgICAgICAgb25DbGljazogKCk9PntcbiAgICAgICAgICAgIHJlZGlyZWN0LmRpc3BhdGNoKFxuICAgICAgICAgICAgICBSZWRpcmVjdC5BY3Rpb24uQVBQLCcvc2V0dGluZ3MnXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDonU2lnbm91dCcsXG4gICAgICAgICAgaWNvbjogQ3VzdG9tZXJzTWlub3IsXG4gICAgICAgICAgb25DbGljazogKCk9PntcbiAgICAgICAgICAgIHN0b3JlLnNldCgndXNlclJvbGUnLCcnKVxuICAgICAgICAgICAgcmVkaXJlY3QuZGlzcGF0Y2goUmVkaXJlY3QuQWN0aW9uLkFQUCwnLycpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXTtcbiAgICAgICB9ZWxzZSBpZih0aGlzLnN0YXRlLnVzZXJSb2xlPT0nc2VsbGVyJyl7XG4gICAgICAgIG1lbnVpdGVtcz1bXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6ICdTZWxsZXIgRGFzaGJvYXJkJyxcbiAgICAgICAgICAgIGljb246IEhvbWVNYWpvck1vbm90b25lLFxuICAgICAgICAgICAgdXJsOicvJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiAnU2VsbGluZyBQcm9kdWN0cycsXG4gICAgICAgICAgICBpY29uOiBPcmRlcnNNYWpvclR3b3RvbmUsXG4gICAgICAgICAgICBvbkNsaWNrOiAoKT0+e1xuICAgICAgICAgICAgICByZWRpcmVjdC5kaXNwYXRjaChcbiAgICAgICAgICAgICAgICBSZWRpcmVjdC5BY3Rpb24uQVBQLCcvc2VsbGluZ19wcm9kdWN0cydcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICAsXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDonU2V0dGluZ3MnLFxuICAgICAgICAgIGljb246U2V0dGluZ3NNYWpvck1vbm90b25lLFxuICAgICAgICAgIG9uQ2xpY2s6ICgpPT57XG4gICAgICAgICAgICByZWRpcmVjdC5kaXNwYXRjaChcbiAgICAgICAgICAgICAgUmVkaXJlY3QuQWN0aW9uLkFQUCwnL3NldHRpbmdzJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6J1NpZ25vdXQnLFxuICAgICAgICAgIGljb246IEN1c3RvbWVyc01pbm9yLFxuICAgICAgICAgIG9uQ2xpY2s6ICgpPT57XG4gICAgICAgICAgICBzdG9yZS5zZXQoJ3VzZXJSb2xlJywnJylcbiAgICAgICAgICAgIHJlZGlyZWN0LmRpc3BhdGNoKFJlZGlyZWN0LkFjdGlvbi5BUFAsJy8nKTtcbiAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9ZWxzZXtcbiAgICAgIG1lbnVpdGVtcz1bXG4gICAgICAgXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogJ1NpZ25JbicsXG4gICAgICAgICAgaWNvbjogQ3VzdG9tZXJzTWlub3IsXG4gICAgICAgICAgb25DbGljazogKCk9PntcbiAgICAgICAgICAgIHJlZGlyZWN0LmRpc3BhdGNoKFxuICAgICAgICAgICAgICBSZWRpcmVjdC5BY3Rpb24uQVBQLCcvJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6ICdTaWdudXAnLFxuICAgICAgICAgIGljb246IEN1c3RvbWVyc01pbm9yLFxuICAgICAgICAgIG9uQ2xpY2s6ICgpPT57XG4gICAgICAgICAgICByZWRpcmVjdC5kaXNwYXRjaChcbiAgICAgICAgICAgICAgUmVkaXJlY3QuQWN0aW9uLkFQUCwnL3NpZ251cCdcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgICAgXG4gICAgICBdXG5cbiAgICB9XG4gICAgICBjb25zdCBuYXZpZ2F0aW9uTWFya3VwID0gKFxuICAgICAgICA8TmF2aWdhdGlvbiBsb2NhdGlvbj1cIi9cIj5cbiAgICAgICAgICA8TmF2aWdhdGlvbi5TZWN0aW9uXG4gICAgICAgICAgICBpdGVtcz17W1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdCYWNrIHRvIFNob3BpZnknLFxuICAgICAgICAgICAgICAgIGljb246IEFycm93TGVmdE1pbm9yLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxOYXZpZ2F0aW9uLlNlY3Rpb25cbiAgICAgICAgICAgIHNlcGFyYXRvclxuICAgICAgICAgICAgdGl0bGU9XCJEcm9wc2hpcHBlciBBcHBcIlxuICAgICAgICAgICBcbiAgICAgICAgICAgIGl0ZW1zPXttZW51aXRlbXN9XG4gICAgICAgICAgICBhY3Rpb249e3tcbiAgICAgICAgICAgICAgaWNvbjogQ29udmVyc2F0aW9uTWlub3IsXG4gICAgICAgICAgICAgIGFjY2Vzc2liaWxpdHlMYWJlbDogJ1NpZ25vdXQnLFxuICAgICAgICAgICAgICBvbkNsaWNrOiAoKT0+e1xuICAgICAgICAgICAgICAgIHN0b3JlLnNldCgndXNlclJvbGUnLCcnKVxuICAgICAgICAgICAgICAgIHN0b3JlLnNldCgnZmlyc3ROYW1lJywnR3Vlc3QnKVxuICAgICAgICAgICAgICAgIHN0b3JlLnNldCgnbGFzdE5hbWUnLCcnKVxuICAgICAgICAgICAgICAgIHN0b3JlLnNldCgnZW1haWwnLCcnKVxuICAgICAgICAgICAgICAgIHN0b3JlLnNldCgndXNlcm5hbWUnLCcnKVxuICAgICAgICAgICAgICAgIHN0b3JlLnNldCgnaWQnLCcnKVxuICAgICAgICAgICAgICAgIHJlZGlyZWN0LmRpc3BhdGNoKFxuICAgICAgICAgICAgICAgICAgUmVkaXJlY3QuQWN0aW9uLkFQUCwnLydcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L05hdmlnYXRpb24+XG4gICAgICApO1xuICAgXG4gICBcbiAgXG4gICAgY29uc3QgdG9wQmFyTWFya3VwID0gKFxuICAgICAgPFRvcEJhclxuICAgICAgICBzaG93TmF2aWdhdGlvblRvZ2dsZVxuICAgICAgICB1c2VyTWVudT17dXNlck1lbnVNYXJrdXB9XG4gICAgICAgIG9uTmF2aWdhdGlvblRvZ2dsZT17KCk9PnRoaXMuaGFuZGxlTmF2aWdhdGlvblRvZ2dsZSgpfVxuICAgICAgICBcbiAgICAgIC8+XG4gICAgKTtcbiAgICBjb25zdCBjb25maWcgPSB7IGFwaUtleTogQVBJX0tFWSwgc2hvcE9yaWdpbjogQ29va2llcy5nZXQoXCJzaG9wT3JpZ2luXCIpLCBmb3JjZVJlZGlyZWN0OiB0cnVlIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+ZHJvcHNoaXBwZXI8L3RpdGxlPlxuICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgIDwvSGVhZD4gXG4gICAgICAgIDxQcm92aWRlciBjb25maWc9e2NvbmZpZ30+ICAgICBcbiAgICAgICAgPEFwcFByb3ZpZGVyICBpMThuPXt0cmFuc2xhdGlvbnN9PlxuICAgICAgICA8RnJhbWUgdG9wQmFyPXt0b3BCYXJNYXJrdXB9IFxuICAgICAgICBuYXZpZ2F0aW9uPXtuYXZpZ2F0aW9uTWFya3VwfVxuICAgICAgICBzaG93TW9iaWxlTmF2aWdhdGlvbj17bW9iaWxlTmF2aWdhdGlvbkFjdGl2ZX1cbiAgICAgICAgb25OYXZpZ2F0aW9uRGlzbWlzcz17KCk9PnRoaXMuaGFuZGxlTmF2aWdhdGlvblRvZ2dsZSgpfVxuICAgICAgICA+XG4gICAgICAgIDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e2NsaWVudH0+XG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG5cbiAgICAgICAgICA8L0Fwb2xsb1Byb3ZpZGVyPlxuICAgICAgICAgPC9GcmFtZT5cbiAgICAgICAgICA8L0FwcFByb3ZpZGVyPiBcbiAgICAgICAgICA8L1Byb3ZpZGVyPiAgICAgICBcbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNob3BpZnkvYXBwLWJyaWRnZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc2hvcGlmeS9hcHAtYnJpZGdlLXJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzaG9waWZ5L2FwcC1icmlkZ2UvYWN0aW9uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc2hvcGlmeS9wb2xhcmlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzaG9waWZ5L3BvbGFyaXMtaWNvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLWJvb3N0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYXBvbGxvXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0b3JlLWpzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=