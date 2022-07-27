import { Rule as ESliderRule } from 'eslint';

/**
 * 文件规则上下文
 */
export type FileRuleContext = ESliderRule.RuleContext;

/**
 * 文件 AST 遍历器
 */
export type FileRuleListener = ESliderRule.RuleListener;

export type RuleMetadataBase = {
  defaultLevel: 'warn' | 'error';
};
