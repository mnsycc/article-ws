const ArticleModel = require('models/article');
require('models/user');

const getList = async () => {
  const docs = await ArticleModel.find().populate('author');
  return docs;
};

const remove = async (name) => {
  const docs = await ArticleModel.deleteOne({
    title: name,
  });
  return docs;
};


const create = async (title, userid) => {
  const doc = new ArticleModel({
    title, author: userid,
  });
  await doc.save();
  return doc.id;
};
module.exports.getList = getList;
module.exports.create = create;
module.exports.remove = remove;
