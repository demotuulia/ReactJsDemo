/**
 * Helper functions
 * 
 */
class Helpers {

    /**
     * Convert the first letter of a string to capital
     * 
     * @param string 
     * @returns string 
     */
    static firstToUppercase(string) {
        if (typeof string != "string" || string == '') {
            return '';
        }
        return string.replace(/^./, string[0].toUpperCase())
    }
}
export default Helpers;