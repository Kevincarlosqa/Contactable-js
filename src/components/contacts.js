import STORE from "../store.js";
import contactDetail from "../pages/contact-detail.js";
import DOMHandler from "../dom-handler.js";

function renderContacts(contact) {
  return `
  <li>
    <a data-id=${contact.id}>${contact.name}</a>
  </li>
`
}

function renderFavoriteContacts(favoriteContacts) {
  if(favoriteContacts){
    return `
        <li>
          <a>${favoriteContacts.name}</a>
        </li>
    `
  } else{
    return `""`
  }
}

function listenContact(){
  const ul = document.querySelector(".js-contact-list")
  ul.addEventListener("click", async (event) => {

    event.preventDefault()
    const showContact = event.target.closest("[data-id]")
    // this.contact.id = showContact
    if(!showContact) return
    STORE.contactId = showContact.getAttribute('data-id')
    console.log(STORE.contactId);
    // console.log(showContact.dataset.id);
    DOMHandler.load(contactDetail)
  })

}

function render(){
  const contacts = STORE.contacts
  const favorites = STORE.favorites
  console.log(favorites);
  console.log(contacts);
  if(favorites){
    return `
      <p class="">FAVORITES</p>
      <ul>
        ${favorites.map(contact => renderFavoriteContacts(contact)).join("")}
      </ul>
      <p class="">CONTACTS(${STORE.contacts.length})</p>
      <ul class="js-contact-list">
        ${contacts.map(contact => renderContacts(contact)).join("")}
      </ul>
    `
  } else {
    return `
      <p class="">CONTACTS(${STORE.contacts.length})</p>
      <ul>
        ${contacts.map(contact => renderContacts(contact)).join("")}
      </ul>
    `
  }
}

const contacts = {
  toString() {
    return render.call(this)
  },
  addListeners() {
    listenContact.call(this)
  },
}
export default contacts