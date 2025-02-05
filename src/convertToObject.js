'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssProperties = {};
  const splittedString = sourceString.split(';');

  for (const currentElement of splittedString) {
    const splitElements = currentElement.split(':');

    if (splitElements.length === 2) {
      cssProperties[splitElements[0].trim()] = splitElements[1].trim();
    }
  }

  return cssProperties;
}

module.exports = convertToObject;
