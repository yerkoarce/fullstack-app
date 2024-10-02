import { articles } from "./data/articles.js"
import { articlesRouter } from "./routes/articles.js"
import express from "express"

const app = express()

app.use(express.json())

app.use('/articles', articlesRouter)

const PORT = process.env.PORT ?? 3000

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})