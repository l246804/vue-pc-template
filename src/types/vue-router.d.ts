import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    /**
     * 排序索引
     */
    index?: number
    /**
     * 布局组件
     */
    layout?: string
    /**
     * 标题
     */
    title?: string
  }
}

export {}
