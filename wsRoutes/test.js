const io = require('wsServ');
const articleController = require('controllers/article');
const userController = require('controllers/user');

io.on('connection', (socket) => {
    socket.on('test', async (data, cb) => {
      const parsedData = await data;
      console.log('parsedData: ', parsedData);

      // USER PART
      const { createuser } = userController;
      const userid = await createuser(parsedData.user);

      //  CREATE ARTICLE
      const { create } = articleController;
      const id = await create(parsedData.title, userid);

      console.log('articleID: ', id);
  });
});