import { login, logout, signUp } from "./src/services/sessions-service.js";
import { contactList, showContact, createContact, deleteContact } from "./src/services/contacts-service.js";

import DOMHandler from "./src/dom-handler.js";
import loginPage from "./src/pages/login-page.js";
import homePage from "./src/pages/home-page.js";
import { tokenKey } from "./src/config.js";
import STORE from "./src/store.js";

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

// login(credentials).then(() => init())
// // .then(user => console.log(user.token))
// .catch(error => console.error(error))

// createContact(newContact).then(data => console.log(data))
// .catch(error => console.error(error))

// showContact(1).then(data => console.log(data))
// .catch(error => console.error(error))


// logout()

// signUp(newuser)

// DOMHandler.load(homePage)

async function init() {
	//logica de Inicio
	try {
		const token = sessionStorage.getItem(tokenKey)
		if(!token) throw new Error
		console.log(STORE.user);
		await STORE.fetchContacts()
		DOMHandler.load(homePage)
	} catch (error) {
		sessionStorage.removeItem(tokenKey)
		DOMHandler.load(loginPage)
		console.log(error);
	}
}

init()
