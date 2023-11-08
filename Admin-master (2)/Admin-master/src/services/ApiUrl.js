const BASE_URL = "http://localhost:8080/api";

export const ApiUrl = {

  login:`${BASE_URL}/user/login`,
  getAllUser: `${BASE_URL}/user/alluser`,
  updateUser: `${BASE_URL}/user/update`,
  getUserbyId: `${BASE_URL}/user`,
  deleteUser: `${BASE_URL}/user/delete`,
  addUser: `${BASE_URL}/user/create`,

  getAllProduct: `${BASE_URL}/product/all`,
  addProduct: `${BASE_URL}/product/create`,
  updateProduct: `${BASE_URL}/product/update`,
  deleteProduct: `${BASE_URL}/product/delete`,
  getProductbyId:  `${BASE_URL}/product`,

  getAllCategory: `${BASE_URL}/category/all`,
  addCategory: `${BASE_URL}/category/create`,
  updateCategory: `${BASE_URL}/category/update`,
  deleteCategory: `${BASE_URL}/category/delete`,

  getAllStore: `${BASE_URL}/store/all`,
  addStore: `${BASE_URL}/store/create`,
  updateStore: `${BASE_URL}/store/update`,
  deleteStore: `${BASE_URL}/store/delete`,
  getStorebyId:  `${BASE_URL}/store`,

  getAllStaff:  `${BASE_URL}/staff/all`,
  deleteStaff:`${BASE_URL}/staff/delete`,
  addStaff: `${BASE_URL}/staff/create`,
  updateStaff: `${BASE_URL}/staff/update`,

addOrder: `${BASE_URL}/order/create`,
updateOrder: `${BASE_URL}/order/update`,
getOrderById: `${BASE_URL}/order`,
deleteOrder:`${BASE_URL}/order/delete`,
};
