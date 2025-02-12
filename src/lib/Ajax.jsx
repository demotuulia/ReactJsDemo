/**
 * A mock class for the API for some read only requests
 * 
 */
class Ajax {

  /**
   * Function for the GET requests
   * 
   * @param {*} url       // request url
   * @param {*} params    // parameters 
   * @returns  []
   */
  get(url, params) {
    switch (url) {
      case '/api/users':
        return [
          { id: 23, name: "Nuri", familyName: "Smith", age: 28, city: "Amsterdam", type: 'admin', photo: '/avatars/homme.png' },
          { id: 34, name: "Talib", familyName: "Brown", age: 82, city: "Zaandam", type: 'editor', photo: '/avatars/homme_1.png' },
          { id: 32, name: "Jenny", familyName: "Johnson", age: 41, city: "Amsterdam", type: 'graduate', photo: '/avatars/femme.png' },
          { id: 65, name: "Jim", familyName: "Williams", age: 28, city: "Zaandam", type: 'student', photo: '/avatars/homme_2.png' },
          { id: 45, name: "Anna", familyName: "Jones", age: 32, city: "Utrecht", type: 'graduate', photo: '/avatars/femme_1.png' },
          { id: 22, name: "Mary", familyName: "Gracia", age: 28, city: "Amsterdam", type: 'admin', photo: '/avatars/femme_1.png' },
          { id: 87, name: "Tim", familyName: "Miller", age: 82, city: "Zaandam", type: 'editor', photo: '/avatars/homme.png' },
          { id: 55, name: "Eva", familyName: "Davis", age: 41, city: "Amsterdam", type: 'graduate', photo: '/avatars/femme_2.png' },
          { id: 43, name: "Mark", familyName: "Rodrquez", age: 28, city: "Utrecht", type: 'student', photo: '/avatars/homme_1.png' },
          { id: 27, name: "Maria", familyName: "Lopez", age: 32, city: "Amsterdam", type: 'editor', photo: '/avatars/femme_1.png' },
          { id: 23, name: "Nuri", familyName: "Wilson", age: 28, city: "Zaandam", type: 'admin', photo: '/avatars/homme.png' },
          { id: 134, name: "Ron", familyName: "Anderson", age: 82, city: "Utrecht", type: 'editor', photo: '/avatars/homme_1.png' },
          { id: 132, name: "Isabella", familyName: "Thomas", age: 41, city: "Hilversum", type: 'graduate', photo: '/avatars/femme.png' },
          { id: 165, name: "Mike", familyName: "Taylor", age: 28, city: "Amsterdam", type: 'student', photo: '/avatars/homme_2.png' },
          { id: 145, name: "Evelyn", familyName: "Moore", age: 32, city: "Utrecht", type: 'admin', photo: '/avatars/femme_1.png' },
          { id: 122, name: "Viloet", familyName: "Jackson", age: 28, city: "Zaandam", type: 'admin', photo: '/avatars/femme_1.png' },
          { id: 187, name: "Ronald", familyName: "Martin", age: 82, city: "Utrecht", type: 'editor', photo: '/avatars/homme.png' },
          { id: 155, name: "Nora", familyName: "Perez", age: 41, city: "Hilversum", type: 'graduate', photo: '/avatars/femme_2.png' },
          { id: 143, name: "Henry", familyName: "Lee", age: 28, city: "Hilversum", type: 'student', photo: '/avatars/homme_1.png' },
          { id: 127, name: "Ella", familyName: "Thomson", age: 32, city: "Hilversum", type: 'student', photo: '/avatars/femme_1.png' },
        ];
      case '/api/usertypes':
        return [ "admin","editor", "graduate","student","all",];
    }
  }
}

export default Ajax;