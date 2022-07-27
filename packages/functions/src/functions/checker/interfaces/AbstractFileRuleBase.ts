import { FileRuleContext, FileRuleListener } from '../typings';

import { AbstractRuleBase } from './AbstractRuleBase';

export abstract class AbstractFileRuleBase extends AbstractRuleBase {
  abstract run(ctx: FileRuleContext): FileRuleListener;
}
