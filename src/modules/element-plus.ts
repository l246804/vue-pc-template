import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import type { UserModule } from '@/types/user-module'

export const install: UserModule = ({ app }) => {
  app.use(ElementPlus, { locale: zhCn })
}
