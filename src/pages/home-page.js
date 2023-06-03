import STORE from "../store.js";

function render() {
  return `
    <header class="header">
      <navbar class="navbar">
        <h1 class="heading heading--lg mb-2">Contactable</h1>
        <a>Logout</a>
      </navbar>
    </header>
    <main class="section">
      <section class="container">
        <p class="">CONTACTS()</p>
        <a>New Contact</a>
      </section>
    </main>
  `
}
const homePage = {
  toString() {
    // console.log(STORE.contacts);
    // console.log(STORE.favorites);
    return render()
  },
  addListeners() {},
}

export default homePage