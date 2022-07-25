import { Context } from './context';

function createContext<Argv extends any = any>(argv: Argv): Context<Argv> {
  return { argv };
}

export default abstract class AbstractCommand<Argv extends any = any> {
  /**
   * 执行上下文
   */
  ctx: Context<Argv>;

  constants(argv: Argv) {
    this.ctx = createContext<Argv>(argv);
  }

  /**
   * 子命令执行逻辑
   */
  abstract run(): any;

  /**
   * 命令行参数
   */
  get argv(): Argv {
    return this.ctx.argv;
  }
}

export interface CommandMetadata {
  /**
   * 子命令
   */
  command: string;

  /**
   * 命令描述
   */
  description: string;

  /**
   * 别名
   */
  alias?: string;

  /**
   * 命令示例，测试如下
   * [
   *    "# 打印示例",
   *    "example"
   * ]
   */
  examples?: string[];
}

export interface Command<Argv = any> extends CommandMetadata {
  /**
   * 子命令实例
   */
  module: {
    new (argv: Argv): AbstractCommand<Argv>;
  };
}
