export default class Memo {
  /**
   * Set used to store the memo
   * @type {Set<number>}
   */
  #set = new Set();

  /**
   * Clears the memo
   */
  clear() {
    this.#set.clear();
  }

  /**
   * Check if value is present in the memo.
   * @param {number} value
   * @returns {boolean}
   */
  has(value) {
    return this.#set.has(value);
  }

  /**
   * Writes a number to the memo.
   * @param {number} value
   */
  add(value) {
    const numValue = +value;
    if (Number.isNaN(numValue) || !Number.isSafeInteger(numValue) || numValue < 0) {
      throw new Error(`The value ${value} cannot be stored by the memo.`);
    }
    this.#set.add(value);
  }

  /**
   * Removes a value from the memo.
   * @param {number} value
   */
  delete(value) {
    this.#set.delete(value);
  }

  /**
   * If the value is written in the memo, deletes it. Else, adds it.
   * @param {number} value
   */
  toggle(value) {
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
  getSortedArray() {
    return [...this.#set].sort((a, b) => a - b);
  }
}
