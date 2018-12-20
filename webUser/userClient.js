const http = require('http');
const os = require('os');
const userHost = process.env.USER_HOST || '127.0.0.1';

module.exports = {
    getUserInfo: async () => {
        return new Promise((resole, reject) => {
            const id = parseInt(Math.random() * 10000000, 10);
            const req = http.get({ timeout: 3000, host: userHost, port: 8080, path: `/user/${id}` }, response => {
                const body = [];
                response.on('data', chunk => {
                    body.push(chunk);
                });
                response.on('end', () => {
                    const user = JSON.parse(body.join(''));
                    const result = {
                        User: user,
                        Host: os.hostname()
                    };
                    resole(result);
                });
            });
            req.on('error', e => {
                resole({ Host: os.hostname(), Error: e.message });
            });
        });
    }
};

