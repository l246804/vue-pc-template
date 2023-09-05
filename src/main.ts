import 'normalize.css'
import 'element-plus/theme-chalk/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import '@/styles/element-plus/index.scss'
import '@/styles/index.scss'

import App from './App.vue'
import type { UserModule } from './types/user-module'
import { tryParseUrlToken } from '@/http/token'

const app = createApp(App)

// install all modules under `modules/`
Object.values(
  import.meta.glob<{ index?: number; install: UserModule }>('./modules/*.ts', { eager: true }),
)
  .sort((a, b) => (a.index ?? 1) - (b.index ?? 1))
  .forEach((i) => i.install?.({ app }))

app.mount('#app')

tryParseUrlToken()
