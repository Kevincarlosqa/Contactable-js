import { login, logout} from "./src/services/sessions-service.js";

const credentials = {
	email: "test@mail.com",
	password: "123456"
}

login(credentials)
  .then(user => console.log(user))
  .catch(error => console.error(error))

logout().then((response) => console.log(response))

