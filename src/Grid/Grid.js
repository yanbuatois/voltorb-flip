import _ from 'lodash';

/**
 * @typedef {Object} Indication Indication for row or column
 * @property {number} mines Number of mines in the group.
 * @property {number} coefficients Sum of coefficients in the group.
 */

export default class Grid {
  /**
   * Width of the grid.
   * @type {number}
   */
  #width;

  /**
   * Height of the grid.
   * @type {number}
   */
  #height;

  /**
   * Number of mines in the grid.
   * @type {number}
   */
  #mines;

  /**
   * Minimal sum of coefficients generated.
   * @type {number}
   */
  #minimumCoefficients;

  /**
   * Maximal coefficients that a cell can have.
   * @type {number}
   */
  #maximalCoefficient;

  /**
   * Level of the game.
   * @type {number}
   */
  #level;

  /**
   * All cells in the grid.
   * @type {Array<Cell>}
   */
  #cellsArray = [];

  /**
   * If the grid is interrupted.
   * @type {boolean}
   */
  #interrupted = false;

  /**
   * @param {number} [width=5] Width of the grid.
   * @param {number} [height=5] Height of the grid.
   * @param {number} [level=1] Level of the game.
   * @param {number} [mines=6] Number of mines in the game. Default 5 + level.
   * @param {number} [minimumCoefficients=9] Number of coefficients to be in the game. Default 8 + level.
   * @param {number} [maximalCoefficient=3] Maximal coefficient of the cell.
   * @throws {Error} If the parameters are invalid or inconsistents.
   */
  constructor ({
    width = 5,
    height = 5,
    level = 1,
    mines = Math.floor(Math.sqrt(width * height)) + level,
    minimumCoefficients = 8 + level,
    maximalCoefficient = 3,
  } = {}) {
    if (level <= 0) {
      throw new Error(`The level ${level} is invalid. It should be strictly positive.`);
    }
    if (width <= 0) {
      throw new Error(`The width ${width} is invalid. It should be strictly positive.`);
    }
    if (height <= 0) {
      throw new Error(`The height ${height} is invalid. It should be strictly positive.`);
    }
    if (mines > width * height) {
      throw new Error(`There are ${mines} mines for only ${width * height} cells.`);
    }
    if ((((width * height) - mines) * maximalCoefficient) < minimumCoefficients) {
      throw new Error(`Minimum coefficient ${minimumCoefficients} cannot be reach with only ${width * height} cells, ${mines} mines and ${maximalCoefficient} maximal coefficient.`);
    }
    this.#width = width;
    this.#height = height;
    this.#mines = mines;
    this.#minimumCoefficients = minimumCoefficients;
    this.#maximalCoefficient = maximalCoefficient;
    this.#level = level;

    this.#cellsArray = this._generateGrid();
  }

  /**
   * Total number of cells in the grid.
   * @returns {number}
   * @private
   */
  get _nbCells() {
    return this.#width * this.#height;
  }

  /**
   * Number of cells without mines.
   * @returns {number}
   * @private
   */
  get _nbNormalCells() {
    return this._nbCells - this.#mines;
  }

  /**
   * Generates the cells grid.
   * @returns {Cell[]}
   * @private
   */
  _generateGrid() {
    const grid = [];
    for (let i = 0; i < this.#mines; ++i) {
      grid.push(new Cell({mine: true}));
    }

    const normalCoeffs = [];
    for (let i = 0; i < this._nbNormalCells; ++i) {
      normalCoeffs.push(1);
    }

    let total = this.#minimumCoefficients;
    const normalCoeffsLength = normalCoeffs.length;
    let index = 0;
    let noNewCoeffs = true;
    while (total >= 0) {
      const currentCoeff = normalCoeffs[index];
      if (currentCoeff < this.#maximalCoefficient) {
        noNewCoeffs = false;
        const possibleEvolution = this.#maximalCoefficient - currentCoeff;
        if (_.random()) {
          const evolution = _.random(1, possibleEvolution);
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
    grid.push(...normalCoeffs.map(value => new Cell({value})));

    return _.shuffle(grid);
  }

  getCell(line, column) {
    return this.#cellsArray[(line * this.#width) + column];
  }

  getLine(line) {
    return this.#cellsArray.slice(line * this.#width, ((line + 1) * this.#width))
  }

  getColumn(column) {
    return this.#cellsArray.filter((value, index) => (index % this.#width) === column);
  }

  /**
   * Tells how many coefficients and mines there is in a line of the grid.
   * @param {Array<Cell>} line Index of the line on which we want indications.
   * @returns {Indication}
   */
  getLineIndications(line) {
    return this._getGroupIndications(this.getLine(line));
  }

  /**
   * Tells how many coefficients and mines there is in a column of the grid.
   * @param {Array<Cell>} column Index of the column on which we want indications.
   * @returns {Indication}
   */
  getColumnIndications(column) {
    return this._getGroupIndications(this.getColumn(column));
  }

  /**
   * Tells how many coefficients and mines there is in group of cells.
   * @param {Array<Cell>} group Cells on which we need to get indications
   * @returns {Indication}
   * @private
   */
  _getGroupIndications(group) {
    return group.reduce(({mines, coefficients}, {mine, value}) => ({
      mines: mines + ((mine) ? 1 : 0),
      coefficients: coefficients + value,
    }), {
      mines: 0,
      coefficients: 0,
    });
  }

  /**
   * Interrupts the game.
   * @returns {number} The score of the game.
   */
  interrupt() {
    this.#interrupted = true;
    return this.score;
  }

  /**
   * If the players has lost
   * @return {boolean}
   */
  get lost() {
    return this.#cellsArray.some(({mine, covered}) => (mine && !covered));
  }

  /**
   * If player has uncovered all coefficients higher than 1, he wons.
   * @return {boolean}
   */
  get won() {
    return this.#cellsArray.every(({mine, covered, value}) => (mine || (value <= 1) || !covered));
  }

  /**
   * Counts uncovered cells without mine.
   * @return {number}
   */
  get nbUncoveredGoodCells() {
    return this.#cellsArray.reduce((acc, elt) => acc + ((!elt.covered && !elt.mine) ? 1 : 0), 0);
  }

  /**
   * Score of the grid. Zero if the players has lost.
   * @return {number}
   */
  get score() {
    return this.nbUncoveredGoodCells === 0 ? 0 : this.#cellsArray.reduce((acc, elt) => acc * (elt.covered ? 1 : elt.value), 1);
  }

  /**
   * If the player interrupted the grid.
   * @returns {boolean}
   */
  get interrupted() {
    return this.#interrupted;
  }

  /**
   * If the grid is still playing
   * @returns {boolean}
   */
  get playing() {
    return !(this.interrupted || this.lost || this.won);
  }

  /**
   * Generate an iterator over lines.
   * @returns {Generator<Cell[], void, *>}
   */
  *linesIterator() {
    for (let index = 0; index < this.#height; ++i) {
      yield this.getLine(index);
    }
  }

  /**
   * Generates an iterator over columns.
   * @returns {Generator<Cell[], void, *>}
   */
  *columnsIterator() {
    for (let index = 0; index < this.#width; ++i) {
      yield this.getColumn(index);
    }
  }
};
