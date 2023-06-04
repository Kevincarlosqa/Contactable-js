import { logout } from "../services/sessions-service.js";
import DOMHandler from "../dom-handler.js";
import loginPage from "./login-page.js";
import contacts from "../components/contacts.js";
import createContact from "./create-contact-page.js";
import STORE from "../store.js";

function render() {
  return `
    <header class="header">
      <navbar class="navbar">
        <h1 class="heading heading--lg mb-2">Contactable</h1>
        <a class="js-logout">Logout</a>
      </navbar>
    </header>
    <main class="section">
      <section class="container">
        ${contacts}
        <a class="js-newContact">New Contact</a>
      </section>
    </main>
  `
}

function listenNewContact(){
  const a = document.querySelector(".js-newContact")
  a.addEventListener("click", async (event) => {
    event.preventDefault()
    try {
      console.log("Create contact");
      DOMHandler.load(createContact)

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
const homePage = {
  toString() {
    // console.log(STORE.contacts);
    // console.log(STORE.favorites);
    return render()
  },
  addListeners() {
    listenLogout(),
    contacts.addListeners(),
    listenNewContact()
  },
}

export default homePage