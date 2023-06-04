import DOMHandler from "../dom-handler.js";
import homePage from "./home-page.js";
import { login } from "../services/sessions-service.js";
import { input } from "../components/input.js";
import STORE from "../store.js";

function render() {
  const loginError = this.state.loginError
  return `
  <main class="section">
    <section class="container">
      <h1 class="heading heading--lg text-center mb-4">Login</h1>
      <form class="flex flex-column gap-4 mb-4 js-login-form">

        ${input({
          label: "email",
          id: "email",
          name: "email",
          placeholder: "jhon@example.com",
          type: "email",
          required: true,
          value: "test@mail.com",
        })}


        ${input({
          label: "password",
          id: "password",
          name: "password",
          placeholder: "********",
          type: "password",
          required: true,
          value: "123456",
        })}        
        ${loginError?  `<p class="text-center error-300"> ${loginError}</p>`:""}
       
        <button class="button button--primary">Login</button>
      </form>
      <a href="#" class="block text-center js-signup-link">Signup</a>
    </section>
  </main>`
}

function listenSubmitForm() {
  // console.log(this);
  const form = document.querySelector(".js-login-form")
  // async function por que va a esperar al login
  form.addEventListener("submit", async (event) => {

    try {
      event.preventDefault()
  
      const { email, password} = event.target.elements
  
      const credentials = {
        email: email.value,
        password: password.value
      }
  
      const user = await login(credentials)
      STORE.user = user
      await STORE.fetchContacts()
      
      // console.log(STORE);
      DOMHandler.load(homePage)
      
    } catch (error) {
      // STORE.loginError = error.message
      this.state.loginError = error.message
      DOMHandler.reload()
      console.log(error);
    }

  })
}
const loginPage = {
  toString() {
    return render.call(this);
  },
  addListeners() {
    listenSubmitForm.call(this)
  },
  state: {
   loginError: null
  }
    
}

export default loginPage