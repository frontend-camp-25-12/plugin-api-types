import { PluginEnterAction } from '../../share/plugins/api.type.d';
declare class PlatformApi {
    pluginId: string;
    constructor(pluginId: string);
    /**
      * 简单的hello方法，用于测试
      * @param content 内容
      */
    hello(content: string): Promise<void>;
    /**
      * 获取插件配置项
      * @param key 配置项key
      * @param defalut 默认值
      */
    configGet(key: string, defalut: any): Promise<any>;
    /**
      * 设置插件配置项
      * @param key 配置项key
      * @param value 配置项值
      */
    configSet(key: string, value: any): Promise<void>;
    /**
      * 打开快捷键设置页面
      * @param code 要跳转到的希望用户设置快捷键的功能代码
      */
    openHotkeySettings(code: string): Promise<void>;
    /**
      * 获得上一次enter事件的action，可避免插件中onPluginEnter没有及时监听导致错过action的情况。
      */
    getLastPluginEnterAction(): Promise<PluginEnterAction | undefined>;
    /**
      * 插件主动退出
      */
    closeSelf(): Promise<void>;
    /**
     * 插件进入事件
      * @param action PluginEnterAction
     */
    onPluginEnter(callback: (action: PluginEnterAction) => void): void;
}

declare global {
  interface Window {
    platform: PlatformApi;
  }
}

export {};
