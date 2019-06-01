import express from 'express'
import routes from '@/routes'
import { PORT } from '@/config'

export const server = express()

server.use(routes)

server.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})
