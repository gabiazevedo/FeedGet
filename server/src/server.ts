import express from 'express';
import cors from 'cors';
import { routes } from './routes';

const app = express();

/*
Forma de fazer o controle de segurança do nosso backend para inviabilizar o acesso de front ends inadequados
Com o cors podemos dizer exatamente quais front-ends podem consumir o nosso backend
*/

app.use(cors()); 
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log('HTTP server running!');
});