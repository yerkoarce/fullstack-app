import { Router } from "express"

import { ArticleController } from "../controllers/articles.js"

export const articlesRouter = Router()

articlesRouter.get("/", ArticleController.getAll)
articlesRouter.get("/:id", ArticleController.getById)