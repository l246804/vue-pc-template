import { createAppSDK } from 'vue-app-sdk'
import type { UserModule } from '@/types/user-module'

const sdk = createAppSDK()

export const install: UserModule = ({ app }) => {
  app.use(sdk)
}
