import express from 'express';
import {
  NewProjectHandler,
  GetUserProjectsHandler,
  GetUniqueProjectHandler,
  UpdateUniqueProjectHandler,
  DeleteUniqueProjectHandler,
} from '@/controllers/portfolio.controller';

const PortfolioRoute: express.Router = express.Router();

PortfolioRoute.post('/portfolio/newProject', NewProjectHandler);

PortfolioRoute.get('/portfolio/:id', GetUserProjectsHandler);

PortfolioRoute.get('/portfolio/projects/:id', GetUniqueProjectHandler);

PortfolioRoute.patch('/portfolio/projects/:id', UpdateUniqueProjectHandler);

PortfolioRoute.delete('/portfolio/projects/:id', DeleteUniqueProjectHandler);

export default PortfolioRoute;

// import ProjectModel from '../models/project.model';

// const storage = new GridFsStorage({
//   url: dbConnection.url,
//   file: (req, file) => {
//     return new Promise((resolve, reject) => {
//       crypto.randomBytes(16, (err, buf) => {
//         if (err) {
//           return reject(err);
//         }
//         const filename = buf.toString('hex') + path.extname(file.originalname);
//         const fileInfo = {
//           filename: filename,
//           bucketName: 'projects',
//         };
//         resolve(fileInfo);
//       });
//     });
//   },
// });
// const upload = multer({ storage });

// PortfolioRoute.post('/portfolio/newProject', upload.single('projectImage'), async (req: express.Request, res: express.Response) => {
//   res.json({ file: req.file });
//   // try {
//   //   const { title, description } = req.body;
//   //   const img = {
//   //     data: fs.readFileSync(path.join(__dirname + '/home/sami21/Desktop/Blog/server/uploads/' + req.file.filename)),
//   //     contentType: 'image/png',
//   //   };
//   //   // await ProjectModel.create({ title: title, description: description, image: img });
//   //   res.status(200).send(img);
//   // } catch (error) {
//   //   console.log(error.message);
//   //   res.status(400).send(error);
//   // }
// });

// // Get all files
// PortfolioRoute.get('/portfolio', (req: express.Request, res: express.Response) => {
//   gfs.files.find().toArray((err, files) => {
//     if (!files) {
//       return res.status(404).json({
//         err: 'files not found',
//       });
//     }
//     return res.json(files);
//   });
// });

// // Get a single file by it's filename
// // Output : object

// PortfolioRoute.get('/portfolio/:filename', (req: express.Request, res: express.Response) => {
//   gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
//     if (!file) {
//       return res.status(404).json({
//         err: 'file not found',
//       });
//     }
//     return res.json(file);
//   });
// });

// // Get a single file by it's filename
// // Output : image

// PortfolioRoute.get('/images/:filename', (req: express.Request, res: express.Response) => {
//   gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
//     if (!file) {
//       return res.status(404).json({
//         err: 'file not found',
//       });
//     }
//     if (file.contentType === 'image/jpeg' || file.contentType === 'image/png') {
//       const readStream = gfs.createReadStream(file.filename);
//       readStream.pipe(res);
//     } else {
//       res.status(404).json({
//         err: 'this file is not an image',
//       });
//     }
//   });
// });
