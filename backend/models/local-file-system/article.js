import { randomUUID } from "node:crypto"
import { readJSON } from "../../utils.js"
import { articles } from "../../data/articles.js"

const articlesJSON = articles

export class ArticleModel {
  static async getAll() {
    return articles
  }

  static async getById({ id }) {
    const article = articles.find(article => article.id === Number(id))
    return article
  }

  static async create({ input }) {
    const newArticle = {
      id: randomUUID(),
      ...input
    }

    articlesJSON.push(newArticle)

    return newArticle
  }
}