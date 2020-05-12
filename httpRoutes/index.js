const express = require('express');

const router = express.Router();
// const articleController = require('controllers/article');
// const userController = require('controllers/user');
// const reviewController = require('controllers/review');

// const multer = require('multer');

// const storage = multer.diskStorage({
//   destination(req, file, cb) {
//     cb(null, directory);
//   },
//   filename(req, file, cb) {
//     cb(null, fileName);
//   },
// });
// const upload = multer({ storage });

// const Ajv = require('ajv');
// const testSchema = require('schemas/routes/test');

router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/1', (req, res, next) => {
  res.render('index2');
});
// ///////////////
// router.post('/article',upload.none(),  function(req,res,next) {
//   const a = async () => {
//     const b = await console.log(req.body);
//   };
//   a();
//   res.end();
// });
// //////////////

// router.post('/test1', upload.none(), async (req, res, next) => {
//   console.log(req.body);

// Валидируем!
// const ajv = new Ajv();
// const validate = ajv.compile(idSchema);
// const valid = validate(body);

// if (!valid) {
//   const { errors } = validate;

//   const result = {
//     status: 'invalid data',
//     payload: { errors },
//   };
//   res.json(result);
//   return;
// }

// Дергаем контроллер. Все! больше тут ничего нет
//   const { getList } = articleController; // получить все статьи
//   const result = await getList(req.body.title);
//   console.log(result);
//   const payload = result.map((value) => {
//     const {
//       title, content, author, review,
//     } = value;

//     return {
//       title, content, author, review,
//     };
//   });
//   res.json(payload);
// });

// router.post('/test2', upload.none(), async (req, res, next) => {
//   const { body } = req;
//   console.log(req.body);

//   // Валидируем!
//   const ajv = new Ajv();
//   const validate = ajv.compile(testSchema);
//   const valid = validate(body);

//   if (!valid) {
//     const { errors } = validate;

//     const result = {
//       status: 'invalid data',
//       payload: { errors },
//     };
//     res.json(result);
//     return;
//   }

//   const { createreview } = reviewController;
//   const reviewid = await createreview(req.body.review);

//   console.log(reviewid);

//   const { createuser } = userController;
//   const userid = await createuser(req.body.username);

//   console.log(userid);

//   // Дергаем контроллер. Все! больше тут ничего нет
//   const { create } = articleController; // создать статью
//   const id = await create(req.body.title, req.body.content, userid, reviewid);

//   console.log(id);
//   // Отдаем ответ
//   res.json({ status: 'ok', payload: { id } });
// });


module.exports = router;
