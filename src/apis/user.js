import axios from "axios";

export const getUsers = async () => {
  const response = await axios({
    method: "get",
    url: "https://69cbd3cb0b417a19e07b545d.mockapi.io/api/v1/users",
  });
  return response.data;
};

export const createUser = async (user) => {
  const response = await axios({
    method: "post",
    url: "https://69cbd3cb0b417a19e07b545d.mockapi.io/api/v1/users",
    data: user,
  });
  return response.data;
};

export const updateUser = async (user) => {
  const response = await axios({
    method: "put",
    url: `https://69cbd3cb0b417a19e07b545d.mockapi.io/api/v1/users/${user.id}`,
    data: user,
  });
  return response.data;
};

export const removeUser = async (userId) => {
  await axios({
    method: "delete",
    url: `https://69cbd3cb0b417a19e07b545d.mockapi.io/api/v1/users/${userId}`,
  });
};
