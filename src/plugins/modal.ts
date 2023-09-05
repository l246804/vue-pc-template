import type { ElMessageBoxOptions, MessageBoxData } from 'element-plus'

export const Modal = {
  msgInfo: ElMessage.info,

  msgSuccess: ElMessage.success,

  msgWarning: ElMessage.warning,

  msgError: ElMessage.error,

  msgCloseAll: ElMessage.closeAll,

  info(message: string, title = '提示', options: ElMessageBoxOptions = {}) {
    return ElMessageBox.alert(message, title, { ...options, type: 'info' })
  },

  success(message: string, title = '提示', options: ElMessageBoxOptions = {}) {
    return ElMessageBox.alert(message, title, { ...options, type: 'success' })
  },

  warning(message: string, title = '提示', options: ElMessageBoxOptions = {}) {
    return ElMessageBox.alert(message, title, { ...options, type: 'warning' })
  },

  error(message: string, title = '提示', options: ElMessageBoxOptions = {}) {
    return ElMessageBox.alert(message, title, { ...options, type: 'error' })
  },

  async confirm(message: string, title = '提示', options: ElMessageBoxOptions = {}) {
    try {
      return await ElMessageBox.confirm(message, title, { ...options })
    }
    catch (e) {
      return e as MessageBoxData
    }
  },

  prompt: ElMessageBox.prompt,

  close: ElMessageBox.close,
}
