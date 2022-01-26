import axios from 'axios'

const api = axios.create({ baseURL: 'https://unicorn.zernico.de/api' })

export { api, axios }
