import { logout } from "../services/sessions-service.js"
import { input } from "../components/input.js"
import DOMHandler from "../dom-handler.js"
import homePage from "./home-page.js"
import loginPage from "./login-page.js"
import STORE from "../store.js"
import contactDetail from "./contact-detail.js"

function renderEditContact() {
  const contact = STORE.contacts.filter((contact) => contact.id == STORE.contactId)
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
          value: `${contact[0].name}`,
          
        })}

        ${input({
          
          id: "newNumber",
          name: "newNumber",
          placeholder: "Number",
          type: "tel",
          required: true,
          value: `${contact[0].number}`,
          
        })}     
        
        ${input({
  
          id: "newEmail",
          name: "newEmail",
          placeholder: "Email",
          type: "email",
          required: true,
          value: `${contact[0].email}`,
        })}

      
        
        </form>
        <a class="js-cancel">Cancel</a>
        <a>Save</a>
      </section>
    </main>
  `
}

function listenCancel() {
  const a = document.querySelector(".js-cancel")
  a.addEventListener("click", async (event) => {
    event.preventDefault()
    try {
      DOMHandler.load(contactDetail)

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

const editContact = {
  toString() {
   return renderEditContact()
  },
  addListeners() {
    listenCancel(),
    listenLogout()
  },
}

export default editContact