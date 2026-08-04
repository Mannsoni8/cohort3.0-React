// import { api } from "../../../config/api";

// export const loginUserApi = async (creadentials) => {
//   try {
//     let res = await api.post("/auth/login", creadentials);
//     localStorage.setItem("accessToken", res.data.accessToken);
//     return res.data;
//   } catch (error) {
//     console.log("error in login api", error);
//   }
// };

// export const hydrateUser = async () => {
//   let token = localStorage.getItem("accessToken");

//   try {
//     let res = await api.get("/auth/me", {
//       headers: {
//         Authorization: `Beare ${token}`,
//       },
//     });
//     return res.data;
//   } catch (error) {
//     console.log("error in login api", error);
//   }
// };
