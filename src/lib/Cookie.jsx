/**
 * A class to manage cookies
 */

class Cookie {

    /**
     * Set an array as cookie
     * @param {*} name 
     * @param {*} array 
     * @returns void
     */
    static setArrayCookie(name, array) {
        return Cookie.setCookie(name, JSON.stringify(array));
    }

    /**
     * Get an array as cookie
     * @param {*} name 
     * @returns array
     */
    static getArrayCookie(name) {

        let result = Cookie.getCookie(name);
        if (result == '') {
            return [];
        }
        return JSON.parse(result);
    }

    /**
     * Set cookie 
     * @param {*} name 
     * @param {*} value 
     */
    static setCookie(name, value) {
        let expires = new Date()
        expires.setTime(expires.getTime() + 3600);
        document.cookie = name + "=" + value //+ "; expires=" + expires;
    }

    /**
     * Get cookie 
     * @param {*} cname 
     * @returns 
     */
    static getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }


    static eraseCookie(name) {   
        document.cookie = name+'=; Max-Age=-99999999;';  
    }
}

export default Cookie;