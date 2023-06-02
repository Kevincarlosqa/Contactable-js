import { tokenKey, BASE_URI } from "../config.js";


async function contactList() {
    const response = await fetch(`${BASE_URI}contacts`, {
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
    const response = await fetch(`${BASE_URI}contacts/${id}`, {
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


async function createContact(newContact) {

    const response = await fetch(`${BASE_URI}/contacts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token token=${sessionStorage.getItem(tokenKey)}`,
      },
      body: JSON.stringify(newContact)
    })

    if(!response.ok) {
      const data = await response.json()
      throw new Error(data.errors)
    }

    console.log(response);
    const data = await response.json();

    return data
}

async function deleteContact(id) {
    const token = sessionStorage.getItem(tokenKey)

    const response = await fetch(`${BASE_URI}/contacts/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Token token=${token}`,
      },
    })

    let data
      try {
        data = await response.json()
      } catch (error) {
        data = response.statusText
      }

    if (!response.ok) {
      data = await response.json() 
      throw new Error(data.errors)
    }

    return data
}
  
  export { contactList, showContact, createContact, deleteContact }