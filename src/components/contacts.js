import STORE from "../store.js";

function renderContacts(contact) {
  return `
  <li>
    <p>${contact.name}</p>
  </li>
`
}
function render(){
  const contacts = STORE.contacts
  console.log(contacts);
  return `
    <p>contacts</p>
    <ul>
      ${contacts.map(contact => renderContacts(contact)).join("")}
    </ul>
  `
}

const contacts = {
  toString() {
    return render()
  },
  addListeners() {

  }
}
export default contacts