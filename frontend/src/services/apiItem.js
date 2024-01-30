import axios from "axios";

export async function createEditCabin(formData) {
  const url = "http://localhost:3000/api/v1/products";
  // const hasImagePath
  const { data, error } = await axios.post(url, formData);

  if (error) throw new Error(error.message);

  return data;
}
