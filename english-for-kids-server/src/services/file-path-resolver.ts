import { config } from '../config';

export class FilePathResolver {
  private readonly pathToPublic = 'public/dynamic';

  resolve(name: string): string {
    return `${config.host}/${this.pathToPublic}/${name}`;
  }
}
