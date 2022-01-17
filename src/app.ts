import express, {Application} from 'express';
import morgan from 'morgan';

import productRoutes from './routes/index'

const app : Application = express();


//Settings
app.set('port', process.env.PORT);

//Middleware
app.use(morgan('dev'));
app.use(express.json())

//routes
app.use('/',productRoutes);

export default app;