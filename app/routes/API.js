import express from 'express'
import { API_PATH } from '@/config'
import { extractResponse } from '@/helpers'
import Giphy from '@/models/Giphy'

const app = express()

app.get(`${API_PATH}/images`, async (request, response) => {
  let data = []

  await Giphy.getTrendings()
    .then((res) => {
      extractResponse(data, res.data.data)
    })
    .catch((error) => {
      response.status(500).send({ error })
    })

  response.status(200).send({ data })
})

app.get(`${API_PATH}/images/search/:query`, async (request, response) => {
  let data = []

  await Giphy.search(request.params.query)
    .then((res) => {
      extractResponse(data, res.data.data)
    })
    .catch((error) => {
      response.status(500).send({ error })
    })

  response.status(200).send({ data })
})

export default app
