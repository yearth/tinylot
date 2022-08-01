export namespace CheckerTypes {
  export interface Params {
    /**
     * 工作目录
     */
    workDir: string;
  }

  /**
   * 检查类型: 文件规则 | 文件夹规则
   */
  export type CheckerType = 'file' | 'folder';
}
