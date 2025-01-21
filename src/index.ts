const http = require('node:http');

const server = http.createServer((req, res) => {
  res.write('<!DOCTYPE html><html><head><title>Hello world</title></head><body><h1>Hello world</h1></body></html>');
  res.end();
});

server.listen(8000);

