import axios from 'axios';

const api = axios.create({
  baseURL: `https://coronavirus-19-api.herokuapp.com/countries`,
})

const headers = {
  mode: 'cors',
  cache: 'default'
}

async function getCountry(country: string) {
  return api.get(country, {headers})
}

export default getCountry;