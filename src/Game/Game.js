import Grid from '../Grid/Grid.js';

export default class Game {
  /**
   * Score of the game.
   * @type {number}
   */
  #score = 0;

  /**
   * Level of the game.
   * @type {number}
   */
  #level = 1;

  /**
   * Max level of the game.
   * @type {number}
   */
  #maxLevel = 8;

  /**
   * Current grid.
   * @type {Grid}
   */
  #grid;

  /**
   * Maximal coefficient of each cell.
   * @type {number}
   */
  #maximalCoefficient = 3;

  /**
   * Width of each grid of the game.
   * @type {number}
   */
  #width = 5;

  /**
   * Height of each grid of the game.
   * @type {number}
   */
  #height = 5;

  /**
   * @param {number} [startingLevel=1]
   * @param {number} [width=5]
   * @param {number} [height=5]
   * @param {number} [maximalCoefficient=3]
   * @param {number} [maxLevel=8]
   * @param {number} [score=0] Default score for the game.
   */
  constructor({
    startingLevel = 1,
    width = 5,
    height = 5,
    maximalCoefficient = 3,
    maxLevel = 8,
    score = 0,
  } = {}) {
    this.#level = startingLevel;
    this.#score = score;
    this.#width = width;
    this.#height = height;
    this.#maximalCoefficient = maximalCoefficient;
    this.#maxLevel = maxLevel;
    this.#grid = new Grid({
      width,
      height,
      level: this.#level,
      maximalCoefficient,
    });
  }

  /**
   * Level of the game.
   * @returns {number}
   */
  get level() {
    return this.#level;
  }

  /**
   * Total score of the game.
   * @returns {number}
   */
  get score() {
    return this.#score;
  }

  /**
   * Current grid.
   * @returns {Grid}
   */
  get grid() {
    return this.#grid;
  }

  /**
   * Level of the next grid.
   * @returns {number}
   */
  get nextLevel() {
    return this.grid.won ?
      (this.#level >= this.#maxLevel ? this.#maxLevel : this.#level + 1) :
      (this.grid.lost ?
        (this.grid.nbUncoveredGoodCells >= this.#level ?
          (this.#level) :
            (this.grid.nbUncoveredGoodCells >= 1) ? this.grid.nbUncoveredGoodCells : 1) :
        (this.#level));
  }

  /**
   * Launch next level and save the score. The previous grid should **be finished**
   * @return {Grid} The new grid.
   * @throws {Error} If the grid hasn't ended.
   */
  gotoNextLevel() {
    if (this.grid.playing) {
      throw new Error('Please finish the current grid before going to another.');
    }
    const {grid} = this;
    this.#score += grid.score;
    this.#grid = new Grid({
      width: this.#width,
      height: this.#height,
      level: this.nextLevel,
      maximalCoefficient: this.#maximalCoefficient,
    });

    return this.#grid;
  }

  /**
   * Reset the score to 0.
   * @return {number} The previous score.
   */
  resetScore() {
    const score = this.#score;
    this.#score = 0;
    return score;
  }
}
