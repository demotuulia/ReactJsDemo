/**
 * A class to manage the users in the frontend
 * 
 */

import UsersBack from './UsersBack.jsx';
import Helpers from './Helpers.jsx';

import adminIcon from '/src/assets/userTypes/admin.png';
import editorIcon from '/src/assets/userTypes/editor.png';
import graduateIcon from '/src/assets/userTypes/graduate.png';
import studentIcon from '/src/assets/userTypes/student.png';
import unknownIcon from '/src/assets/userTypes/unknown.png';

class UsersFront {

  static #typeIcons = {
    'admin': adminIcon,
    'editor': editorIcon,
    'graduate': graduateIcon,
    'student': studentIcon,
    'all': unknownIcon
  };

  /**
   * User Photos. In this demo, you cannot upload photos, jus select them
   */
  static #photos =
    {
      '/avatars/appareil-photo.png': 'No photo',
      '/avatars/homme.png': 'Man 1',
      '/avatars/homme_1.png': 'Man 2',
      '/avatars/homme_2.png': 'Man 3',
      '/avatars/femme.png': 'Woman 1',
      '/avatars/femme_1.png': 'Woman 2',
      '/avatars/femme_2.png': 'Woman 3',
    };

  /**
   * Get a type icon
   * 
   * @param {*} type 
   * @returns string
   */
  static typeIcon(type) {
    return this.#typeIcons[type] != undefined
      ? this.#typeIcons[type] : unknownIcon;
  }

  /**
   * Get users
   * 
   * @param string userType  filter  
   * @returns array
   */
  get(userType) {
    return UsersBack.get(userType);
  }

  /**
   * Get user by id
   * 
   * @param id 
   * @returns {}
   */
  getById(id) {
    return UsersBack.getById(id);
  }

  /**
   * Create a new user for the user form
   * 
   * @param {*} type 
   * @returns {*}
   */
  create(type) {
    return {
      id: undefined,
      name: '',
      type: type,
      userTypeLabel: '',
      age: 0,
      city: '',
      photo: '/avatars/appareil-photo.png'
    }
  }

  /**
   * Validate and save an existing or a new user
   * 
   * @param {*} user 
   * @returns {*}
   */
  save(user) {
    return UsersBack.save(user)
  }

  /**
   * Delete a user
   * 
   * @param int id 
   */
  delete(id) {
    UsersBack.delete(id);
  }

  /**
   * Get supported user types
   * 
   * @returns array
   */
  static types() {
    return UsersBack.types();
  }

  /**
   * get the type menu
   * 
   *  * @param options {*}     filterAll   filter option 'all' away 
   */
  static typeMenu(options) {
    let types = UsersBack.types();

    if (options.filterAll != undefined) {
      let index = types.indexOf('all');
      if (index >= 0) {
        types.splice(index, 1);
      }
    }

    return types.map((key) => (
      {
        value: key,
        label: Helpers.firstToUppercase(key)
      }
    ));
  }

  /**
   * Define the label of the user type
   * 
   * @param string type 
   * @returns string
   */
  static typeLabel(type) {
    return Helpers.firstToUppercase(type);
  }

  /**
  * Get the type options
  * 
  * @returns 
  */
  typeOptions() {
    const userTypes = this.types();
    return userTypes.map((userType) =>
    (
      { label: userType.name, value: userType.value }
    )
    )
  }

  /**
   * Get the photos  
   * 
   * @param {*} options   { asMenuOptions: true}  returns the as select menu options 
   * @returns 
   */
  static photos(options) {

    let photos = this.#photos;
    if (options.asMenuOptions == undefined) {
      return photos;
    }

    let menuOptions = [];
    for (const [key, value] of Object.entries(photos)) {
      menuOptions.push({ label: value, value: key });
    }
    return menuOptions;
  }

}

export default UsersFront;