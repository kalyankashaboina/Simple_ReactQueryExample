import axios from "axios";

export const fetchDatas = async () => {
  const { data } = await axios.get("http://localhost:3000/users");
  return data;
};

export const fetchData = async ({ queryKey }) => {
  const [_, id] = queryKey;
  const { data } = await axios.get(`http://localhost:3000/users/${id}`);
  return data;
};

export const addData = async (user) => {
  const { data } = await axios.post(`http://localhost:3000/users`, user);
  return data;
};

export const deleteData = async (id) => {
  const { data } = await axios.delete(`http://localhost:3000/users/${id}`);
  return data;
};
export const updatePost = async ({ id, updatedpost }) => {
  const { data } = await axios.put(`http://localhost:3000/users/${id}`,updatedpost);
  return data;
};
