/**
 * Copyright (c) 2015-present, Haltu Oy
 * Released under the MIT license
 * https://github.com/haltu/muuri/blob/master/LICENSE.md
 */

import getStyleAsFloat from './getStyleAsFloat';

var positionValue = {};

/**
 * Returns the element's computed left and top values as floats.
 * The returned object is always the same object and updated every time this
 * function is called.
 *
 * @param {HTMLElement} element
 * @returns {Object}
 */
export default function getPositionStyle(element) {
  positionValue.x = getStyleAsFloat(element, 'left') || 0;
  positionValue.y = getStyleAsFloat(element, 'top') || 0;
  return positionValue;
}
