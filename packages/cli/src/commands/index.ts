import { fs, join } from '@tinylot/shared/src';

import { Command } from '../types';

const files = fs
  // 1. 读取 commands 下所有文件
  .readdirSync(__dirname)
  //   2. 过滤 index, 类型文件以及隐藏文件
  .filter(it => it !== 'index.ts' && !it.endsWith('.d.ts') && !it.startsWith('.'));

const commands = files.map(filename => {
  const modPath = join(__dirname, filename);
  const module = require(modPath).default;

  if (!module) {
    return null;
  }

  const metadata = module.__metadata__;

  if (!metadata) {
    return null;
  }

  return {
    ...metadata,
    module,
  };
});

export default commands as Command[];
