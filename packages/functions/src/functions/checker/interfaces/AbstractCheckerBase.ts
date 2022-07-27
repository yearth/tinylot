import { CheckerTypes } from '../typings';
import { IFunction } from '../../../typings';
import { join } from '@tinylot/shared';

const RULES_DIR = join(__dirname, '..', 'rules');

export abstract class AbstractCheckerBase implements IFunction {
  protected args: CheckerTypes.Params;

  constructor(args: CheckerTypes.Params) {
    this.args = args;
  }

  init() {
    this.loadRules(RULES_DIR);
  }

  /**
   * 加载检测规则集
   * @param dir 存放规则集的文件夹目录
   */
  protected loadRules(dir: string) {
    let rules = require(dir);
    console.log(rules);
  }

  abstract run(): Record<string, any>;
}
