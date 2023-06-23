(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["nemo"] = factory();
	else
		root["nemo"] = factory();
})(this, function() {
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
/******/ 	__webpack_require__.p = "dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./worker/inspireTreeWorker.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../shrimp/helpers/QJsonHelper.ts":
/*!****************************************!*\
  !*** ../shrimp/helpers/QJsonHelper.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QJsonHelper = exports.CompSearchKey = void 0;
var typeHelper_1 = __webpack_require__(/*! ./typeHelper */ "../shrimp/helpers/typeHelper.ts");
var CompSearchKey;
(function (CompSearchKey) {
    CompSearchKey[CompSearchKey["PID"] = 0] = "PID";
    CompSearchKey[CompSearchKey["EditorID"] = 1] = "EditorID";
    CompSearchKey[CompSearchKey["Render"] = 2] = "Render";
})(CompSearchKey = exports.CompSearchKey || (exports.CompSearchKey = {}));
var QJsonHelper = /** @class */ (function () {
    function QJsonHelper() {
    }
    /**
     * Make the calculation with given pageJson
     * @param pageJson Given pageJson
     * @param callBack Function to be handled. Return false to STOP traversing.
     * @returns boolean
     */
    QJsonHelper.ForEachComp = function (pageJson, callBack, compiledJson) {
        var traverse = function (_a) {
            var curJson = _a.curJson, path = _a.path, parentCompJson = _a.parentCompJson, compiledJson = _a.compiledJson;
            for (var i = 0; i < curJson.length; i++) {
                var compJson = curJson[i];
                var cJson = compiledJson === null || compiledJson === void 0 ? void 0 : compiledJson[i];
                if (!compJson) {
                    continue;
                }
                path.push(i);
                if (callBack(compJson, path.map(function (item) { return item; }), { compName: compJson.T, eID: compJson._Editor.eID, parentCompJson: parentCompJson, compiledJson: cJson }) === false) {
                    return false;
                }
                if (compJson.C) {
                    for (var childNamed in compJson.C) {
                        path.push(childNamed);
                        if (traverse({ curJson: compJson.C[childNamed].c, path: path, parentCompJson: compJson, compiledJson: cJson === null || cJson === void 0 ? void 0 : cJson.C[childNamed].c }) === false) {
                            return false;
                        }
                        path.pop();
                    }
                }
                path.pop();
            }
        };
        traverse({ curJson: pageJson, path: [], compiledJson: compiledJson });
    };
    /**
     * @deprecated Please use QJsonHelper.FindParentArrayPath
     */
    QJsonHelper.prototype.findParentArrayPath = function (path, pageJson) {
        return QJsonHelper.FindParentArrayPath(path, pageJson);
    };
    /**
     * Find json and path with given path in the given pageJson
     * @param path Sample path: [3,default,2]
     * @param pageJson Given pageJson
     * @returns ICompParentLocation
     */
    QJsonHelper.FindParentArrayPath = function (path, pageJson) {
        var e_1, _a;
        var parent = null;
        var selfIndex = path.pop();
        if (path.length == 0) {
            return { selfIndex: selfIndex, parentArray: pageJson, parent: null };
        }
        var target = pageJson;
        try {
            //Sample path: [3,default,2] --> [ {},{},{},{C:{default: [{}, {}, {BURADASIN}]}}  ]
            for (var path_1 = __values(path), path_1_1 = path_1.next(); !path_1_1.done; path_1_1 = path_1.next()) {
                var curPath = path_1_1.value;
                if (new typeHelper_1.TypeHelper().isObject(target)) {
                    parent = target;
                    target = parent.C[curPath].c;
                }
                else { //array
                    target = target[curPath];
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (path_1_1 && !path_1_1.done && (_a = path_1.return)) _a.call(path_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return { selfIndex: selfIndex, parentArray: target, parent: parent };
    };
    /**
     * @deprecated please use QJsonHelper.FindCompBySearchField
     */
    QJsonHelper.prototype.findCompBySearchField = function (pageJson, value, componentPropertySearchKey) {
        if (componentPropertySearchKey === void 0) { componentPropertySearchKey = CompSearchKey.EditorID; }
        return QJsonHelper.FindCompBySearchField(pageJson, value, componentPropertySearchKey);
    };
    /**
     * Search the given pageJson with key and value parameters
     * @param pageJson Given pageJson
     * @param value To be searched value
     * @param componentPropertySearchKey Search key
     * @returns ICompLocation or null
     */
    QJsonHelper.FindCompBySearchField = function (pageJson, value, componentPropertySearchKey) {
        if (componentPropertySearchKey === void 0) { componentPropertySearchKey = CompSearchKey.EditorID; }
        var retVal = null;
        QJsonHelper.ForEachComp(pageJson, function (compJson, curPath) {
            var _a;
            switch (componentPropertySearchKey) {
                case CompSearchKey.PID:
                    if (compJson.P.ID.H == value) {
                        retVal = { compJson: compJson, curPath: curPath };
                        return false;
                    }
                    break;
                case CompSearchKey.Render:
                    if (((_a = compJson.P["Render"]) === null || _a === void 0 ? void 0 : _a.H) == value) {
                        retVal = { compJson: compJson, curPath: curPath };
                        return false;
                    }
                    break;
                case CompSearchKey.EditorID:
                default:
                    if (compJson._Editor.eID == value) {
                        retVal = { compJson: compJson, curPath: curPath };
                        return false;
                    }
                    break;
            }
            return true;
        });
        return retVal;
    };
    /**
     * Parse event parameters
     * @param eventParameters event parameters QS: x, y, z | TS: x: string, y: {a:number}, z: number
     */
    QJsonHelper.ParseParameters = function (eventParameters, handlerLang) {
        if (eventParameters) {
            var paramConverter = handlerLang == "TS" || handlerLang == "JS" ? (function (item) { return ({ name: item.split(":")[0], type: item.split(":")[1] }); }) : (function (item) { return ({ name: item }); });
            return eventParameters.split(",").map(paramConverter);
        }
        return undefined;
    };
    /**
     * Find component json path by EID
     * @returns path Sample path: [3,default,2]
     */
    QJsonHelper.FindCompPathByEID = function (qjson, compEID) {
        var path;
        QJsonHelper.ForEachComp(qjson, function (comp, curPath) { if (comp._Editor.eID == compEID) {
            path = curPath;
            return false;
        } return true; });
        return path;
    };
    return QJsonHelper;
}());
exports.QJsonHelper = QJsonHelper;


/***/ }),

/***/ "../shrimp/helpers/typeHelper.ts":
/*!***************************************!*\
  !*** ../shrimp/helpers/typeHelper.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeHelper = void 0;
var TypeHelper = /** @class */ (function () {
    function TypeHelper() {
    }
    TypeHelper.prototype.isJsonString = function (param) {
        try {
            JSON.parse(param);
        }
        catch (e) {
            return false;
        }
        return true;
    };
    TypeHelper.prototype.GetObjectType = function (param) {
        return Object.prototype.toString.call(param);
    };
    ;
    /** @deprecated use instanceof for typescript type distinction intellisense. ex: if (variable instanceof Array)*/
    TypeHelper.prototype.isArray = function (param) {
        return this.GetObjectType(param) == "[object Array]";
    };
    ;
    TypeHelper.prototype.isString = function (param) {
        return this.GetObjectType(param) === "[object String]";
    };
    ;
    TypeHelper.prototype.isNumber = function (param) {
        return this.GetObjectType(param) === "[object Number]";
    };
    ;
    TypeHelper.prototype.isNull = function (param) {
        return param === null || param === undefined;
    };
    ;
    TypeHelper.prototype.isFunction = function (param) {
        return this.GetObjectType(param) === "[object Function]";
    };
    ;
    TypeHelper.prototype.isObject = function (param) {
        return this.GetObjectType(param) === "[object Object]";
    };
    ;
    TypeHelper.prototype.isBool = function (param) {
        return this.GetObjectType(param) === "[object Boolean]";
    };
    ;
    TypeHelper.prototype.isBooleanConstructor = function (param) {
        return (param === null || param === void 0 ? void 0 : param.toString()) == "function Boolean() { [native code] }";
    };
    TypeHelper.prototype.isStringConstructor = function (param) {
        return (param === null || param === void 0 ? void 0 : param.toString()) == "function String() { [native code] }";
    };
    TypeHelper.prototype.isArrayConstructor = function (param) {
        return (param === null || param === void 0 ? void 0 : param.toString()) == "function Array() { [native code] }";
    };
    TypeHelper.prototype.isObjectConstructor = function (param) {
        return (param === null || param === void 0 ? void 0 : param.toString()) == "function Object() { [native code] }";
    };
    TypeHelper.prototype.isNumberConstructor = function (param) {
        return (param === null || param === void 0 ? void 0 : param.toString()) == "function Number() { [native code] }";
    };
    TypeHelper.prototype.isDateString = function (param) {
        if (!this.isString(param)) {
            return false;
        }
        return !isNaN(Date.parse(param));
    };
    ;
    TypeHelper.prototype.isDate = function (param) {
        return this.GetObjectType(param) === "[object Date]";
    };
    TypeHelper.prototype.isFile = function (param) {
        return this.GetObjectType(param) === "[object File]";
    };
    TypeHelper.prototype.isBlob = function (param) {
        var MyBlob = new Blob([param]);
        return MyBlob instanceof Blob; // true
    };
    TypeHelper.prototype.cloneObject = function (obj) {
        var copy;
        // Handle the 3 simple types, and null or undefined
        if (null == obj || "object" != typeof obj) {
            return obj;
        }
        // Handle Date
        if (obj instanceof Date) {
            copy = new Date();
            copy.setTime(obj.getTime());
            return copy;
        }
        // Handle Array
        if (Array.isArray(obj)) {
            copy = [];
            for (var i = 0, len = obj.length; i < len; i++) {
                copy[i] = this.cloneObject(obj[i]);
            }
            return copy;
        }
        // Handle Object
        if (typeof obj === "object") {
            copy = obj.constructor && obj.constructor.length < 1 ? new obj.constructor() : {};
            for (var attr in obj) {
                if (obj.hasOwnProperty(attr)) {
                    copy[attr] = this.cloneObject(obj[attr]);
                }
            }
            return copy;
        }
        throw new Error("Unable to copy obj! Its type isn't supported.");
    };
    ;
    return TypeHelper;
}());
exports.TypeHelper = TypeHelper;


/***/ }),

/***/ "./src/components/editorRendering/GhostConstants.ts":
/*!**********************************************************!*\
  !*** ./src/components/editorRendering/GhostConstants.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.GhostContants = void 0;
var GhostContants = /** @class */ (function () {
    function GhostContants() {
    }
    GhostContants.Name = "Ghost";
    return GhostContants;
}());
exports.GhostContants = GhostContants;


/***/ }),

/***/ "./src/managers/system/inspireTree/inspireTreeHelper.ts":
/*!**************************************************************!*\
  !*** ./src/managers/system/inspireTree/inspireTreeHelper.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.InspireTreeHelper = void 0;
var QJsonHelper_1 = __webpack_require__(/*! ../../../../../shrimp/helpers/QJsonHelper */ "../shrimp/helpers/QJsonHelper.ts");
var GhostConstants_1 = __webpack_require__(/*! ../../../components/editorRendering/GhostConstants */ "./src/components/editorRendering/GhostConstants.ts");
var InspireTreeHelper = /** @class */ (function () {
    function InspireTreeHelper() {
    }
    InspireTreeHelper.prototype.createInspireTreeCommands = function (msg, newTree) {
        var _this = this;
        var retVal = [];
        var eachControl = function (newNodes, oldNodes, curPath, pathCounter) {
            var length = newNodes.length > oldNodes.length ? newNodes.length : oldNodes.length;
            for (var i = 0; i < length; i++) {
                pathCounter++;
                var newItem = newNodes[i];
                var oldItem = oldNodes[i];
                var path = curPath.map(function (x) { return x; });
                path.push(pathCounter);
                if (newItem && !oldItem) {
                    retVal.push({ path: path, item: newItem, type: "add" });
                    eachControl(newNodes.slice(i + 1), [], curPath, pathCounter);
                    return;
                }
                else if (!newItem && oldItem) {
                    retVal.push({ path: path, item: oldItem, type: "delete" });
                    pathCounter--;
                    eachControl([], oldNodes.slice(i + 1), curPath, pathCounter);
                    return;
                }
                else if (!_this.isEqual(newItem, oldItem)) {
                    var nextNewItem = newNodes[i + 1];
                    var nextOldItem = oldNodes[i + 1];
                    if (!nextNewItem && !nextOldItem) {
                        retVal.push({ path: path, item: newItem, type: "update" });
                        eachControl(newNodes.slice(i + 1), oldNodes.slice(i + 1), curPath, pathCounter);
                        return;
                    }
                    else if (nextNewItem && !nextOldItem) {
                        retVal.push({ path: path, item: newItem, type: "add" });
                        if (!_this.isEqual(nextNewItem, oldItem)) {
                            eachControl(newNodes.slice(i + 1), [], curPath, pathCounter);
                        }
                        return;
                    }
                    else if (!nextNewItem && nextOldItem) {
                        retVal.push({ path: path, item: oldItem, type: "delete" });
                        pathCounter--;
                        if (!_this.isEqual(newItem, nextOldItem)) {
                            eachControl([], oldNodes.slice(i + 1), curPath, pathCounter);
                        }
                        return;
                    }
                    else {
                        if (_this.isEqual(nextNewItem, oldItem)) {
                            retVal.push({ path: path, item: newItem, type: "add" });
                            eachControl(newNodes.slice(i + 1), oldNodes.slice(i), curPath, pathCounter);
                            return;
                        }
                        else {
                            retVal.push({ path: path, item: oldItem, type: "delete" });
                            pathCounter--;
                            eachControl(newNodes.slice(i), oldNodes.slice(i + 1), curPath, pathCounter);
                            return;
                        }
                    }
                }
                else {
                    var newItemChildren = _this.getSafeChildNode(newItem.children);
                    var oldItemChildren = _this.getSafeChildNode(oldItem.children);
                    var childCurPath = curPath.map(function (x) { return x; });
                    childCurPath.push(pathCounter);
                    eachControl(newItemChildren, oldItemChildren, childCurPath, -1);
                }
            }
        };
        eachControl(newTree, msg.currentTreeData, [], -1);
        return retVal;
    };
    InspireTreeHelper.prototype.isEqual = function (left, right) {
        if (!left && !right) {
            return true;
        }
        if (!left || !right) {
            return false;
        }
        return left.text == right.text;
    };
    InspireTreeHelper.prototype.getSafeChildNode = function (item) {
        if (!item || item === true) {
            return [];
        }
        return item;
    };
    InspireTreeHelper.prototype.createInspireTreeEditorDisplayName = function (gm, pageJson) {
        if (!pageJson) {
            return {};
        }
        var editorDisplayNames = {};
        QJsonHelper_1.QJsonHelper.ForEachComp(pageJson, function (compJson, path) {
            var componentPim = gm.getComponentPim(compJson.T);
            if (componentPim === null || componentPim === void 0 ? void 0 : componentPim.EditorDisplayName) {
                if (!editorDisplayNames[compJson.T]) {
                    editorDisplayNames[compJson.T] = componentPim.EditorDisplayName;
                }
            }
            return true;
        });
        return editorDisplayNames;
    };
    InspireTreeHelper.prototype.createInspireTreeJson = function (pageJson, editorDisplayNames) {
        var _this = this;
        if (!pageJson) {
            return [];
        }
        var inspireTree = [];
        QJsonHelper_1.QJsonHelper.ForEachComp(pageJson, function (compJson, path) {
            var traverse = function (compJson, isChildComp) {
                var tempObj = _this.createInspireItem(compJson, editorDisplayNames === null || editorDisplayNames === void 0 ? void 0 : editorDisplayNames[compJson.T]);
                Object.keys(compJson.C).forEach(function (key) {
                    var childrenArray = compJson.C[key].c.filter(function (item) { return item != null; });
                    childrenArray.map(function (childComp) {
                        tempObj["children"] = tempObj["children"] || [];
                        var childNode;
                        if (childComp === null || childComp === void 0 ? void 0 : childComp.C) {
                            childNode = traverse(childComp, true);
                        }
                        else {
                            childNode = _this.createInspireItem(childComp, editorDisplayNames === null || editorDisplayNames === void 0 ? void 0 : editorDisplayNames[childComp.T]);
                        }
                        tempObj["children"].push(childNode);
                    });
                });
                if (!isChildComp) {
                    inspireTree.push(tempObj);
                }
                else {
                    return tempObj;
                }
            };
            traverse(compJson, (path === null || path === void 0 ? void 0 : path.length) == 1 ? false : true);
            return true;
        });
        return inspireTree;
    };
    InspireTreeHelper.prototype.createInspireItem = function (compJson, editorDisplayName) {
        var _a;
        var tempObj = {
            text: (editorDisplayName !== null && editorDisplayName !== void 0 ? editorDisplayName : compJson.T) + '(' + compJson.P.ID.H + ')',
            EID: compJson._Editor.eID,
            compType: compJson.T,
            O: { cType: (_a = compJson.O) === null || _a === void 0 ? void 0 : _a.cType },
        };
        if (compJson.T == GhostConstants_1.GhostContants.Name) {
            tempObj.itree = { state: { "drop-target": false, draggable: false, /*"drag-targeting": false,*/ selectable: false, focused: false, selected: false } };
        }
        if (compJson.O && Object.keys(compJson.O).length === 0) {
            tempObj.itree = { state: { "drop-target": false } };
        }
        return tempObj;
    };
    return InspireTreeHelper;
}());
exports.InspireTreeHelper = InspireTreeHelper;


/***/ }),

/***/ "./worker/inspireTreeWorker.ts":
/*!*************************************!*\
  !*** ./worker/inspireTreeWorker.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.InspireTreeWorker = void 0;
var inspireTreeHelper_1 = __webpack_require__(/*! ../src/managers/system/inspireTree/inspireTreeHelper */ "./src/managers/system/inspireTree/inspireTreeHelper.ts");
var InspireTreeWorker = /** @class */ (function () {
    function InspireTreeWorker() {
        this.inspireTreeHelper = new inspireTreeHelper_1.InspireTreeHelper();
    }
    return InspireTreeWorker;
}());
exports.InspireTreeWorker = InspireTreeWorker;
var ctx = self;
var itw = new InspireTreeWorker();
ctx.onmessage = function (e) {
    var msg = e.data;
    var treeData = itw.inspireTreeHelper.createInspireTreeJson(msg.pjson, msg.editorDisplayNames);
    if (msg.recreate) {
        createResponse({ treeData: treeData, recreate: msg.recreate });
        return;
    }
    var comamnds = itw.inspireTreeHelper.createInspireTreeCommands(msg, treeData);
    createResponse({ comamnds: comamnds, treeData: treeData, recreate: msg.recreate });
};
var createResponse = function (response) {
    ctx.postMessage(response);
};
exports.default = null;


/***/ })

/******/ });
});
//# sourceMappingURL=inspireTreeWorker.js.map