import createServer, { NextFunction, Request, Response } from 'express';
import passport from 'passport';
import { json } from 'body-parser';

import { router } from './routes/router';
import { BaseError } from './errors/base-error';
import { strategy } from './auth/strategy';

const server = createServer();

passport.use(strategy);
server.use(json());
server.use('/api', router);

server.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  if (err instanceof BaseError) {
    res.status(err.code).json(err);
  } else {
    res.status(500).json(err);
  }
});

server.listen(3001, () => console.log('Server is listening on 3001 port'));
