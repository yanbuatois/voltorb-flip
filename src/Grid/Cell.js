import Memo from './Memo.js';

export default class Cell {
  /**
   * If the cell contains a mine.
   * @type {boolean}
   */
  #mine;

  /**
   * The value of the cell.
   * @type {number}
   */
  #value;

  /**
   * If the cell is covered.
   * @type {boolean}
   */
  #covered = true;

  /**
   * Memo on the case.
   * @type {Memo}
   */
  #memo = new Memo();

  /**
   * @param {boolean} [mine=false] If the cell contains a mine.
   * @param {number} [value=1] The value of the cell if it's not a mine.
   * @param {Grid} [grid=null] The grid to which belongs this cell.
   */
  constructor({
    mine = false,
    value = mine ? 0 : 1,
  } = {}) {
    this.#mine = mine;
    this.#value = value;
  }

  /**
   * If the cell contains a mine.
   * @returns {boolean}
   */
  get mine() {
    return this.#mine;
  }

  /**
   * The value of the cell (0 if there is a mine).
   * @returns {number}
   */
  get value() {
    return this.#mine ? 0 : this.#value;
  }

  /**
   * If the cell is covered
   * @returns {boolean}
   */
  get covered() {
    return this.#covered;
  }

  /**
   * The memo of the cell.
   * @returns {Memo}
   */
  get memo() {
    return this.#memo;
  }

  /**
   * Uncovers the cell.
   * @returns {number} The actual value of the uncovered cell. 0 If it's a mine.
   */
  uncover() {
    this.#covered = false;
    this.memo.clear();
    return this.value;
  }
};
