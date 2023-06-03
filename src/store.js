import { contactList } from "./services/contacts-service.js"

async function fetchContacts() {
  const contacts = await contactList()
  this.contacts = contacts
  this.favorites = contacts.filter((favorite) => favorite.favorite == true)
  // this == STORE
}
const STORE = {
  user: null,
  contacts: [],
  favorites: [],
  fetchContacts
}

export default STORE