import axios from "axios";

export async function fetchUsers() {
  const promise = axios.get("https://jsonplaceholder.typicode.com/users");
  const response = await promise;
  return response.data;
}

export async function fetchUserById(id) {
  const promise = axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  const response = await promise;
  return response.data;
}
