const UserModel = require('models/user');

const createuser = async (user) => {
  const doc = new UserModel({ username: user });
  await doc.save();
  return doc.id;
};

module.exports.createuser = createuser;
