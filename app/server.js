import express from 'express'
import routes from './routes'

const PORT = 5000

export const server = express()

server.use(routes)

server.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})
