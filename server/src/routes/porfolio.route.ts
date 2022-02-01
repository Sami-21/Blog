import express from 'express';
import multer from 'multer';
import ProjectModel from '../models/project.model';
import path from 'path';
import fs from 'fs';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now());
  },
});

const upload = multer({ storage: storage });

const PortfolioRoute: express.Router = express.Router();

PortfolioRoute.post('/portfolio/newProject', upload.single('projectImage'), async (req: express.Request, res: express.Response) => {
  try {
    const { title, description } = req.body;
    const img = {
      data: fs.readFileSync(path.join(__dirname + '/home/sami21/Desktop/Blog/server/uploads/' + req.file.filename)),
      contentType: 'image/png',
    };
    // await ProjectModel.create({ title: title, description: description, image: img });
    res.status(200).send(img);
  } catch (error) {
    console.log(error.message);
    res.status(400).send(error);
  }
});
PortfolioRoute.get('/portfolio', async (req: express.Request, res: express.Response) => {
  try {
    const projects = await ProjectModel.find();
    res.status(200).json(projects);
  } catch (error) {
    res.status(400).send(error);
  }
});

export default PortfolioRoute;
