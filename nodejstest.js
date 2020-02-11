const http = require('http');
const fs = require('fs')

const hostname = '172.16.16.189';
const port = 3000;

const server = http.createServer((req, res) => {
  const html
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.write('<h1>Haha Funny</h1>');
  res.end()
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
