import { tokenKey, BASE_URI } from "../config.js";

// console.log("hiola");
async function login(credentials = {email, password}) {
  const response = await fetch(`${BASE_URI}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials)

  })

  if(!response.ok) {
    const data = await response.json()
    throw new Error(data.errors)
  }
  console.log(response);
  const data = await response.json();
  // console.log(data);
  sessionStorage.setItem(tokenKey, data.token)

  return data
}

async function logout() {
  const token = sessionStorage.getItem(tokenKey)

  console.log(token);

  const response = await fetch(`${BASE_URI}/logout`, {
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
  console.log(response);

  sessionStorage.removeItem(tokenKey)

  return data
}

async function signUp(newuser = {email, password}) {
  const response = await fetch(`${BASE_URI}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newuser)

  })

  if(!response.ok) {
    const data = await response.json()
    throw new Error(data.errors)
  }
  console.log(response);
  const data = await response.json();
  // console.log(data);
  sessionStorage.setItem(tokenKey, data.token)

  return data
}

export  { login, logout, signUp } 