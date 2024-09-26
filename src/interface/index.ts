import express from 'express';
import { configureDependencies } from '../infrastructure/utils/config';

export const app = express();
app.use(express.json());


const { dancerController } = configureDependencies();
app.post('/dancer', (req, res) => dancerController.create(req, res));
app.get('/dancers', (req, res) => dancerController.listAll(req, res));

if (require.main === module) {
  const PORT = 3333;
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}
