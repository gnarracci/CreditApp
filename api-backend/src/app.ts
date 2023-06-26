import express, { Application } from 'express';
import morgan from 'morgan';

import authRoutes from './routes/auth';

const app: Application = express();

// Middlewares
app.use(morgan('dev'));

// Routes
app.use(authRoutes);

// Settings
app.set('port', 3000);

export default app;