import createServer, { NextFunction, Request, Response, static as serveStatic } from 'express';
import passport from 'passport';
import { json } from 'body-parser';

import { router } from './routes/router';
import { BaseError } from './errors/base-error';
import { strategy } from './auth/strategy';
import cors from 'cors';
import { config } from './config';
import { resolve } from 'path';
import mkdir from 'mkdirp';

const server = createServer();
const pathToPublic = resolve(__dirname, '../public');

mkdir.sync(resolve(pathToPublic, 'dynamic'));
server.use('/public', serveStatic(pathToPublic));

passport.use(strategy);
server.use(cors());
server.use(json());
server.use('/api', router);

server.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  if (err instanceof BaseError) {
    res.status(err.code).json(err);
  } else {
    res.status(500).json(err);
  }
});

server.listen(config.port, () => console.log(`Server is listening on ${config.port} port`));
