import 'reflect-metadata'
import express, { json } from 'express'
const port = 4002

const app = express()

app.use(json())

app.get('/', function (req, res) {
  res.json({ message: 'Alectrion Equipament' }).status(200)
})

app.listen(port, () => console.log(`rodando ${port}`))
