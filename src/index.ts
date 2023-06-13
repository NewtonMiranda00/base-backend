import express from 'express';
import { routes } from '@/routes';

const app = express();
const PORT = Number(process.env.PORT) || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api', routes);

app.get('/', (req, res) => {
  return res.send({ Hello: 'World!' });
});

app.listen(PORT, () => 
  console.log(`Rest API running in PORT: ${PORT}`)
);
