import 'regenerator-runtime/runtime';
import axios from 'axios';

const ROOT_URL = 'https://cashflow-25af.restdb.io/rest';
const API_KEY = '5fb016e98639597288385388'

const httpClient = axios.create({
  baseURL: ROOT_URL,
  timeout: 10_000,
  headers: {'x-apikey': API_KEY}
});

export default httpClient;
