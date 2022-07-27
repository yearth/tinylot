import { Command } from './types';
import { SCRIPT_NAME } from './constants';
import commands from './commands';
import { hideBin } from 'yargs/helpers';
import yargs from 'yargs';

export default async function main() {
  const cli = yargs(hideBin(process.argv)).strict().wrap(null).scriptName(SCRIPT_NAME);

  // 注册子命令
  for (const cmd of commands) {
    const command = [cmd.command];
    if (cmd.alias) {
      command.push(cmd.alias);
    }
    cli.command(
      command,
      cmd.description,
      // yargs builder
      () => {},
      argv => exec(cmd, argv),
    );
  }

  cli.demandCommand(1).alias('h', 'help').parse();
}

async function exec(cmd: Command, argv: any) {
  try {
    const Command = cmd.module;

    // 实例化子命令
    const instance = new Command(argv);

    //执行子命令
    await instance.run();
  } catch (error) {
    console.error(error);
  }
}
