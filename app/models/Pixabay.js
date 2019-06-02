import axios from 'axios'
import { PIXABAY_API_KEY as API_KEY, PIXABAY_HOST as HOST } from '@/config'

const Pixabay = axios.create({
  baseURL: HOST
})

const params = {
  key: API_KEY
}

export default {
  get () {
    return Pixabay.get('', { params })
  },
  search (payload) {
    return Pixabay.get(`/?q=${payload}`, { params })
  }
}
