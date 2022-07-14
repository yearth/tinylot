import { SCRIPT_NAME } from './constants';
import commands from './commands';
import { hideBin } from 'yargs/helpers';
import yargs from 'yargs';

export default async function main() {
  const cli = yargs(hideBin(process.argv)).strict().wrap(null).scriptName(SCRIPT_NAME);

  for (const cmd of commands) {
    const command = [cmd.command];
    if (cmd.alias) {
      command.push(cmd.alias);
    }
    // 注册子命令
    cli.command(
      command,
      cmd.description,
      // yargs builder
      () => {},
      argv => exec(cmd, argv),
    );
  }
}

async function exec(cmd, argv) {
  try {
    const Command = cmd.module;

    const instance = new Command(argv);

    await instance.run();
  } catch (error) {
    console.error(error);
  }
}
