import AbstractCommand from '../types/command';
import { Command } from '../decorators';
import { SCRIPT_NAME } from '../constants';
import commands from '.';

@Command({
  description: '打印所有命令的示例用法',
  command: 'example',
})
export default class ExampleCommand extends AbstractCommand {
  run() {
    for (const cmd of commands) {
      // 如果命令没有配置 examples 则直接跳过
      if (!cmd.examples) {
        continue;
      }
      // examples 格式如下：
      // # 打印示例
      // example
      for (const line of cmd.examples) {
        if (line && line[0] !== '#') {
          console.log(`${SCRIPT_NAME} ${line}`);
          continue;
        }
        console.log(line);
      }
      console.log(' ');
    }
  }
}
