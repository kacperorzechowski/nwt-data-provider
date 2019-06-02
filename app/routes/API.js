import express from 'express'
import { API_PATH } from '@/config'
import { extractGiphyResponse, extractPixabayResponse } from '@/helpers'
import Giphy from '@/models/Giphy'
import Pixabay from '@/models/Pixabay'

const app = express()

/**
 * Serves images data from Giphy and Pixabay APIs.
 */
app.get(`${API_PATH}/images`, async (request, response) => {
  let data = []

  await Giphy.getTrendings()
    .then((res) => {
      extractGiphyResponse(data, res.data.data)
    })
    .catch((error) => {
      response.status(500).send({ error })
    })

  await Pixabay.get()
    .then((res) => {
      extractPixabayResponse(data, res.data.hits)
    })
    .catch((error) => {
      response.status(500).send({ error })
    })

  response.status(200).send({ data })
})

/**
 * Searches for images using Giphy and Pixabay APIs.
 *
 * @param {String} query - Key that is used to search above APIs with.
 */
app.get(`${API_PATH}/images/search/:query`, async (request, response) => {
  let data = []

  await Giphy.search(request.params.query)
    .then((res) => {
      extractGiphyResponse(data, res.data.data)
    })
    .catch((error) => {
      response.status(500).send({ error })
    })

  await Pixabay.search()
    .then((res) => {
      extractPixabayResponse(data, res.data.hits)
    })
    .catch((error) => {
      response.status(500).send({ error })
    })

  response.status(200).send({ data })
})

export default app
