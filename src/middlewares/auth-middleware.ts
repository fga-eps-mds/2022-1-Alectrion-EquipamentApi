import { Request, Response } from 'express'
import { decode } from 'jsonwebtoken'

export const checkAccessToken = (
  req: Request,
  resp: Response,
  next: () => void
): void => {
  const token = req.headers.authorization?.split(' ')[1]
  if (!token) {
    resp.status(401).json({ message: 'Token não informado' })
    return
  }

  const { userId } = decode(token) as { userId: string }

  req.userId = userId
  next()
}
