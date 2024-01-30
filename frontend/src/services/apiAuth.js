import axios from "axios";

export async function signup({ name, email, password, passwordConfirm }) {
  const url = `http://localhost:3000/api/v1/users/signup`;
  const { data, error } = await axios.post(url, {
    name,
    email,
    password,
    passwordConfirm,
  });
  localStorage.setItem("role", data.data.user.role);
  localStorage.setItem("token", data.token);
  localStorage.setItem("id", data.data.user._id);
  if (error) throw new Error(error.message);

  return data;
}

export async function login({ email, password }) {
  const url = `http://localhost:3000/api/v1/users/login`;
  const { data, error } = await axios.post(url, {
    email,
    password,
  });
  // console.log(data.data.user.role);
  localStorage.setItem("role", data.data.user.role);
  localStorage.setItem("token", data.token);
  localStorage.setItem("id", data.data.user._id);
  console.log(data.token);
  if (error) throw new Error(error.message);

  return data;
}

export async function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("role");
  localStorage.removeItem("id");
}
