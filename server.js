const PORT = 8000
import express from 'express'
import cors from 'cors'
import axios from 'axios'
import 'dotenv/config'
import process from 'process'

const app = express()

app.use(cors())

app.listen(PORT, () => console.log(`The server is running at ${PORT}`))

app.get('/', (req, res) => {

    const { ipAddress } = req.query;
    const apiKey = process.env.VITE_API_KEY;
     
axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ipAddress}`)
.then(response => res.json(response.data))
.catch(err => console.log(err)) 


})
    