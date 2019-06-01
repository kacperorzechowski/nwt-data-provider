import axios from 'axios'
import { GIPHY_API_KEY as API_KEY, GIPHY_HOST as HOST } from '@/config'

const Giphy = axios.create({
  baseURL: HOST
})

const params = {
  'api_key': API_KEY
}

export default {
  getTrendings (limit = 10) {
    return Giphy.get(`/trending?limit=${limit}`, { params })
  },
  search (payload) {
    return Giphy.get(`/search?q=${payload}`, { params })
  }
}
