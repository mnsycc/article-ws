const socketio = require('socket.io');
const origins = require('config').get('server:ws:origins');


module.exports.init = async (server) => {
  const options = {};

  const io = socketio(server, options);
  io.origins(origins);

  io.on('connection', (socket) => {
    console.log(`connect: ${socket.id}`);

    socket.on('disconnect', (reason) => {
      console.log(`disconnect: ${socket.id} ${reason}`);
    });
  });

  module.exports = io;

  // eslint-disable-next-line global-require
  require('wsRoutes/test');
  // eslint-disable-next-line global-require
  require('wsRoutes/remove');
};
