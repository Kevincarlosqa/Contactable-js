import STORE from "../store.js";

function render() {
  return `<h1>Home Page</h1>`;
}
const homePage = {
  toString() {
    console.log(STORE.contacts);
    console.log(STORE.favorites);
    return render()
  },
  addListeners() {},
}

export default homePage