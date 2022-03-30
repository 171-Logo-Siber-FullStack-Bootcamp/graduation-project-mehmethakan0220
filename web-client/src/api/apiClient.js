import  axios from "axios";

async function login(url, data) {
  return await saveToken(url, data);
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
async function getCategoriesTree(url) {
  return await getData(url);
}
async function getCategoriesByPath(url) {
  return await getData(url);
}
async function getProductsByCategoryId(url) {
  return await getData(url);
}
async function getProductsByCategoryPath(url) {
  return await getData(url);
}

async function getProductsByElasticSearch(url,data) {
  return await postData(url,data);
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


function postData(url, data) {
  const config = getConfig();
  let request = axios
    .post(url, data, config)
    .then((res) => {
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
      console.error(err);
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
  getProductsByCategoryPath: async (path) => await getProductsByCategoryPath("/api/product/categorypath/"+path),
  getProductsByElasticSearch: async (data) => await getProductsByElasticSearch("/api/products",data),
  
  getCategories: async () => await  getCategories("/api/product/category" ),
  getCategoriesTree: async () => await  getCategoriesTree("/api/product/category/detailed" ),
  getCategoriesByPath: async (path) => await  getCategoriesByPath("/api/product/category/"+path),

  addToUsersCard:async(product) => await addToUsersCard("/api/sepet/",product),
  getCardItemsByUserId: async(data) => await getCardItemsByUserId("/api/sepet/all",data),

  getAllImagesByProductId: async(id) => await getAllImagesByProductId("/api/images/"+id),

  
  register: (data) => register("/register", data),
  login: async (data) => await login("/api/login", data)


};

export default Api;
