import type { App } from 'vue'
import { Icon } from './Icon'
import { Carousel } from './Carousel'

export const setupGlobCom = (app: App<Element>): void => {
  app.component('Icon', Icon)
  app.component('Carousel', Carousel)
}
