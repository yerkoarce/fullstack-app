import { createRequire } from 'node:module'
import path from 'node:path'

const require = createRequire(import.meta.url)

export const readJSON = (relativePath) => {
  const absolutePath = path.resolve(relativePath);
  return require(absolutePath);
}