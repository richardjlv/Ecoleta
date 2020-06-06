import express from 'express'

const app = express()

app.get('/users', (req, res) => {
  console.log('listagem de users')

  res.json([
    'Diego',
    'Ricardo'
  ])
})

app.listen(3333)
