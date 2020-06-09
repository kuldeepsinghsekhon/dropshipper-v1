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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/ResourceListSeller.js":
/*!******************************************!*\
  !*** ./components/ResourceListSeller.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! store-js */ "store-js");
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shopify/app-bridge/actions */ "@shopify/app-bridge/actions");
/* harmony import */ var _shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shopify/app-bridge-react */ "@shopify/app-bridge-react");
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_6__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const GET_PRODUCTS_BY_ID = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default.a`
  query getProducts($ids: [ID!]!) {
    nodes(ids: $ids) {
      ... on Product {
        title
        handle
        descriptionHtml
        id
        images(first: 1) {
          edges {
            node {
              originalSrc
              altText
            }
          }
        }
        variants(first: 1) {
          edges {
            node {
              price
              id
            }
          }
        }
      }
    }
  }
`;

class ResourceListWithProducts extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      selectedItems: []
    });
  }

  render() {
    const app = this.context;

    const redirectToProduct = () => {
      const redirect = _shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_5__["Redirect"].create(app);
      redirect.dispatch(_shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_5__["Redirect"].Action.APP, '/edit-products');
    };

    const {
      selectedItems
    } = this.state;
    const twoWeeksFromNow = new Date(Date.now() + 12096e5).toDateString();
    return __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
      query: GET_PRODUCTS_BY_ID,
      variables: {
        ids: store_js__WEBPACK_IMPORTED_MODULE_4___default.a.get('ids')
      }
    }, ({
      data,
      loading,
      error
    }) => {
      if (loading) {
        return __jsx("div", null, "Loading\xE2\u20AC\xA6");
      }

      if (error) {
        return __jsx("div", null, error.message);
      }

      console.log(data);
      return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Card"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["ResourceList"], {
        showHeader: true,
        resourceName: {
          singular: 'Product',
          plural: 'Products'
        },
        items: data.nodes,
        selectedItems: selectedItems,
        onSelectionChange: items => {
          const idsFromResources = items.map(item => item);
          this.setState({
            selectedItems: idsFromResources
          });
        },
        promotedBulkActions: [{
          content: 'Submit Products',
          onAction: () => {
            alert(selectedItems);
          }
        }]
        /* bulkActions={[
           {
             content: 'Add tags',
             onAction: () => console.log(selectedItems),
           },
           {
             content: 'Remove tags',
             onAction: () => console.log('Todo: implement bulk remove tags'),
           },
           {
             content: 'Delete customers',
             onAction: () => console.log('Todo: implement bulk delete'),
           },
         ]}*/
        ,
        renderItem: item => {
          const media = __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Thumbnail"], {
            source: item.images.edges[0] ? item.images.edges[0].node.originalSrc : '',
            alt: item.images.edges[0] ? item.images.edges[0].node.altText : ''
          });

          const price = item.variants.edges[0].node.price;
          return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["ResourceList"].Item, {
            id: item.id,
            media: media,
            accessibilityLabel: `View details for ${item.title}`,
            onClick: () => {
              store_js__WEBPACK_IMPORTED_MODULE_4___default.a.set('item', item);
              redirectToProduct();
            }
          }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Stack"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Stack"].Item, {
            fill: true
          }, __jsx("h3", null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["TextStyle"], {
            variation: "strong"
          }, item.title))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Stack"].Item, null, __jsx("p", null, "$", price)), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Stack"].Item, null, __jsx("p", null, "Expires on ", twoWeeksFromNow, " "))));
        }
      }));
    });
  }

}

_defineProperty(ResourceListWithProducts, "contextType", _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_6__["Context"]);

/* harmony default export */ __webpack_exports__["default"] = (ResourceListWithProducts);

/***/ }),

/***/ "./pages/selling_products.js":
/*!***********************************!*\
  !*** ./pages/selling_products.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/app-bridge-react */ "@shopify/app-bridge-react");
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ResourceListSeller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ResourceListSeller */ "./components/ResourceListSeller.js");
/* harmony import */ var _shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shopify/app-bridge/actions */ "@shopify/app-bridge/actions");
/* harmony import */ var _shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! store-js */ "store-js");
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_6__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const axios = __webpack_require__(/*! axios */ "axios");

const session = __webpack_require__(/*! koa-session */ "koa-session");


const shop = js_cookie__WEBPACK_IMPORTED_MODULE_6___default.a.get("shopOrigin");
const accessToken = js_cookie__WEBPACK_IMPORTED_MODULE_6___default.a.get("accessToken");
const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

class Selling_products extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      open: false,
      userRole: store_js__WEBPACK_IMPORTED_MODULE_5___default.a.get('userRole')
    });

    _defineProperty(this, "handleSelection", resources => {
      const idsFromResources = resources.selection.map(product => product.id);
      this.setState({
        open: false
      });
      store_js__WEBPACK_IMPORTED_MODULE_5___default.a.set('ids', idsFromResources);
      console.log(idsFromResources); // const ids =resources.selection.map((product) => product.id);
      //      store.set('ids',ids);
      //     const app = this.context;
      //     const redirect = Redirect.create(app);
      //     const url="https://aladdin-dropshipper-server.herokuapp.com/products/new";
      //     this.setState({ open: false })
      //      const productcontainer = resources.selection.map((product) =>{
      //        //console.log(product)
      //       const container = {};
      //       container.title = product.title;
      //       container.body_html = product.descriptionHtml;
      //       container.tags=product.tags;
      //       container.product_type=product.productType;
      //       container.vendor='dropshipper';
      //       container.shopifyProductId=product.id;
      //       container.shop=shop;
      //       console.log(product.images)
      //       let pimages=product.images;
      //       container.images= pimages.map((image)=>image.originalSrc)
      //      console.log(container.images)
      //       axios.post(url,container).then( ( response ) => {
      //         this.shop_products()
      //       } ).catch(function (error) {
      //       })
      // });
    });
  }

  shop_products() {
    console.log(shop);
    let url = "https://aladdin-dropshipper-server.herokuapp.com/shop_products";
    axios.post(url, {
      "shop": shop
    }).then(response => {// const ids =response.data.map((product) => product.shopifyProductId);
      // store.set('ids', ids);    
      // console.log(ids)    
    }).catch(function (error) {
      console.log(error);
    });
  }

  componentDidMount() {
    const userRole = this.state.userRole; // this.shop_products();
    // store.set('ids',[]);

    console.log(accessToken);
    console.log(shop);
  }

  render() {
    //console.log()
    const {
      open,
      userRole
    } = this.state;
    const emptyState = !store_js__WEBPACK_IMPORTED_MODULE_5___default.a.get('ids');
    const idss = store_js__WEBPACK_IMPORTED_MODULE_5___default.a.get('ids'); // if(userRole=='seller'){

    return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Page"], null, __jsx(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__["TitleBar"], {
      primaryAction: {
        content: 'Select products',
        onAction: () => this.setState({
          open: true
        })
      }
    }), __jsx(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__["ResourcePicker"], {
      resourceType: "Product",
      showVariants: false,
      open: this.state.open,
      onSelection: resources => this.handleSelection(resources),
      onCancel: () => this.setState({
        open: false
      })
    }), emptyState ? __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["EmptyState"], {
      heading: "Sell Your Products on Multiple Stores",
      action: {
        content: 'Select products',
        onAction: () => this.setState({
          open: true
        })
      },
      image: img
    }, __jsx("p", null, "Select products to sale ."))) : __jsx(_components_ResourceListSeller__WEBPACK_IMPORTED_MODULE_3__["default"], null)); //}else{
    //   return (
    //     <Page>
    //  <EmptyState
    //         heading="Only Seller Can Sell Products"
    //         action={{
    //           content: 'Register As Seller',
    //           onAction: () =>{},
    //         }}
    //         image={img}
    //       ></EmptyState>
    //       </Page>
    //   )}
  }

}

_defineProperty(Selling_products, "contextType", _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__["Context"]);

/* harmony default export */ __webpack_exports__["default"] = (Selling_products);

/***/ }),

/***/ 3:
/*!*****************************************!*\
  !*** multi ./pages/selling_products.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\kuldeep\Downloads\aladdin-dropshiper-local\pages\selling_products.js */"./pages/selling_products.js");


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

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "koa-session":
/*!******************************!*\
  !*** external "koa-session" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("koa-session");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9SZXNvdXJjZUxpc3RTZWxsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvc2VsbGluZ19wcm9kdWN0cy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2hvcGlmeS9hcHAtYnJpZGdlLXJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHNob3BpZnkvYXBwLWJyaWRnZS9hY3Rpb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHNob3BpZnkvcG9sYXJpc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZ3JhcGhxbC10YWdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcy1jb29raWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2Etc2Vzc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYXBvbGxvXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3RvcmUtanNcIiJdLCJuYW1lcyI6WyJHRVRfUFJPRFVDVFNfQllfSUQiLCJncWwiLCJSZXNvdXJjZUxpc3RXaXRoUHJvZHVjdHMiLCJSZWFjdCIsIkNvbXBvbmVudCIsInNlbGVjdGVkSXRlbXMiLCJyZW5kZXIiLCJhcHAiLCJjb250ZXh0IiwicmVkaXJlY3RUb1Byb2R1Y3QiLCJyZWRpcmVjdCIsIlJlZGlyZWN0IiwiY3JlYXRlIiwiZGlzcGF0Y2giLCJBY3Rpb24iLCJBUFAiLCJzdGF0ZSIsInR3b1dlZWtzRnJvbU5vdyIsIkRhdGUiLCJub3ciLCJ0b0RhdGVTdHJpbmciLCJpZHMiLCJzdG9yZSIsImdldCIsImRhdGEiLCJsb2FkaW5nIiwiZXJyb3IiLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyIsInNpbmd1bGFyIiwicGx1cmFsIiwibm9kZXMiLCJpdGVtcyIsImlkc0Zyb21SZXNvdXJjZXMiLCJtYXAiLCJpdGVtIiwic2V0U3RhdGUiLCJjb250ZW50Iiwib25BY3Rpb24iLCJhbGVydCIsIm1lZGlhIiwiaW1hZ2VzIiwiZWRnZXMiLCJub2RlIiwib3JpZ2luYWxTcmMiLCJhbHRUZXh0IiwicHJpY2UiLCJ2YXJpYW50cyIsImlkIiwidGl0bGUiLCJzZXQiLCJDb250ZXh0IiwiYXhpb3MiLCJyZXF1aXJlIiwic2Vzc2lvbiIsInNob3AiLCJDb29raWVzIiwiYWNjZXNzVG9rZW4iLCJpbWciLCJTZWxsaW5nX3Byb2R1Y3RzIiwib3BlbiIsInVzZXJSb2xlIiwicmVzb3VyY2VzIiwic2VsZWN0aW9uIiwicHJvZHVjdCIsInNob3BfcHJvZHVjdHMiLCJ1cmwiLCJwb3N0IiwidGhlbiIsInJlc3BvbnNlIiwiY2F0Y2giLCJjb21wb25lbnREaWRNb3VudCIsImVtcHR5U3RhdGUiLCJpZHNzIiwiaGFuZGxlU2VsZWN0aW9uIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtR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T0FGVjtBQU1FLFdBQUssRUFBRUY7QUFOVCxPQVFFLDZDQVJGLENBREYsQ0FEZ0IsR0FlWixNQUFDLHNFQUFELE9BN0JOLENBRkUsQ0FQTyxDQTZDWDtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNDOztBQWxIOEM7O2dCQUF6Q0MsZ0IsaUJBQ2lCUixpRTs7QUFvSFJRLCtFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaklBLHNEOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHFDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxzZWxsaW5nX3Byb2R1Y3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuIiwiaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5pbXBvcnQgeyBRdWVyeSB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XG5pbXBvcnQge1xuICBDYXJkLFxuICBSZXNvdXJjZUxpc3QsXG4gIFN0YWNrLFxuICBUZXh0U3R5bGUsXG4gIFRodW1ibmFpbCxcbn0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcyc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnc3RvcmUtanMnO1xuaW1wb3J0IHsgUmVkaXJlY3QgfSBmcm9tICdAc2hvcGlmeS9hcHAtYnJpZGdlL2FjdGlvbnMnO1xuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gJ0BzaG9waWZ5L2FwcC1icmlkZ2UtcmVhY3QnO1xuXG5jb25zdCBHRVRfUFJPRFVDVFNfQllfSUQgPSBncWxgXG4gIHF1ZXJ5IGdldFByb2R1Y3RzKCRpZHM6IFtJRCFdISkge1xuICAgIG5vZGVzKGlkczogJGlkcykge1xuICAgICAgLi4uIG9uIFByb2R1Y3Qge1xuICAgICAgICB0aXRsZVxuICAgICAgICBoYW5kbGVcbiAgICAgICAgZGVzY3JpcHRpb25IdG1sXG4gICAgICAgIGlkXG4gICAgICAgIGltYWdlcyhmaXJzdDogMSkge1xuICAgICAgICAgIGVkZ2VzIHtcbiAgICAgICAgICAgIG5vZGUge1xuICAgICAgICAgICAgICBvcmlnaW5hbFNyY1xuICAgICAgICAgICAgICBhbHRUZXh0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhcmlhbnRzKGZpcnN0OiAxKSB7XG4gICAgICAgICAgZWRnZXMge1xuICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgIHByaWNlXG4gICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5jbGFzcyBSZXNvdXJjZUxpc3RXaXRoUHJvZHVjdHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgY29udGV4dFR5cGUgPSBDb250ZXh0O1xuICBzdGF0ZSA9IHtcbiAgICBzZWxlY3RlZEl0ZW1zOiBbXSxcbiAgfTtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGFwcCA9IHRoaXMuY29udGV4dDtcbiAgICBjb25zdCByZWRpcmVjdFRvUHJvZHVjdCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHJlZGlyZWN0ID0gUmVkaXJlY3QuY3JlYXRlKGFwcCk7XG4gICAgICByZWRpcmVjdC5kaXNwYXRjaChcbiAgICAgICAgUmVkaXJlY3QuQWN0aW9uLkFQUCxcbiAgICAgICAgJy9lZGl0LXByb2R1Y3RzJyxcbiAgICAgICk7XG4gICAgfTtcbiAgICBjb25zdCB7IHNlbGVjdGVkSXRlbXMgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgdHdvV2Vla3NGcm9tTm93ID0gbmV3IERhdGUoRGF0ZS5ub3coKSArIDEyMDk2ZTUpLnRvRGF0ZVN0cmluZygpO1xuICAgIHJldHVybiAoXG4gICAgICA8UXVlcnkgcXVlcnk9e0dFVF9QUk9EVUNUU19CWV9JRH0gdmFyaWFibGVzPXt7IGlkczogc3RvcmUuZ2V0KCdpZHMnKSB9fT5cbiAgICAgICAgeyh7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH0pID0+IHtcbiAgICAgICAgICBpZiAobG9hZGluZykgeyByZXR1cm4gPGRpdj5Mb2FkaW5nw6LigqzCpjwvZGl2PjsgfVxuICAgICAgICAgIGlmIChlcnJvcikgeyByZXR1cm4gPGRpdj57ZXJyb3IubWVzc2FnZX08L2Rpdj47IH1cbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPENhcmQ+XG4gICAgICAgICAgICAgIDxSZXNvdXJjZUxpc3RcbiAgICAgICAgICAgICAgICBzaG93SGVhZGVyXG4gICAgICAgICAgICAgICAgcmVzb3VyY2VOYW1lPXt7IHNpbmd1bGFyOiAnUHJvZHVjdCcsIHBsdXJhbDogJ1Byb2R1Y3RzJyB9fVxuICAgICAgICAgICAgICAgIGl0ZW1zPXtkYXRhLm5vZGVzfVxuICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbXM9e3NlbGVjdGVkSXRlbXN9XG4gICAgICAgICAgICAgICAgb25TZWxlY3Rpb25DaGFuZ2U9eyhpdGVtcyk9PntcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGlkc0Zyb21SZXNvdXJjZXMgPSBpdGVtcy5tYXAoKGl0ZW0pID0+IGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRJdGVtczogaWRzRnJvbVJlc291cmNlcyB9KTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIHByb21vdGVkQnVsa0FjdGlvbnM9eyBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdTdWJtaXQgUHJvZHVjdHMnLFxuICAgICAgICAgICAgICAgICAgICBvbkFjdGlvbjogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KHNlbGVjdGVkSXRlbXMpfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgIC8qIGJ1bGtBY3Rpb25zPXtbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdBZGQgdGFncycsXG4gICAgICAgICAgICAgICAgICAgIG9uQWN0aW9uOiAoKSA9PiBjb25zb2xlLmxvZyhzZWxlY3RlZEl0ZW1zKSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdSZW1vdmUgdGFncycsXG4gICAgICAgICAgICAgICAgICAgIG9uQWN0aW9uOiAoKSA9PiBjb25zb2xlLmxvZygnVG9kbzogaW1wbGVtZW50IGJ1bGsgcmVtb3ZlIHRhZ3MnKSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdEZWxldGUgY3VzdG9tZXJzJyxcbiAgICAgICAgICAgICAgICAgICAgb25BY3Rpb246ICgpID0+IGNvbnNvbGUubG9nKCdUb2RvOiBpbXBsZW1lbnQgYnVsayBkZWxldGUnKSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXX0qL1xuICAgICAgICAgICAgICAgIHJlbmRlckl0ZW09eyhpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBtZWRpYSA9IChcbiAgICAgICAgICAgICAgICAgICAgPFRodW1ibmFpbFxuICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZT17XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmltYWdlcy5lZGdlc1swXVxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IGl0ZW0uaW1hZ2VzLmVkZ2VzWzBdLm5vZGUub3JpZ2luYWxTcmNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pbWFnZXMuZWRnZXNbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBpdGVtLmltYWdlcy5lZGdlc1swXS5ub2RlLmFsdFRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICBjb25zdCBwcmljZSA9IGl0ZW0udmFyaWFudHMuZWRnZXNbMF0ubm9kZS5wcmljZTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxSZXNvdXJjZUxpc3QuSXRlbVxuICAgICAgICAgICAgICAgICAgICAgIGlkPXtpdGVtLmlkfVxuICAgICAgICAgICAgICAgICAgICAgIG1lZGlhPXttZWRpYX1cbiAgICAgICAgICAgICAgICAgICAgICBhY2Nlc3NpYmlsaXR5TGFiZWw9e2BWaWV3IGRldGFpbHMgZm9yICR7aXRlbS50aXRsZX1gfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlLnNldCgnaXRlbScsIGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVkaXJlY3RUb1Byb2R1Y3QoKTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPFN0YWNrPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrLkl0ZW0gZmlsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0U3R5bGUgdmFyaWF0aW9uPVwic3Ryb25nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHRTdHlsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2suSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFjay5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4ke3ByaWNlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2suSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFjay5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5FeHBpcmVzIG9uIHt0d29XZWVrc0Zyb21Ob3d9IDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2suSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgICAgICA8L1Jlc291cmNlTGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICk7XG4gICAgICAgIH19XG4gICAgICA8L1F1ZXJ5PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVzb3VyY2VMaXN0V2l0aFByb2R1Y3RzO1xuIiwiaW1wb3J0IHsgTGF5b3V0LCBQYWdlLCBUZXh0U3R5bGUsRW1wdHlTdGF0ZX0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcyc7XG5pbXBvcnQgeyBUaXRsZUJhcixSZXNvdXJjZVBpY2tlciB9IGZyb20gJ0BzaG9waWZ5L2FwcC1icmlkZ2UtcmVhY3QnO1xuaW1wb3J0IFJlc291cmNlTGlzdFdpdGhQcm9kdWN0cyBmcm9tICcuLi9jb21wb25lbnRzL1Jlc291cmNlTGlzdFNlbGxlcic7XG5pbXBvcnQgeyBSZWRpcmVjdCB9IGZyb20gJ0BzaG9waWZ5L2FwcC1icmlkZ2UvYWN0aW9ucyc7XG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSAnQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdCc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnc3RvcmUtanMnO1xuY29uc3QgYXhpb3MgPXJlcXVpcmUoJ2F4aW9zJyk7XG5jb25zdCBzZXNzaW9uID0gcmVxdWlyZSgna29hLXNlc3Npb24nKTtcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XG5jb25zdCBzaG9wPUNvb2tpZXMuZ2V0KFwic2hvcE9yaWdpblwiKTtcbmNvbnN0IGFjY2Vzc1Rva2VuPUNvb2tpZXMuZ2V0KFwiYWNjZXNzVG9rZW5cIik7XG5jb25zdCBpbWcgPSAnaHR0cHM6Ly9jZG4uc2hvcGlmeS5jb20vcy9maWxlcy8xLzA3NTcvOTk1NS9maWxlcy9lbXB0eS1zdGF0ZS5zdmcnO1xuY2xhc3MgU2VsbGluZ19wcm9kdWN0cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBjb250ZXh0VHlwZSA9IENvbnRleHQ7XG4gIFxuICBzdGF0ZSA9IHsgb3BlbjogZmFsc2UsdXNlclJvbGU6c3RvcmUuZ2V0KCd1c2VyUm9sZScpIH07XG4gICBoYW5kbGVTZWxlY3Rpb24gPSAocmVzb3VyY2VzKSA9PiB7XG4gICAgY29uc3QgaWRzRnJvbVJlc291cmNlcyA9IHJlc291cmNlcy5zZWxlY3Rpb24ubWFwKChwcm9kdWN0KSA9PiBwcm9kdWN0LmlkKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbjogZmFsc2UgfSk7XG4gICAgc3RvcmUuc2V0KCdpZHMnLCBpZHNGcm9tUmVzb3VyY2VzKTtcbmNvbnNvbGUubG9nKGlkc0Zyb21SZXNvdXJjZXMpXG4gICAgLy8gY29uc3QgaWRzID1yZXNvdXJjZXMuc2VsZWN0aW9uLm1hcCgocHJvZHVjdCkgPT4gcHJvZHVjdC5pZCk7XG4vLyAgICAgIHN0b3JlLnNldCgnaWRzJyxpZHMpO1xuLy8gICAgIGNvbnN0IGFwcCA9IHRoaXMuY29udGV4dDtcbi8vICAgICBjb25zdCByZWRpcmVjdCA9IFJlZGlyZWN0LmNyZWF0ZShhcHApO1xuLy8gICAgIGNvbnN0IHVybD1cImh0dHBzOi8vYWxhZGRpbi1kcm9wc2hpcHBlci1zZXJ2ZXIuaGVyb2t1YXBwLmNvbS9wcm9kdWN0cy9uZXdcIjtcbi8vICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbjogZmFsc2UgfSlcbi8vICAgICAgY29uc3QgcHJvZHVjdGNvbnRhaW5lciA9IHJlc291cmNlcy5zZWxlY3Rpb24ubWFwKChwcm9kdWN0KSA9Pntcbi8vICAgICAgICAvL2NvbnNvbGUubG9nKHByb2R1Y3QpXG4vLyAgICAgICBjb25zdCBjb250YWluZXIgPSB7fTtcbi8vICAgICAgIGNvbnRhaW5lci50aXRsZSA9IHByb2R1Y3QudGl0bGU7XG4vLyAgICAgICBjb250YWluZXIuYm9keV9odG1sID0gcHJvZHVjdC5kZXNjcmlwdGlvbkh0bWw7XG4vLyAgICAgICBjb250YWluZXIudGFncz1wcm9kdWN0LnRhZ3M7XG4vLyAgICAgICBjb250YWluZXIucHJvZHVjdF90eXBlPXByb2R1Y3QucHJvZHVjdFR5cGU7XG4vLyAgICAgICBjb250YWluZXIudmVuZG9yPSdkcm9wc2hpcHBlcic7XG4vLyAgICAgICBjb250YWluZXIuc2hvcGlmeVByb2R1Y3RJZD1wcm9kdWN0LmlkO1xuLy8gICAgICAgY29udGFpbmVyLnNob3A9c2hvcDtcbi8vICAgICAgIGNvbnNvbGUubG9nKHByb2R1Y3QuaW1hZ2VzKVxuLy8gICAgICAgbGV0IHBpbWFnZXM9cHJvZHVjdC5pbWFnZXM7XG4vLyAgICAgICBjb250YWluZXIuaW1hZ2VzPSBwaW1hZ2VzLm1hcCgoaW1hZ2UpPT5pbWFnZS5vcmlnaW5hbFNyYylcbi8vICAgICAgY29uc29sZS5sb2coY29udGFpbmVyLmltYWdlcylcbi8vICAgICAgIGF4aW9zLnBvc3QodXJsLGNvbnRhaW5lcikudGhlbiggKCByZXNwb25zZSApID0+IHtcbi8vICAgICAgICAgdGhpcy5zaG9wX3Byb2R1Y3RzKClcbiAgICAgICAgICAgICAgIFxuLy8gICAgICAgfSApLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuXG4vLyAgICAgICB9KVxuICAgIC8vIH0pO1xuICB9XG4gIHNob3BfcHJvZHVjdHMoKXtcbiAgICBjb25zb2xlLmxvZyhzaG9wKVxuICAgIGxldCB1cmw9XCJodHRwczovL2FsYWRkaW4tZHJvcHNoaXBwZXItc2VydmVyLmhlcm9rdWFwcC5jb20vc2hvcF9wcm9kdWN0c1wiO1xuICAgIGF4aW9zLnBvc3QodXJsLHtcInNob3BcIjpzaG9wfSkudGhlbiggKHJlc3BvbnNlKT0+eyBcbiAgICAgIC8vIGNvbnN0IGlkcyA9cmVzcG9uc2UuZGF0YS5tYXAoKHByb2R1Y3QpID0+IHByb2R1Y3Quc2hvcGlmeVByb2R1Y3RJZCk7XG4gICAgICAvLyBzdG9yZS5zZXQoJ2lkcycsIGlkcyk7ICAgIFxuICAgICAgLy8gY29uc29sZS5sb2coaWRzKSAgICBcbiAgICB9ICkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfSlcbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB1c2VyUm9sZT10aGlzLnN0YXRlLnVzZXJSb2xlO1xuICAgLy8gdGhpcy5zaG9wX3Byb2R1Y3RzKCk7XG4gIC8vIHN0b3JlLnNldCgnaWRzJyxbXSk7XG4gICAgY29uc29sZS5sb2coYWNjZXNzVG9rZW4pXG4gICAgY29uc29sZS5sb2coc2hvcClcbiB9XG4gIHJlbmRlcigpIHtcbiBcbiAgICAvL2NvbnNvbGUubG9nKClcbiAgICBjb25zdCB7IG9wZW4sdXNlclJvbGUgfT10aGlzLnN0YXRlO1xuICAgIGNvbnN0IGVtcHR5U3RhdGUgPSAhc3RvcmUuZ2V0KCdpZHMnKTtcbiAgICBjb25zdCBpZHNzPXN0b3JlLmdldCgnaWRzJylcbiAgIC8vIGlmKHVzZXJSb2xlPT0nc2VsbGVyJyl7XG4gICAgcmV0dXJuIChcbiAgICAgXG4gIDxQYWdlPlxuICAgIDxUaXRsZUJhclxuICAgICAgcHJpbWFyeUFjdGlvbj17e1xuICAgICAgICBjb250ZW50OiAnU2VsZWN0IHByb2R1Y3RzJyxcbiAgICAgICAgb25BY3Rpb246ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBvcGVuOiB0cnVlIH0pLFxuICAgICAgfX1cbiAgICAvPlxuICAgIDxSZXNvdXJjZVBpY2tlclxuICAgICAgICAgIHJlc291cmNlVHlwZT1cIlByb2R1Y3RcIlxuICAgICAgICAgIHNob3dWYXJpYW50cz17ZmFsc2V9XG4gICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5vcGVufVxuICAgICAgICAgIG9uU2VsZWN0aW9uPXsocmVzb3VyY2VzKSA9PiB0aGlzLmhhbmRsZVNlbGVjdGlvbihyZXNvdXJjZXMpfVxuICAgICAgICAgIG9uQ2FuY2VsPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgb3BlbjogZmFsc2UgfSl9XG4gICAgICAgIC8+XG4gICAgICAgICB7ZW1wdHlTdGF0ZSA/IChcbiAgICA8TGF5b3V0PiAgIFxuICAgICAgPEVtcHR5U3RhdGVcbiAgICAgICAgaGVhZGluZz1cIlNlbGwgWW91ciBQcm9kdWN0cyBvbiBNdWx0aXBsZSBTdG9yZXNcIlxuICAgICAgICBhY3Rpb249e3tcbiAgICAgICAgICBjb250ZW50OiAnU2VsZWN0IHByb2R1Y3RzJyxcbiAgICAgICAgICBvbkFjdGlvbjogKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IG9wZW46IHRydWUgfSksXG4gICAgICAgIH19XG4gICAgICAgIGltYWdlPXtpbWd9XG4gICAgICA+XG4gICAgICAgIDxwPlNlbGVjdCBwcm9kdWN0cyB0byBzYWxlIC48L3A+XG4gICAgICA8L0VtcHR5U3RhdGU+XG4gICAgICA8L0xheW91dD5cbiAgICAgICApIDogKFxuICAgICAgICAgXG4gICAgICAgIDxSZXNvdXJjZUxpc3RXaXRoUHJvZHVjdHMvPlxuICAgICAgICBcbiAgICAgICAgKX1cbiAgICA8L1BhZ2U+XG5cbiBcbik7XG4vL31lbHNle1xuLy8gICByZXR1cm4gKFxuICAgICBcbi8vICAgICA8UGFnZT5cbi8vICA8RW1wdHlTdGF0ZVxuLy8gICAgICAgICBoZWFkaW5nPVwiT25seSBTZWxsZXIgQ2FuIFNlbGwgUHJvZHVjdHNcIlxuLy8gICAgICAgICBhY3Rpb249e3tcbi8vICAgICAgICAgICBjb250ZW50OiAnUmVnaXN0ZXIgQXMgU2VsbGVyJyxcbi8vICAgICAgICAgICBvbkFjdGlvbjogKCkgPT57fSxcbi8vICAgICAgICAgfX1cbi8vICAgICAgICAgaW1hZ2U9e2ltZ31cbi8vICAgICAgID48L0VtcHR5U3RhdGU+XG4vLyAgICAgICA8L1BhZ2U+XG4vLyAgICl9XG59XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGxpbmdfcHJvZHVjdHM7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc2hvcGlmeS9hcHAtYnJpZGdlL2FjdGlvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNob3BpZnkvcG9sYXJpc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXRhZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia29hLXNlc3Npb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYXBvbGxvXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0b3JlLWpzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=