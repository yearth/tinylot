import { RuleMetadataBase } from '../typings';

export abstract class AbstractRuleBase {
  private metadata: RuleMetadataBase;

  constructor(metadata: RuleMetadataBase) {
    this.metadata = {
      ...metadata,
      defaultLevel: metadata?.defaultLevel ?? 'warn',
    };
    console.log('this.metadata', this.metadata);
  }

  getCode() {
    return `rule code`;
  }
}
