import { defineNuxtPlugin } from '#app'
import { Cell, CellGroup, Tab, Tabs } from 'vant'

import '~/assets/css/index.css'
import 'vant/lib/index.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp
    .use(Cell)
    .use(CellGroup)
    .use(Tab)
    .use(Tabs)
})
