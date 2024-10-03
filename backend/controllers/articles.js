import { ArticleModel } from "../models/local-file-system/article.js"
import { validateArticle } from "../schemas/articles.js"

export class ArticleController {
  static async getAll (req, res) {
    // se puede hacer un filtro con la query acá
    const articles = await ArticleModel.getAll()
    res.json(articles)
  }

  static async getById (req, res) {
    const { id } = req.params
    const article = await ArticleModel.getById({ id })
    if (article) return res.json(article)
    res.status(404).json({ message: "Article not found" })
  }

  static async create (req, res) {
    const result = validateArticle(req.body)

    if (!result.success) {
      return res.status(400).json({
        error: JSON.parse(result.error.messagge)
      })
    }

    const newArticle = await ArticleModel.create({ input: result.data })

    res.status(201).json(newArticle)
  }

  static async delete (req, res) {
    const { id } = req.params

    const result = await ArticleModel.delete({ id })

    if (result === false){
      return res.status(404).json({ messagge: "Article not found" })
    }

    return res.json({ messagge: "Article deleted" })
  }
}