import { input } from "../components/input.js";

function render() {
  console.log("sign u");
  return `
  <main class="section">
    <section class="container">
      <h1 class="heading heading--lg text-center mb-4">Login</h1>
      <form class="flex flex-column gap-4 mb-4 js-login-form">

        ${input({
          label: "email",
          id: "email",
          name: "email",
          placeholder: "jhon@example.com",
          type: "email",
          required: true,
          value: "test@mail.com",
        })}


        ${input({
          label: "password",
          id: "password",
          name: "password",
          placeholder: "********",
          type: "password",
          required: true,
          value: "123456",
        })}        

       
     
      </form>
 
    </section>
  </main>`
}

const signUpPage = {
  toString() {
    return render();
  },
  addListeners() {
    // listenSubmitForm.call(this)
 
  },    
}

export default signUpPage