const fastify = require('fastify');

const server = fastify();

server.get('/foo', async (request, reply) => {
  return 'bar\n';
});

server.get('/robot', async (request, reply) => {
  return 'beep boop\n';
});

server.get('/animal', async (request, reply) => {
  return 'grrrrrr\n';
});
// dfsdfdsfs
server.get('/cookie', async (request, reply) => {
  return 'yummmm\n';
});

// This is my breaking change

server.listen(3000, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
