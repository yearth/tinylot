import { CommandMetadata } from '../types';

export function Command(metadata: CommandMetadata) {
  return function (target: any) {
    Object.defineProperty(target, '__metadata__', { value: metadata });
  };
}
