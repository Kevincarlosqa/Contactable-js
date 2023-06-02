import { login, logout, signUp } from "./src/services/sessions-service.js";
import { contactList } from "./src/services/contacts-service.js";

const credentials = {
	email: "test@mail.com",
	password: "123456"
}

const newuser = {
  email: "joel@mail.com",
	password: "qwerty"
}

login(credentials)
.then(user => console.log(user))
.catch(error => console.error(error))

contactList().then(data => console.log(data))
.catch(error => console.error(error))


// logout()

// signUp(newuser)
