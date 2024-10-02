import { ArticleModel } from "../models/local-file-system/article.js"

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
}