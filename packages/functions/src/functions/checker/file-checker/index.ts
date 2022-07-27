import { AbstractCheckerBase } from '../interfaces/AbstractCheckerBase';

export class FileChecker extends AbstractCheckerBase {
  async run() {
    return Promise.resolve('run file check');
  }
}
