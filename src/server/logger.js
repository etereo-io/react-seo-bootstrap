import winston from 'winston'
const consoleTransport = new winston.transports.Console()
const myWinstonOptions = {
  transports: [consoleTransport]
}
const logger = new winston.createLogger(myWinstonOptions)

export function logRequest(req, res, next) {
  logger.info(req.url)
  next()
}

export function logError(err, req, res, next) {
  logger.error(err)
  next()
}
export default logger
