import 'dayjs/locale/zh-cn'

import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import dayjs from 'dayjs'
import type { UserModule } from '@/types/user-module'

dayjs.locale('zh-cn')

export const install: UserModule = ({ app }) => {
  app.use(ElementPlus, { locale: zhCn })
}
