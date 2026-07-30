export const getProductsDataApi = async () => {
  try {
    const res = await axios.get("https://dummyjson.com/products");
    return res.data.product;
  } catch (error) {
    console.log(error);
  }
};
