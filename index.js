/**
 * @see https://malcoded.com/posts/nodejs-image-resize-express-sharp/
 */

const express = require('express')
const resize = require('./resize')

const server = express()

server.get('/', (req, res) => {
  // Extract the query-parameter
  const remoteUri = req.query.remoteUri
  const widthString = req.query.width
  const heightString = req.query.height
  const fit = req.query.fit || 'cover'
  const format = req.query.format || 'png'

  if (!remoteUri)
  {
    throw '"remoteUri" parameter must be provided'
  }

  // Parse to integer if possible
  let width, height
  if (widthString) {
    width = parseInt(widthString)
  }
  if (heightString) {
    height = parseInt(heightString)
  }
  // Set the content-type of the response
  res.type(`image/${format}`)

  // Get the resized image
  resize(remoteUri, format, width, height, fit).pipe(res)
})

server.listen(8000, () => {
  console.log('Server started!')
})
