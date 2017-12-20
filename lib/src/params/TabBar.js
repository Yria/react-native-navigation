const { isEmpty } = require('lodash');

class TabBar {
  /**
   * @typedef {Object} TabBar
   * @property {string} [currentTabId]
   * @property {number} [currentTabIndex]
   * @property {boolean} [hidden]
   * @property {boolean} [animateHide]
   */
  constructor(params) {
    if (isEmpty(params)) {
      return;
    }
    this.currentTabId = params.currentTabId;
    this.currentTabIndex = params.currentTabIndex;
    this.hidden = params.hidden;
    this.animateHide = params.animateHide;
  }
}

module.exports = TabBar;
