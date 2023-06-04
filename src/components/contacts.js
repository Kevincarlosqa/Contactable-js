import STORE from "../store.js";

function renderContacts(contact) {
  return `
  <li>
    <a>${contact.name}</a>
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
      <ul>
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
    return render()
  },
  addListeners() {

  }
}
export default contacts