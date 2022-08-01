import { AbstractCheckerBase } from '../interfaces/AbstractCheckerBase';
import { CheckerTypes } from '../typings';

export class FileChecker extends AbstractCheckerBase {
  protected chckerType: CheckerTypes.CheckerType = 'file';

  async run() {
    const { workDir } = this.args;
    const rulePrefixes = this.getRulePrefix();
    console.log('workDir', workDir, rulePrefixes);

    return Promise.resolve('run file check');
  }

  /**
   * 获取规则前缀
   */
  private getRulePrefix() {
    const prefixes = new Set<string>();

    for (const rule of this.rules) {
      const ruleCode = rule.getCode();
      const prefix = ruleCode.substring(0, ruleCode.indexOf('/'));
      prefixes.add(prefix);
    }

    return [...prefixes];
  }
}
