import { AbstractRuleBase } from './AbstractRuleBase';
import { CheckerTypes } from '../typings';
import { IFunction } from '../../../typings';
import { join } from '@tinylot/shared';

const RULES_DIR = join(__dirname, '..', 'rules');

export abstract class AbstractCheckerBase implements IFunction {
  protected args: CheckerTypes.Params;

  /**
   * 规则集
   */
  protected rules: AbstractRuleBase[] = [];

  constructor(args: CheckerTypes.Params) {
    this.args = args;
  }

  /**
   * 初始化检查器
   */
  init() {
    this.loadRules(RULES_DIR);
  }

  /**
   * 加载检测规则集
   * @param dir 存放规则集的文件夹目录
   */
  protected loadRules(dir: string) {
    let rules = Object.values<any>(require(dir));

    // 排除掉非规则的 class
    rules.filter(item => Boolean(item.__metadata__));

    for (const Rule of rules) {
      const metadata = Rule.__metadata;
      const instance = new Rule(metadata);
      this.rules.push(instance);
    }
  }

  abstract run(): Record<string, any>;

  /**
   * 返回规则列表
   */
  getRules() {
    return this.rules;
  }
}
