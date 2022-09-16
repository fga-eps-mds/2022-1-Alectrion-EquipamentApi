import { Controller } from '../presentation/protocols/controller'

import { RequestHandler } from 'express'

type Adapter = (controller: Controller) => RequestHandler

export const adaptExpressRoute: Adapter = (controller) => async (req, res) => {
  const userId = req.userId
  try {
    const { statusCode, data } = await controller.handle({
      ...req.body,
      ...req.query,
      ...req.params,
      userId
    })
    const json = [200, 204].includes(statusCode)
      ? data
      : { error: data.message }
    res.status(statusCode).json(json)
  } catch (error) {
    console.log('Error: ', error)
    res.status(500).json(error)
  }
}
