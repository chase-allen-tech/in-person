var Server = require('stratum').Server;

var server = new Server({
  rpc: {
    host: 'localhost',
    port: 80,
    password: 'x',
    mode: 'tcp'
  },
  settings: {
    hostname: 'localhost',
    toobusy: 70,
    host: 'localhost',
    port: 3333
  }
});

server.on('mining', (req, deferred) => {
  switch(req.method) {
    case 'subscribe':
      deferred.resolve([]);
      break;
  }
});

server.listen();