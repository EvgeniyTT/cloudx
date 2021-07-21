const fetch = require('node-fetch');
const http = require('http');

const hostname = '0.0.0.0';
const port = 80;

const server = http.createServer(async(req, res) => {
  const zone = await fetch('http://169.254.169.254/latest/meta-data/placement/availability-zone').then(res => res.body);
  const region = await fetch('http://169.254.169.254/latest/meta-data/placement/region').then(res => res.body);

  console.log('zone: ', zone);
  console.log('region: ', region);

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(JSON.stringify({ zone, region }));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});