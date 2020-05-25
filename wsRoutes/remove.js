const io = require('wsServ');
const articleController = require('controllers/article');

io.on('connection', (socket) => {
  socket.on('remove', async (data) => {
    const parsedData = await data;
    console.log('remove:', parsedData);
    // REMOVER
    const { remove } = articleController;
    const remover = await remove(parsedData.title);
    console.log(remover);

    // //  GET ALL ARTICLES
    // const { getList } = articleController;
    // const result = await getList(parsedData.title);
    // console.log(result);
    // const payload = result.map((value) => {
    //   const {
    //     title, author,
    //   } = value;

    //   return {
    //     title, author,
    //   };
    // });
    // cb(payload);
  });
});
