import STORE from "../store.js"

function renderDetail() {
  const contact = STORE.contacts.filter((contact) => contact.id == STORE.contactId)
  console.log(contact);
  return `
  <header class="header">
  <navbar class="navbar">
    <h1 class="heading heading--lg mb-2">Contact Detail</h1>
    <a class="js-logout">Logout</a>
  </navbar>
  </header>
  <main class="section">
    <section class="container">
      <p>${contact[0].name}</p>
      <p>Number: ${contact[0].number}</p>
      <p>Email: ${contact[0].email}</p>
      
    </section>
  </main>
  <a>Back</a>
  <a>Delete</a>
  <a>Edit</a>
  `
}



const contactDetail = {
  toString() {
    return renderDetail()
  },
  addListeners() {

  },
}

export default contactDetail