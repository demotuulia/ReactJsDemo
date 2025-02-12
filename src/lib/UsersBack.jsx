/**
 * A class to manage the users data.
 * 
 * This demo has no API and database, so we handle the
 * user data in array. In with an API this would be a backend
 * class with SQL queries. These functions should be in the backend
 * API.
 * 
 * 
 * This class manages the user data as an array in the cookies.
 * 
 */

import Ajax from './Ajax.jsx';
import Cookie from './Cookie.jsx';

class UsersBack {

    /**
    * User types
    */
    static #userTypes;

    /**
     * Cookie name fpr this application
     */
    static #cookieName = 'reactJsDemo';

    /**
     * Flag to indicate if cookies are refreshed
     */
    static #cookiesRefreshed = false;

    /**
     * usersList 
     * 
     * @param {*} userType   // if defined, filter by this user type
     * @returns []
     */
    static get(userType) {
        let usersList = Cookie.getArrayCookie(this.#cookieName);
        if (usersList.length == 0 || this.#refreshCookies()) {
            // if user list not found in cookies get it from API and 
            // save to cookies
            usersList = new Ajax().get('/api/users', {});
            this.#saveUsersListToCookies(usersList);
        }
        return this.#filter(usersList, userType);
    }

    /**
     * Save users list to cookies
     * 
     * @param {*} usersList 
     */
    static #saveUsersListToCookies(usersList) {
        Cookie.setArrayCookie(this.#cookieName, usersList);
    }

    /**
     * Check if the cookies should be refreshed.
     * 
     * This is for testing and development, all initial values are read from
     * the API.
     * 
     * This can be done by {hostname}/users?refreshCache=refresh
     * 
     * @returns boolean
     */
    static #refreshCookies() {
        if (this.#cookiesRefreshed) {
            // cookies already refreshed
            return false;
        }

        const urlParams = new URLSearchParams(window.location.search);
        const refreshCookies = urlParams.get('refreshCookies');
        return refreshCookies;
    }

    /**
     * Save 
     * 
     * @param {*} user 
     */
    static save(user) {

        let errors = this.#validate(user);
        if (errors.length > 0) {
            return { status: 'error', messages: errors }
        }

        let usersList = this.get();
        if (user.id == undefined) {
            user.id = this.#newId();
            usersList.push(user);
        } else {
            usersList[this.getById(user.id).index] = user;
        }
        this.#saveUsersListToCookies(usersList);
        return {
            status: 'OK',
            messages: ['Item saved']
        }
    }

    /**
     * Validate user form
     * 
     * @param {*} user 
     * @returns array
     */
    static #validate(user) {

        let errors = [];
        let required = [
            { label: 'Name', field: 'name' },
            { label: 'Family Name', field: 'familyName' },
            { label: 'City', field: 'city' },
            { label: 'Age', field: 'age' },
            { label: 'Type', field: 'type' },
        ];

        for (let index = 0; index < required.length; index++) {
            let field = required[index].field;
            if (user[field] == '' || user[field] == null) {
                errors.push(required[index].label + ' is required');
            }
        }
        return errors;
    }

    /**
     * Delete a user
     * 
     * @param int id 
     */
    static delete(id) {
        let usersList = this.get();
        let user = this.getById(id);
        usersList.splice(user.index, 1);
        this.#saveUsersListToCookies(usersList);
    }

    /**
     * Get supported user types
     * 
     * @returns array
     */
    static types() {

        if (this.#userTypes == undefined) {
            this.#userTypes = new Ajax().get('/api/usertypes', {});
        }
        return this.#userTypes;
    }

    /**
     * Get user by id
     * 
     * @param id 
     * @returns {}
     */
    static getById(id) {
        let usersList = this.get();
        if (id == undefined) {
            return { index: 0, data: usersList[0] }
        }

        let index = usersList.findIndex(o => o.id === id);

        return (index >= 0)
            ? { index: index, data: usersList[index] }
            : usersList.length;
    }

    /**
    * Filter users by the type
    * 
    * @param array usersList
    * @param string userType 
    * @returns array
    */
    static #filter(usersList, userType) {

        let selectedUsers = [];
        for (let index = 0; index < usersList.length; index++) {
            if (userType == 'all' || userType == undefined || usersList[index].type == userType) {
                selectedUsers.push(usersList[index]);
            }
        }
        selectedUsers = selectedUsers.sort((a, b) => a.familyName.localeCompare(b.familyName));
        return selectedUsers;
    }

    /**
    * Generate an id for a new user
    * 
    * @returns integer 
    */
    static #newId() {
       
        let usersList = this.get();
        let maxId = Math.max.apply(Math, usersList.map(function(o) { return o.id; }));
        return parseInt(maxId) + 1;
    }

}

export default UsersBack;