import AWS from 'aws-sdk';

const http = require('http');

const metadataService = new AWS.MetadataService();

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  // metadataService.request("/latest/meta-data/<instance-id>", function(err, data) {
  //   res.statusCode = 200;
  //   res.setHeader('Content-Type', 'text/plain');
  //   res.end(data.toString());
  // });

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('HELLO WORLD!!!');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});