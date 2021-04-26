import axios from 'axios'

//Para executar o json server: json-server ./src/services/server.json --host 192.168.0.120 --port 3333
const api = axios.create({
  baseURL: 'http://192.168.0.156:3333',
});

export default api;