import express from 'express'
import { API_PATH } from '@/config'
import Giphy from '@/models/Giphy'

const app = express()

app.get(`${API_PATH}/images`, (request, response) => {
  Giphy.getTrendings()
    .then((res) => {
      response.status(200).send({
        data: res.data.data.map((item) => ({
          fixed_width: item.images.fixed_width,
          original_still: item.images.original_still
        }))
      })
    })
    .catch((error) => {
      response.status(500).send({error})
    })
})

export default app
