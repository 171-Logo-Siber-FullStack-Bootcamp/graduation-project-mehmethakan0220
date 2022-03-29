import  axios from "axios";

async function login(url, data) {
  return await saveToken(url, data);
}

function basicLogin(url) {
  return basicSaveToken(url);
}

function basicSaveToken(url) {
  axios
    .post(url)
    .then((res) => {
      console.log("basic login response:",res)
      setConfig(res.data.token);
      window.location.href = "/";
      return res.data;
    })
    .catch((err) => {
      console.log("Login failed" + err);
    });
}

function register(url, data) {
  return postData(url, data);
}

async function getProducts(url) {
  return await getData(url);
}

async function getCategories(url) {
  return await getData(url);
}
async function getCategoriesByPath(url) {
  return await getData(url);
}
async function getProductsByCategoryId(url) {
  return await getData(url);
}

async function addToUsersCard(url,data) {
  return await postData(url,data);
}

async function getCardItemsByUserId(url,data) {
  return await postData(url,data);
}

async function getAllImagesByProductId(url) {
  return await postData(url);
}

// function deleteNewsItem(url, config) {
//   config = getConfig();
//   deleteData(url, config);
// }



// function deleteProject(url, config) {
//   config = getConfig();
//   deleteData(url, config);
// }

// function deleteData(url, config) {
//   let result = axios
//     .delete(url, config)
//     .then((res) => {
//       console.log(res.data);
//       return res.data;
//     })
//     .catch((err) => {
//       return console.log(err);
//     });
//   return result;
// }



function postData(url, data) {
  const config = getConfig();
  let request = axios
    .post(url, data, config)
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      return err;
    });
  return request;
}

async function getData(url) {
  let result = await axios.get(url)
  .then((res) => {
    return res.data;
  }).catch(err=>{
      console.error("apiClientError:",err);
  });
  return result;
}

async function saveToken(url, data) {
  let result = await axios
    .post(url, data)
    .then((res) => {
      setConfig(res.data.token);
      // window.location.href = "/";
      return res.data;
    })
    .catch((err) => {
      console.log("Login failed" + err);
    });
    return result;
}

function getConfig() {
  return {
    headers: {
      Authorization: "Bearer " + window.localStorage.getItem("token"),
    },
  };
}

function setConfig(token) {
  window.localStorage.setItem("token", token);
}
// const proxy = 'http://localhost:3000';

export const Api = {

  getProducts: async () => await  getProducts("/api/product" ),
  getProductById: async (id) => await  getProducts("/api/product/"+id),
  getProductsByCategoryId: async (id) => await getProductsByCategoryId("/api/product/categoryid/"+id),
  
  getCategories: async () => await  getCategories("/api/product/category" ),
  getCategoriesByPath: async (path) => await  getCategoriesByPath("/api/product/category/"+path),

  addToUsersCard:async(product) => await addToUsersCard("/api/sepet/",product),
  getCardItemsByUserId: async(data) => await getCardItemsByUserId("/api/sepet/all",data),

  getAllImagesByProductId: async(id) => await getAllImagesByProductId("/api/images/"+id),

  
  register: (data) => register("/register", data),
  login: async (data) => await login("/api/login", data),
  basicLogin: () => basicLogin("/api/login"),


};

export default Api;
