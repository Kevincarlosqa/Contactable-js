import { tokenKey, BASE_URI } from "../config.js";


async function contactList() {
    const response = await fetch(`${BASE_URI}/contacts`, {
      method: "GEt",
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