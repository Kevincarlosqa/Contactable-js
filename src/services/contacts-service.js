import { tokenKey, BASE_URI } from "../config.js";


async function contactList() {
    const response = await fetch(`${BASE_URI}/contacts`, {
      method: "GET",
      headers: {
        Authorization: `Token token=${sessionStorage.getItem(tokenKey)}`,
      }
    })
  
    if(!response.ok) {
      const data = await response.json()
      throw new Error(data.errors)
    }
    console.log(response);
    const data = await response.json();
  
    return data
}

async function showContact(id) {
    const response = await fetch(`${BASE_URI}/contacts/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Token token=${sessionStorage.getItem(tokenKey)}`,
      }
    })
  
    if(!response.ok) {
      const data = await response.json()
      throw new Error(data.errors)
    }
    console.log(response);  
    const data = await response.json();
  
    return data
  }
  
  export { contactList }