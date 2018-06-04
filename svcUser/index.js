const http = require('http');
const os = require('os');
const fs = require('fs');

const port = 8080;
const config = JSON.parse(fs.readFileSync('config.json', 'utf-8'));
http.createServer((req, res) => {
    const id = parseInt(Math.random() * 10000000, 10);
    const email = `U${id}@langlib.com`;
    console.log(`request:${req.url}`);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(JSON.stringify({ Id: id, Email: email,Host: os.hostname(),Config: config }));
}).listen(port);
console.log(`listen on ${port}`);
