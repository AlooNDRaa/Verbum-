import express, { urlencoded } from 'express';
import http from 'http';
import cors from 'cors'
import dotenv from 'dotenv';
import { setupUserRoutes } from '../routes/userRoutes/user.routes';
import { setupEggRoutesWithDb } from '../routes/eggroutes/egg.route';
import { setupSocketIO } from '../socket/Socket.config';
import {messageRoutes} from '../routes/chatRoutes/message.routes';

dotenv.config();


const PORT = process.env.PORT;
const app: express.Application = express();
const server: http.Server = http.createServer(app);


const corsOptions = {
  origin: process.env.FRONTEND_URL,
};

setupSocketIO(server);

app.use(urlencoded({extended:true}));
app.use(cors(corsOptions));
app.use(express.json());
app.set('view engine', 'ejs');




app.get('/', (req, res) => {
  res.send('puerto funcionando');
});
app.use('/api', setupUserRoutes());
app.use('/api', setupEggRoutesWithDb());
app.use('/api', messageRoutes());




server.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto http://localhost:${PORT}`);
});