import express from 'express';

const PORT = 5000;

const app = express();
const path = '/api/v1';

app.get(`${path}/images`, (request, response) => {
  response.status(200).send({
    success: true,
    content: [
      {
        'url': 'https://cdn-images-1.medium.com/max/800/1*L2343t5yIriMN69KY6jWEw.jpeg'
      }
    ]
  });
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});
