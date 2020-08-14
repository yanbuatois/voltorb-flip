module.exports =
(window["webpackJsonpvoltorbFlip"] = window["webpackJsonpvoltorbFlip"] || []).push([["main"],{

/***/ "./src/Game/Game.js":
/*!**************************!*\
  !*** ./src/Game/Game.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
/* harmony import */ var _Grid_Grid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Grid/Grid.js */ "./src/Grid/Grid.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }



var _score = new WeakMap();

var _level = new WeakMap();

var _maxLevel = new WeakMap();

var _grid = new WeakMap();

var _maximalCoefficient = new WeakMap();

var _width = new WeakMap();

var _height = new WeakMap();

var Game = /*#__PURE__*/function () {
  /**
   * Score of the game.
   * @type {number}
   */

  /**
   * Level of the game.
   * @type {number}
   */

  /**
   * Max level of the game.
   * @type {number}
   */

  /**
   * Current grid.
   * @type {Grid}
   */

  /**
   * Maximal coefficient of each cell.
   * @type {number}
   */

  /**
   * Width of each grid of the game.
   * @type {number}
   */

  /**
   * Height of each grid of the game.
   * @type {number}
   */

  /**
   * @param {number} [startingLevel=1]
   * @param {number} [width=5]
   * @param {number} [height=5]
   * @param {number} [maximalCoefficient=3]
   * @param {number} [maxLevel=8]
   * @param {number} [score=0] Default score for the game.
   */
  function Game() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$startingLevel = _ref.startingLevel,
        startingLevel = _ref$startingLevel === void 0 ? 1 : _ref$startingLevel,
        _ref$width = _ref.width,
        width = _ref$width === void 0 ? 5 : _ref$width,
        _ref$height = _ref.height,
        height = _ref$height === void 0 ? 5 : _ref$height,
        _ref$maximalCoefficie = _ref.maximalCoefficient,
        maximalCoefficient = _ref$maximalCoefficie === void 0 ? 3 : _ref$maximalCoefficie,
        _ref$maxLevel = _ref.maxLevel,
        maxLevel = _ref$maxLevel === void 0 ? 8 : _ref$maxLevel,
        _ref$score = _ref.score,
        score = _ref$score === void 0 ? 0 : _ref$score;

    _classCallCheck(this, Game);

    _score.set(this, {
      writable: true,
      value: 0
    });

    _level.set(this, {
      writable: true,
      value: 1
    });

    _maxLevel.set(this, {
      writable: true,
      value: 8
    });

    _grid.set(this, {
      writable: true,
      value: void 0
    });

    _maximalCoefficient.set(this, {
      writable: true,
      value: 3
    });

    _width.set(this, {
      writable: true,
      value: 5
    });

    _height.set(this, {
      writable: true,
      value: 5
    });

    _classPrivateFieldSet(this, _level, startingLevel);

    _classPrivateFieldSet(this, _score, score);

    _classPrivateFieldSet(this, _width, width);

    _classPrivateFieldSet(this, _height, height);

    _classPrivateFieldSet(this, _maximalCoefficient, maximalCoefficient);

    _classPrivateFieldSet(this, _maxLevel, maxLevel);

    _classPrivateFieldSet(this, _grid, new _Grid_Grid_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
      width,
      height,
      level: _classPrivateFieldGet(this, _level),
      maximalCoefficient
    }));
  }
  /**
   * Level of the game.
   * @returns {number}
   */


  _createClass(Game, [{
    key: "gotoNextLevel",

    /**
     * Launch next level and save the score. The previous grid should **be finished**
     * @return {Grid} The new grid.
     * @throws {Error} If the grid hasn't ended.
     */
    value: function gotoNextLevel() {
      if (this.grid.playing) {
        throw new Error('Please finish the current grid before going to another.');
      }

      var grid = this.grid;

      _classPrivateFieldSet(this, _score, _classPrivateFieldGet(this, _score) + grid.score);

      _classPrivateFieldSet(this, _grid, new _Grid_Grid_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
        width: _classPrivateFieldGet(this, _width),
        height: _classPrivateFieldGet(this, _height),
        level: this.nextLevel,
        maximalCoefficient: _classPrivateFieldGet(this, _maximalCoefficient)
      }));

      return _classPrivateFieldGet(this, _grid);
    }
    /**
     * Reset the score to 0.
     * @return {number} The previous score.
     */

  }, {
    key: "resetScore",
    value: function resetScore() {
      var score = _classPrivateFieldGet(this, _score);

      _classPrivateFieldSet(this, _score, 0);

      return score;
    }
  }, {
    key: "level",
    get: function get() {
      return _classPrivateFieldGet(this, _level);
    }
    /**
     * Total score of the game.
     * @returns {number}
     */

  }, {
    key: "score",
    get: function get() {
      return _classPrivateFieldGet(this, _score);
    }
    /**
     * Current grid.
     * @returns {Grid}
     */

  }, {
    key: "grid",
    get: function get() {
      return _classPrivateFieldGet(this, _grid);
    }
    /**
     * Level of the next grid.
     * @returns {number}
     */

  }, {
    key: "nextLevel",
    get: function get() {
      return this.grid.won ? _classPrivateFieldGet(this, _level) >= _classPrivateFieldGet(this, _maxLevel) ? _classPrivateFieldGet(this, _maxLevel) : _classPrivateFieldGet(this, _level) + 1 : this.grid.lost ? this.grid.nbUncoveredGoodCells >= _classPrivateFieldGet(this, _level) ? _classPrivateFieldGet(this, _level) : this.grid.nbUncoveredGoodCells >= 1 ? this.grid.nbUncoveredGoodCells : 1 : _classPrivateFieldGet(this, _level);
    }
  }]);

  return Game;
}();



/***/ }),

/***/ "./src/Grid/Cell.js":
/*!**************************!*\
  !*** ./src/Grid/Cell.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cell; });
/* harmony import */ var _Memo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Memo.js */ "./src/Grid/Memo.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }



var _mine = new WeakMap();

var _value = new WeakMap();

var _covered = new WeakMap();

var _memo = new WeakMap();

var Cell = /*#__PURE__*/function () {
  /**
   * If the cell contains a mine.
   * @type {boolean}
   */

  /**
   * The value of the cell.
   * @type {number}
   */

  /**
   * If the cell is covered.
   * @type {boolean}
   */

  /**
   * Memo on the case.
   * @type {Memo}
   */

  /**
   * @param {boolean} [mine=false] If the cell contains a mine.
   * @param {number} [value=1] The value of the cell if it's not a mine.
   * @param {Grid} [grid=null] The grid to which belongs this cell.
   */
  function Cell() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$mine = _ref.mine,
        mine = _ref$mine === void 0 ? false : _ref$mine,
        _ref$value = _ref.value,
        value = _ref$value === void 0 ? mine ? 0 : 1 : _ref$value;

    _classCallCheck(this, Cell);

    _mine.set(this, {
      writable: true,
      value: void 0
    });

    _value.set(this, {
      writable: true,
      value: void 0
    });

    _covered.set(this, {
      writable: true,
      value: true
    });

    _memo.set(this, {
      writable: true,
      value: new _Memo_js__WEBPACK_IMPORTED_MODULE_0__["default"]()
    });

    _classPrivateFieldSet(this, _mine, mine);

    _classPrivateFieldSet(this, _value, value);
  }
  /**
   * If the cell contains a mine.
   * @returns {boolean}
   */


  _createClass(Cell, [{
    key: "uncover",

    /**
     * Uncovers the cell.
     * @returns {number} The actual value of the uncovered cell. 0 If it's a mine.
     */
    value: function uncover() {
      _classPrivateFieldSet(this, _covered, true);

      return this.value;
    }
  }, {
    key: "mine",
    get: function get() {
      return _classPrivateFieldGet(this, _mine);
    }
    /**
     * The value of the cell (0 if there is a mine).
     * @returns {number}
     */

  }, {
    key: "value",
    get: function get() {
      return _classPrivateFieldGet(this, _mine) ? 0 : _classPrivateFieldGet(this, _value);
    }
    /**
     * If the cell is covered
     * @returns {boolean}
     */

  }, {
    key: "covered",
    get: function get() {
      return _classPrivateFieldGet(this, _covered);
    }
    /**
     * The memo of the cell.
     * @returns {Memo}
     */

  }, {
    key: "memo",
    get: function get() {
      return _classPrivateFieldGet(this, _memo);
    }
  }]);

  return Cell;
}();


;

/***/ }),

/***/ "./src/Grid/Grid.js":
/*!**************************!*\
  !*** ./src/Grid/Grid.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Grid; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }


/**
 * @typedef {Object} Indication Indication for row or column
 * @property {number} mines Number of mines in the group.
 * @property {number} coefficients Sum of coefficients in the group.
 */

var _width = new WeakMap();

var _height = new WeakMap();

var _mines = new WeakMap();

var _minimumCoefficients = new WeakMap();

var _maximalCoefficient = new WeakMap();

var _level = new WeakMap();

var _cellsArray = new WeakMap();

var _interrupted = new WeakMap();

var Grid = /*#__PURE__*/function () {
  /**
   * Width of the grid.
   * @type {number}
   */

  /**
   * Height of the grid.
   * @type {number}
   */

  /**
   * Number of mines in the grid.
   * @type {number}
   */

  /**
   * Minimal sum of coefficients generated.
   * @type {number}
   */

  /**
   * Maximal coefficients that a cell can have.
   * @type {number}
   */

  /**
   * Level of the game.
   * @type {number}
   */

  /**
   * All cells in the grid.
   * @type {Array<Cell>}
   */

  /**
   * If the grid is interrupted.
   * @type {boolean}
   */

  /**
   * @param {number} [width=5] Width of the grid.
   * @param {number} [height=5] Height of the grid.
   * @param {number} [level=1] Level of the game.
   * @param {number} [mines=6] Number of mines in the game. Default 5 + level.
   * @param {number} [minimumCoefficients=9] Number of coefficients to be in the game. Default 8 + level.
   * @param {number} [maximalCoefficient=3] Maximal coefficient of the cell.
   * @throws {Error} If the parameters are invalid or inconsistents.
   */
  function Grid() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$width = _ref.width,
        width = _ref$width === void 0 ? 5 : _ref$width,
        _ref$height = _ref.height,
        height = _ref$height === void 0 ? 5 : _ref$height,
        _ref$level = _ref.level,
        level = _ref$level === void 0 ? 1 : _ref$level,
        _ref$mines = _ref.mines,
        mines = _ref$mines === void 0 ? Math.floor(Math.sqrt(width * height)) + level : _ref$mines,
        _ref$minimumCoefficie = _ref.minimumCoefficients,
        minimumCoefficients = _ref$minimumCoefficie === void 0 ? 8 + level : _ref$minimumCoefficie,
        _ref$maximalCoefficie = _ref.maximalCoefficient,
        maximalCoefficient = _ref$maximalCoefficie === void 0 ? 3 : _ref$maximalCoefficie;

    _classCallCheck(this, Grid);

    _width.set(this, {
      writable: true,
      value: void 0
    });

    _height.set(this, {
      writable: true,
      value: void 0
    });

    _mines.set(this, {
      writable: true,
      value: void 0
    });

    _minimumCoefficients.set(this, {
      writable: true,
      value: void 0
    });

    _maximalCoefficient.set(this, {
      writable: true,
      value: void 0
    });

    _level.set(this, {
      writable: true,
      value: void 0
    });

    _cellsArray.set(this, {
      writable: true,
      value: []
    });

    _interrupted.set(this, {
      writable: true,
      value: false
    });

    if (level <= 0) {
      throw new Error("The level ".concat(level, " is invalid. It should be strictly positive."));
    }

    if (width <= 0) {
      throw new Error("The width ".concat(width, " is invalid. It should be strictly positive."));
    }

    if (height <= 0) {
      throw new Error("The height ".concat(height, " is invalid. It should be strictly positive."));
    }

    if (mines > width * height) {
      throw new Error("There are ".concat(mines, " mines for only ").concat(width * height, " cells."));
    }

    if ((width * height - mines) * maximalCoefficient < minimumCoefficients) {
      throw new Error("Minimum coefficient ".concat(minimumCoefficients, " cannot be reach with only ").concat(width * height, " cells, ").concat(mines, " mines and ").concat(maximalCoefficient, " maximal coefficient."));
    }

    _classPrivateFieldSet(this, _width, width);

    _classPrivateFieldSet(this, _height, height);

    _classPrivateFieldSet(this, _mines, mines);

    _classPrivateFieldSet(this, _minimumCoefficients, minimumCoefficients);

    _classPrivateFieldSet(this, _maximalCoefficient, maximalCoefficient);

    _classPrivateFieldSet(this, _level, level);

    _classPrivateFieldSet(this, _cellsArray, this._generateGrid());
  }
  /**
   * Total number of cells in the grid.
   * @returns {number}
   * @private
   */


  _createClass(Grid, [{
    key: "_generateGrid",

    /**
     * Generates the cells grid.
     * @returns {Cell[]}
     * @private
     */
    value: function _generateGrid() {
      var grid = [];

      for (var _i = 0; _i < _classPrivateFieldGet(this, _mines); ++_i) {
        grid.push(new Cell({
          mine: true
        }));
      }

      var normalCoeffs = [];

      for (var _i2 = 0; _i2 < this._nbNormalCells; ++_i2) {
        normalCoeffs.push(1);
      }

      var total = _classPrivateFieldGet(this, _minimumCoefficients);

      var normalCoeffsLength = normalCoeffs.length;
      var index = 0;
      var noNewCoeffs = true;

      while (total >= 0) {
        var currentCoeff = normalCoeffs[index];

        if (currentCoeff < _classPrivateFieldGet(this, _maximalCoefficient)) {
          noNewCoeffs = false;
          var possibleEvolution = _classPrivateFieldGet(this, _maximalCoefficient) - currentCoeff;

          if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.random()) {
            var evolution = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.random(1, possibleEvolution);

            normalCoeffs[index] += evolution;
            total -= evolution;
          }
        }

        ++index;

        if (index >= normalCoeffsLength) {
          if (noNewCoeffs) {
            break;
          }

          index %= normalCoeffsLength;
          noNewCoeffs = true;
        }
      }

      grid.push.apply(grid, _toConsumableArray(normalCoeffs.map(function (value) {
        return new Cell({
          value
        });
      })));
      return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.shuffle(grid);
    }
  }, {
    key: "getCell",
    value: function getCell(line, column) {
      return _classPrivateFieldGet(this, _cellsArray)[line * _classPrivateFieldGet(this, _width) + column];
    }
  }, {
    key: "getLine",
    value: function getLine(line) {
      return _classPrivateFieldGet(this, _cellsArray).slice(line * _classPrivateFieldGet(this, _width), (line + 1) * _classPrivateFieldGet(this, _width));
    }
  }, {
    key: "getColumn",
    value: function getColumn(column) {
      var _this = this;

      return _classPrivateFieldGet(this, _cellsArray).filter(function (value, index) {
        return index % _classPrivateFieldGet(_this, _width) === column;
      });
    }
    /**
     * Tells how many coefficients and mines there is in a line of the grid.
     * @param {Array<Cell>} line Index of the line on which we want indications.
     * @returns {Indication}
     */

  }, {
    key: "getLineIndications",
    value: function getLineIndications(line) {
      return this._getGroupIndications(this.getLine(line));
    }
    /**
     * Tells how many coefficients and mines there is in a column of the grid.
     * @param {Array<Cell>} column Index of the column on which we want indications.
     * @returns {Indication}
     */

  }, {
    key: "getColumnIndications",
    value: function getColumnIndications(column) {
      return this._getGroupIndications(this.getColumn(column));
    }
    /**
     * Tells how many coefficients and mines there is in group of cells.
     * @param {Array<Cell>} group Cells on which we need to get indications
     * @returns {Indication}
     * @private
     */

  }, {
    key: "_getGroupIndications",
    value: function _getGroupIndications(group) {
      return group.reduce(function (_ref2, _ref3) {
        var mines = _ref2.mines,
            coefficients = _ref2.coefficients;
        var mine = _ref3.mine,
            value = _ref3.value;
        return {
          mines: mines + (mine ? 1 : 0),
          coefficients: coefficients + value
        };
      }, {
        mines: 0,
        coefficients: 0
      });
    }
    /**
     * Interrupts the game.
     * @returns {number} The score of the game.
     */

  }, {
    key: "interrupt",
    value: function interrupt() {
      _classPrivateFieldSet(this, _interrupted, true);

      return this.score;
    }
    /**
     * If the players has lost
     * @return {boolean}
     */

  }, {
    key: "linesIterator",

    /**
     * Generate an iterator over lines.
     * @returns {Generator<Cell[], void, *>}
     */
    value: /*#__PURE__*/regeneratorRuntime.mark(function linesIterator() {
      var index;
      return regeneratorRuntime.wrap(function linesIterator$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              index = 0;

            case 1:
              if (!(index < _classPrivateFieldGet(this, _height))) {
                _context.next = 7;
                break;
              }

              _context.next = 4;
              return this.getLine(index);

            case 4:
              ++i;
              _context.next = 1;
              break;

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, linesIterator, this);
    })
    /**
     * Generates an iterator over columns.
     * @returns {Generator<Cell[], void, *>}
     */

  }, {
    key: "columnsIterator",
    value: /*#__PURE__*/regeneratorRuntime.mark(function columnsIterator() {
      var index;
      return regeneratorRuntime.wrap(function columnsIterator$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              index = 0;

            case 1:
              if (!(index < _classPrivateFieldGet(this, _width))) {
                _context2.next = 7;
                break;
              }

              _context2.next = 4;
              return this.getColumn(index);

            case 4:
              ++i;
              _context2.next = 1;
              break;

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, columnsIterator, this);
    })
  }, {
    key: "_nbCells",
    get: function get() {
      return _classPrivateFieldGet(this, _width) * _classPrivateFieldGet(this, _height);
    }
    /**
     * Number of cells without mines.
     * @returns {number}
     * @private
     */

  }, {
    key: "_nbNormalCells",
    get: function get() {
      return this._nbCells - _classPrivateFieldGet(this, _mines);
    }
  }, {
    key: "lost",
    get: function get() {
      return _classPrivateFieldGet(this, _cellsArray).some(function (_ref4) {
        var mine = _ref4.mine,
            covered = _ref4.covered;
        return mine && !covered;
      });
    }
    /**
     * If player has uncovered all coefficients higher than 1, he wons.
     * @return {boolean}
     */

  }, {
    key: "won",
    get: function get() {
      return _classPrivateFieldGet(this, _cellsArray).every(function (_ref5) {
        var mine = _ref5.mine,
            covered = _ref5.covered,
            value = _ref5.value;
        return mine || value <= 1 || !covered;
      });
    }
    /**
     * Counts uncovered cells without mine.
     * @return {number}
     */

  }, {
    key: "nbUncoveredGoodCells",
    get: function get() {
      return _classPrivateFieldGet(this, _cellsArray).reduce(function (acc, elt) {
        return acc + (!elt.covered && !elt.mine ? 1 : 0);
      }, 0);
    }
    /**
     * Score of the grid. Zero if the players has lost.
     * @return {number}
     */

  }, {
    key: "score",
    get: function get() {
      return this.nbUncoveredGoodCells === 0 ? 0 : _classPrivateFieldGet(this, _cellsArray).reduce(function (acc, elt) {
        return acc * (elt.covered ? 1 : elt.value);
      }, 1);
    }
    /**
     * If the player interrupted the grid.
     * @returns {boolean}
     */

  }, {
    key: "interrupted",
    get: function get() {
      return _classPrivateFieldGet(this, _interrupted);
    }
    /**
     * If the grid is still playing
     * @returns {boolean}
     */

  }, {
    key: "playing",
    get: function get() {
      return !(this.interrupted || this.lost || this.won);
    }
  }]);

  return Grid;
}();


;

/***/ }),

/***/ "./src/Grid/Memo.js":
/*!**************************!*\
  !*** ./src/Grid/Memo.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Memo; });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

var _set = new WeakMap();

var Memo = /*#__PURE__*/function () {
  function Memo() {
    _classCallCheck(this, Memo);

    _set.set(this, {
      writable: true,
      value: new Set()
    });
  }

  _createClass(Memo, [{
    key: "clear",

    /**
     * Clears the memo
     */
    value: function clear() {
      _classPrivateFieldGet(this, _set).clear();
    }
    /**
     * Check if value is present in the memo.
     * @param {number} value
     * @returns {boolean}
     */

  }, {
    key: "has",
    value: function has(value) {
      return _classPrivateFieldGet(this, _set).has(value);
    }
    /**
     * Writes a number to the memo.
     * @param {number} value
     */

  }, {
    key: "add",
    value: function add(value) {
      var numValue = +value;

      if (Number.isNaN(numValue) || !Number.isSafeInteger(numValue) || numValue < 0) {
        throw new Error("The value ".concat(value, " cannot be stored by the memo."));
      }

      _classPrivateFieldGet(this, _set).add(value);
    }
    /**
     * Removes a value from the memo.
     * @param {number} value
     */

  }, {
    key: "delete",
    value: function _delete(value) {
      _classPrivateFieldGet(this, _set).delete(value);
    }
    /**
     * If the value is written in the memo, deletes it. Else, adds it.
     * @param {number} value
     */

  }, {
    key: "toggle",
    value: function toggle(value) {
      if (this.has(value)) {
        return this.delete(value);
      } else {
        return this.add(value);
      }
    }
    /**
     * Generates an array from the memo
     * @returns {number[]}
     */

  }, {
    key: "getSortedArray",
    value: function getSortedArray() {
      return _toConsumableArray(_classPrivateFieldGet(this, _set)).sort(function (a, b) {
        return a - b;
      });
    }
  }]);

  return Memo;
}();



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: Grid, Cell, Memo, VotorbFlip, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Grid_Grid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Grid/Grid.js */ "./src/Grid/Grid.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Grid", function() { return _Grid_Grid_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Grid_Cell_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Grid/Cell.js */ "./src/Grid/Cell.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Cell", function() { return _Grid_Cell_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Grid_Memo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Grid/Memo.js */ "./src/Grid/Memo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Memo", function() { return _Grid_Memo_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _Game_Game_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Game/Game.js */ "./src/Game/Game.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VotorbFlip", function() { return _Game_Game_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });






/* harmony default export */ __webpack_exports__["default"] = (_Game_Game_js__WEBPACK_IMPORTED_MODULE_3__["default"]);

/***/ }),

/***/ "lodash":
/*!*************************************************************************************!*\
  !*** external {"commonjs":"lodash","commonjs2":"lodash","amd":"lodash","root":"_"} ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ })

},[["./src/index.js","runtime~main"]]]);
//# sourceMappingURL=main.index.js.map