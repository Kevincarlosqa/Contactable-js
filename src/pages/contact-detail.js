import STORE from "../store.js"
import { logout } from "../services/sessions-service.js";
import DOMHandler from "../dom-handler.js";
import loginPage from "./login-page.js";
import homePage from "./home-page.js";

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
      
    </section>
  </main>
  <a class="js-back">Back</a>
  <a>Delete</a>
  <a>Edit</a>
  `
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
  },
}

export default contactDetail