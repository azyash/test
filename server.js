const http = require('http');
http.createServer('request', function (request, response) {
  response.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
  response.end('Hello World');
}).listen(3000, 'localhost', function () {
  console.log('Server running at http://127.0.0.1:3000/');
})