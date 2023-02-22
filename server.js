const http = require('http')
const PORT = process.env.PORT || 9001
http
  .createServer((req, res) => {
    console.log('New connection')
    res.end('Hello Cloud Run, continuous 23982398239832982')
  })
  .listen(PORT, () => console.log('Listening on', PORT))
