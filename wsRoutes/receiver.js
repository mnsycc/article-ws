const io = require('wsServ');
const articleController = require('controllers/article');

io.on('connection', (socket) => {
  socket.on('receiver', async (data, cb) => {
    console.log('show all articles clicked!');
    //  GET ALL ARTICLES
    const { getList } = articleController;
    const result = await getList();
    console.log(result);
    const payload = result.map((value) => {
      const {
        title, author,
      } = value;

      return {
        title, author,
      };
    });
    cb(payload);
  });
});
