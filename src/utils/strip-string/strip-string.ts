
/**
 * 
 * @param {string} str 
 * @returns string
 */
export const stripString = (str) => {
    return str.toLowerCase().replace(/[\s]+/g, '')
}