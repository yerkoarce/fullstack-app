import z from 'zod'

const articleSchema = z.object({
  title: z.string({
    invalid_type_error: 'Title must be a string',
    required_error: 'Title is required'
  }),
  body: z.string({
    required_error: 'Body of article is required'
  }),
  user: z.string() // Posible mejora para buscar que el usuario exista en la base de datos
})

export function validateArticle(input) {
  return articleSchema.safeParse(input)
}