import { notify } from 'react-notify-toast'

const styles = {
  background: 'rgb(250, 250, 250)', text: 'rgb(32, 32, 32)' 
}

export const toast = (message) => {
  notify.show(message, 'custom', 3000, styles)
}