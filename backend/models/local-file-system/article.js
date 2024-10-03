import { randomUUID } from "node:crypto"
import { readJSON } from "../../utils.js"


const articlesJSON = readJSON('./dataArticles.json')

export class ArticleModel {
  static async getAll() {
    return articlesJSON
  }

  static async getById({ id }) {
    const article = articlesJSON.find(article => article.id === Number(id))
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

  static async delete({ id }) {
    const articleIndex = articlesJSON.findIndex(article => article.id === Number(id))

    if (articleIndex === -1) return false

    articlesJSON.splice(articleIndex, 1)

    return true
  }
}