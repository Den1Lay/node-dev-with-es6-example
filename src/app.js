import express from 'express';
import cors from 'cors'
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import dotenv from 'dotenv'

import indexRouter from './routes/index';
import usersRouter from './routes/users';

dotenv.config();

// const superData = {
//   redux: 'included',
//   iphone: 'fack',
// }

var app = express();    
app
  .use(cors())
  .use(logger('dev'))
  .use(express.json())
  .use(express.urlencoded())
  .get('*',express.static(path.resolve(__dirname, '..', '..', 'client', 'build')))
  .use('/', indexRouter)
  .use('/users', usersRouter)

export default app;
