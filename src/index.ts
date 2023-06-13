import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

import { routes } from '@/routes';

const app = express();
const PORT = Number(process.env.PORT) || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api', routes);

app.listen(PORT, () => 
  console.log(`Rest API running in PORT: ${PORT}`)
);
