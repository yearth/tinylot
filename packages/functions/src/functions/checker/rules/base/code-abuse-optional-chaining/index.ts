import { AbstractFileRuleBase } from '../../../interfaces';
import { Rule } from 'eslint';

export class CodeAbuseOptionalChaining extends AbstractFileRuleBase {
  run(ctx: Rule.RuleContext): Rule.RuleListener {
    console.log('ctx', ctx);
    throw new Error('Method not implemented.');
  }
}
