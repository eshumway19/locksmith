const http = require('http');
const handler = require('./api/submit');

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/api/submit') {
    let raw = '';
    req.on('data', chunk => raw += chunk);
    req.on('end', () => {
      try { req.body = JSON.parse(raw); } catch { req.body = {}; }

      // Shim that matches what the Vercel handler expects
      const shimRes = {
        _status: 200,
        setHeader(k, v) { res.setHeader(k, v); },
        status(code) { this._status = code; return this; },
        json(data) {
          res.writeHead(this._status, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify(data));
        },
        end() { res.writeHead(this._status); res.end(); },
      };

      handler(req, shimRes);
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not found' }));
  }
});

const PORT = 3000;
server.listen(PORT, () => console.log(`Local server running at http://localhost:${PORT}`));
