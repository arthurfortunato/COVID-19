import axios from 'axios';

export const api = axios.create({
  baseURL: `https://coronavirus-19-api.herokuapp.com/countries`
})
