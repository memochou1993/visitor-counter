const { WebSocketServer } = require('ws');

const wss = new WebSocketServer({
  port: 8080,
});

const origins = new Map();

wss.on('connection', (ws, req) => {
  const { origin } = req.headers;

  origins.set(origin, origins.get(origin) + 1 || 1);

  const timer = setInterval(() => {
    ws.send(JSON.stringify({
      count: origins.get(origin),
    }));
  }, 1000);

  ws.on('message', () => {
    // do nothing
  });

  ws.on('close', () => {
    clearInterval(timer);
    origins.get(origin) > 1
      ? origins.set(origin, origins.get(origin) - 1)
      : origins.delete(origin);
  });
});
