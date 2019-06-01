import express from 'express'

const app = express()

app.get('/', (request, response) => {
  response.status(200).send({
    msg: 'server is up and running'
  })
})

app.all('*', (request, response) => {
  response.status(404).send({ msg: 'Route not found.' })
})

export default app
