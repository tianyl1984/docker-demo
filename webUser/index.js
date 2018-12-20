const http = require('http');
const userClient = require('./userClient');

const port = 3000;
http.createServer(async (req, res) => {
    const result = await userClient.getUserInfo();
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(JSON.stringify(result, null, 2));
}).listen(port);
console.log(`listen on ${port}`);
