import axios from "axios";

export async function signup({ name, email, password, passwordConfirm }) {
  const url = `http://localhost:3000/api/v1/users/signup`;
  const { data, error } = await axios.post(url, {
    name,
    email,
    password,
    passwordConfirm,
  });
  localStorage.setItem("token", data.data);
  if (error) throw new Error(error.message);

  return data;
}

export async function login({ email, password }) {
  const url = `http://localhost:3000/api/v1/users/login`;
  const { data, error } = await axios.post(url, {
    email,
    password,
  });
  localStorage.setItem("token", data.data);
  if (error) throw new Error(error.message);

  return data;
}
