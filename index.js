import express from 'express'
import cors from 'cors'
import chatRoutes from './src/routes/chat.route.js'
import serverless from 'serverless-http'

const app = express()
// const PORT = process.env.PORT || 8000

app.use(cors())
app.use(express.json())

app.use("/api", chatRoutes)

if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 8000;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}


export const handler = serverless(app)