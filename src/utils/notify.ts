import { createApp, h } from 'vue'
import NotifComp from '../components/v-notify/index.vue'
interface NotifyProp {
  message: string
  title?: string
  type?: string
}
/**
 * 组件挂载
 * @param props 组件挂载参数
 */
function handleComp(props: NotifyProp) {
  const isHave = document.querySelector('#NotifyBox')
  const notifyDiv: HTMLDivElement = document.createElement('div')
  if (!isHave) {
    notifyDiv.setAttribute('id', 'NotifyBox')
    document.body.append(notifyDiv)
  }
  setTimeout(() => {
    document.body.removeChild(notifyDiv)
  }, 2000)
  const app = createApp({
    name: 'Notify',
    render() {
      return h(NotifComp, { value: true, ...props })
    }
  })
  // 容器挂载
  app.mount('#NotifyBox')
}
interface NotifyInmlements {
  info(title: string, message: string): void
}
/**
 * 通知类的继承
 */
class Notify implements NotifyInmlements {
  info(message: string, title?: string): void {
    handleComp({ message: message, title: title, type: 'info' })
  }
}

const notify = new Notify()

export default notify
