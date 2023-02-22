// server.js
const http = require('http')
const PORT = process.env.PORT || 9001
http
  .createServer((req, res) => {
    console.log('New connection')
    res.end('Hello Cloud Run 2222222222233333333333333')
  })
  .listen(PORT, () => console.log('Listening on', PORT))
