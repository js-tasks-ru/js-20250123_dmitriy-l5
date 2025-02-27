/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter (path) {
  return function (object) {
    const array = path.split('.')
    let item = object
    for (let i = 0; i < array.length; i++) {
      if (!item) return undefined
      if (!item.hasOwnProperty(array[i])) return undefined
      item = item[array[i]]
    }
    return item
  }
}
