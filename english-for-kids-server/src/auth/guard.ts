import { authenticate } from 'passport';

export const auth = authenticate('jwt', { session: false });
