export const stripString = (str: string) => {
    return str.toLowerCase().replace(/[\s]+/g, '')
}