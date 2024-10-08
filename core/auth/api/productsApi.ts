import axios from 'axios';

// TODO: conectar mediante envs vars, Android e IOS

const productsApi = axios.create({
  baseURL: 'localhost:3000/api',
});

// TODO: interceptores

export { productsApi };
