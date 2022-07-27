import { CheckerTypes, FileChecker } from '@tinylot/functions';
import { isAbsolute, join } from '@tinylot/shared';

import AbstractCommand from '../types/command';
import { Command } from '../decorators';

interface Argv {
  path: string;
}

@Command({
  command: 'check [options]',
  description: '代码规范检查器',
  examples: ['# 执行代码检查', 'check'],
})
export default class CheckCommand extends AbstractCommand<Argv> {
  private fileChecker: FileChecker;

  /**
   * 计算当前工作目录
   */
  private getCwd(wordDir?: string) {
    if (!wordDir) {
      return process.cwd();
    }

    if (isAbsolute(wordDir)) {
      return wordDir;
    }

    return join(process.cwd(), wordDir);
  }

  async run() {
    // 初始化检查器
    await this.initCheckers();

    // 打印规则集
    this.printRules();

    // 执行检查
    const fileCheckResult = await this.fileChecker.run();
    console.log('fileCheckResult', fileCheckResult);
  }

  /**
   * 初始化检查器
   */
  private async initCheckers() {
    const args: Omit<CheckerTypes.Params, 'checkerType'> = {
      workDir: this.getCwd(this?.argv?.path),
    };

    this.fileChecker = new FileChecker({ ...(args ?? {}) });
    this.fileChecker.init();
  }

  /**
   * 打印规则集
   */
  private printRules() {
    const rules = [...this.fileChecker.getRules()];
    console.table(rules);
  }
}
