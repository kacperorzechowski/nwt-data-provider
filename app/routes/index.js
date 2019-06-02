import express from 'express'
import cors from 'cors'
import API from './API'

const app = express()

app.use(cors())

app.get('/', (request, response) => {
  response.status(200).send({
    msg: 'server is up and running'
  })
})

app.use(API)

app.all('*', (request, response) => {
  response.status(404).send({ msg: 'Route not found.' })
})

export default app
