import { input } from "../components/input.js"
import DOMHandler from "../dom-handler.js"
import homePage from "./home-page.js"
import { logout } from "../services/sessions-service.js"
import loginPage from "./login-page.js"

function renderNewContact() {
  return `
    <header class="header">
    <navbar class="navbar">
      <h1 class="heading heading--lg mb-2">Create new Contact</h1>
      <a class="js-logout">Logout</a>
    </navbar>
    </header>
    <main class="section">
      <section class="container">
        <form class="flex flex-column gap-4 mb-4 js-login-form">

        ${input({
         
          id: "newName",
          name: "newName",
          placeholder: "Name",
          type: "text",
          required: true,
          
        })}

        ${input({
          
          id: "newNumber",
          name: "newNumber",
          placeholder: "Number",
          type: "tel",
          required: true,
          
        })}     
        
        ${input({
  
          id: "newEmail",
          name: "newEmail",
          placeholder: "Email",
          type: "email",
          required: true,
        })}

      
        <button class="button button--primary">Save</button>
        </form>
      </section>
    </main>
    <a class="js-cancel">Cancel</a>
    <a>Save</a>
  `
}

function listenCancel() {
  const a = document.querySelector(".js-cancel")
  a.addEventListener("click", async (event) => {
    event.preventDefault()
    try {
      DOMHandler.load(homePage)

    } catch (error) {
      console.log(error);
    }
  })
}

function listenLogout() {
  const a = document.querySelector(".js-logout")
  a.addEventListener("click", async (event) => {
    event.preventDefault()
    try {
      await logout()
      loginPage.state.loginError = null
      DOMHandler.load(loginPage)

    } catch (error) {
      console.log(error);
    }
  })
}

const createContact = {
  toString() {
   return renderNewContact()
  },
  addListeners() {
    listenCancel(),
    listenLogout()
  },
}

export default createContact