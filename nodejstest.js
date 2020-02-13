const http = require('http');
const fs = require('fs')
const htmlHome = fs.readFileSync('./home.html')

const hostname = '172.16.16.189';
const port = 6969;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.write(htmlHome);
  res.end()
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
