import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';

import {Request, Material} from './db';

const app = express();
const port = 8080;

app.use(bodyParser.json());
app.use(cors());

app.get('/requests', async (req, res) => {
  let limit = parseInt(req.params.limit) || 20;
  let offset = parseInt(req.params.offset) || 0;
  const requests = await Request.findAll({limit, offset});
  res.send(requests);
});

app.get('/requests/:requestId', async (req, res) => {
  const request = await Request.findByPk(req.params.requestId);
  res.send(request);
});

app.post('/requests', async (req, res) => {
  const request = await Request.create({...req.body});
  res.send(request);
});

app.get('/materials', async (req, res) => {
  let limit = parseInt(req.params.limit) || 20;
  let offset = parseInt(req.params.offset) || 0;
  const materials = await Material.findAll({limit, offset});
  res.send(materials);
});

app.get('/materials/:materialId', async (req, res) => {
  const material = await Material.findByPk(req.params.materialId);
  res.send(material);
});

app.post('/materials', async (req, res) => {
  const material = await Material.create({...req.body});
  res.send(material);
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
