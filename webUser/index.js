const http = require('http');

const port = 3000;
http.createServer((req, res) => {
    const id = parseInt(Math.random() * 10000000, 10);
    http.get(`http://127.0.0.1:8080/user/${id}`, response => {
        const body = [];
        response.on('data', chunk => {
            body.push(chunk);
        });
        response.on('end', () => {
            const user = JSON.parse(body.join(''));
            const html = `
<html>
    <head>
        <meta charset="UTF-8">
        <title>测试</title>
    </head>
    <body>
        <ul>
            <li>Id:${user.Id}</li>
            <li>Email:${user.Email}</li>
            <li>Host:${user.Host}</li>
        </ul>
    </body>
</html>
            `;
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(html);
        });
    });
}).listen(port);
console.log(`listen on ${port}`);
