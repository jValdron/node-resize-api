/**
 * @see https://malcoded.com/posts/nodejs-image-resize-express-sharp/
 */

const request = require('request')
const sharp = require('sharp')

module.exports = function resize(remoteUri, format, width, height, fit) {
  const readStream = request(remoteUri)
  let transform = sharp()

  if (format) {
    transform = transform.toFormat(format)
  }

  if (width || height) {
    transform = transform.resize(width, height, {
      fit: fit
    })
  }

  return readStream.pipe(transform)
}
