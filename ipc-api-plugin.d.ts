declare class PlatformApi {
    pluginId: string;
    constructor(pluginId: string);
    /**
      * 简单的hello方法，用于测试
      * @param id 插件id
      * @param content 内容
      */
    hello(content: string): Promise<void>;
    /**
      * 获取插件配置项
      * @param id 插件id
      * @param key 配置项key
      * @param defalut 默认值
      */
    configGet(key: string, defalut: string): Promise<string>;
    /**
      * 设置插件配置项
      * @param id 插件id
      * @param key 配置项key
      * @param value 配置项值
      */
    configSet(key: string, value: string): Promise<void>;
    /**
     * 插件进入事件
      * @param action 包含code（在你的plugin.json中定义）和 payload（用户输入）
     */
    onPluginEnter(callback: (action: {
        code: string;
        payload: string;
    }) => void): void;
}

declare global {
  interface Window {
    platform: PlatformApi;
  }
}

export {};
