import STORE from "../store.js"
import { logout } from "../services/sessions-service.js";
import DOMHandler from "../dom-handler.js";
import loginPage from "./login-page.js";
import homePage from "./home-page.js";
import editContact from "./edit-contact-page.js";
import { deleteContact } from "../services/contacts-service.js";

function renderDetail() {
  const contact = STORE.contacts.filter((contact) => contact.id == STORE.contactId)
  return `
  <header class="header">
  <navbar class="navbar">
    <h1 class="heading heading--lg mb-2">Contact Detail</h1>
    <a class="js-logout">Logout</a>
  </navbar>
  </header>
  <main class="section">
    <section class="container">
      <h3>${contact[0].name}</h3>
      <p>${contact[0].relation}</p>
      <p>Number: ${contact[0].number}</p>
      <p>Email: ${contact[0].email}</p>
      
      <a class="js-back">Back</a>
      <a class="js-delete-contact">Delete</a>
      <a class="js-edit-contact">Edit</a>
    </section>
  </main>
  `
}

function deleteContactDetail() {
  const a = document.querySelector(".js-delete-contact")
  a.addEventListener("click", async (event) => {
    event.preventDefault()
    try {
      const contact = STORE.contacts.filter((contact) => contact.id == STORE.contactId)
      deleteContact(contact[0].id)
      await STORE.fetchContacts().then(DOMHandler.load(homePage))
      

    } catch (error) {
      console.log(error);
    }
  })
}

function listenEdit() {
  const a = document.querySelector(".js-edit-contact")
  a.addEventListener("click", async (event) => {
    event.preventDefault()
    try {
      DOMHandler.load(editContact)

    } catch (error) {
      console.log(error);
    }
  })
}

function listenBack() {
  const a = document.querySelector(".js-back")
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

const contactDetail = {
  toString() {
    return renderDetail()
  },
  addListeners() {
    listenLogout()
    listenBack()
    listenEdit()
    deleteContactDetail()
  },
}



export default contactDetail