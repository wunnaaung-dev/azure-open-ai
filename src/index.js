import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import chatRoutes from './routes/chat.route.js'

const app = express()
const PORT = process.env.PORT || 8000

app.use(cors()) 
app.use(bodyParser.json())

app.use("/api", chatRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})