import { login, logout, signUp } from "./src/services/sessions-service.js";
import { contactList, showContact, createContact, deleteContact } from "./src/services/contacts-service.js";

const credentials = {
	email: "test@mail.com",
	password: "123456"
}

// const newuser = {
//   email: "joel@mail.com",
// 	password: "qwerty"
// }

const newContact = {
  name: "Testino",
  email: "test@MediaList.com",
  number: 1234567890,
  relation: "Friends"
}

login(credentials)
.then(user => console.log(user.token))
.catch(error => console.error(error))

// createContact(newContact).then(data => console.log(data))
// .catch(error => console.error(error))

showContact(1).then(data => console.log(data))
.catch(error => console.error(error))


// logout()

// signUp(newuser)
