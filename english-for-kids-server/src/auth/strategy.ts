import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt';
import { JwtPayload } from '../interfaces/jwt-payload';

export const strategy = new JWTStrategy(
  {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'super_secret_key',
  },
  (payload: JwtPayload, done) => done(null, payload),
);
