import axios from "axios";

export const getAllProduct = async (limit, pageParam = 1) => {
  try {
    let api = await axios.get(
      `https://fakestoreapi.com/products?likit=${limit}&skip=${pageParam}`,
    );
    return api.data;
  } catch (error) {
    console.log("error in api", error);
  }
};
