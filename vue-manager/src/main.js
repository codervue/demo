import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
// 导入的是store包而不是Vuex
import { Button, Header, Aside, Container, Main, Menu, MenuItem, MenuItemGroup, Submenu, Dropdown, DropdownMenu, DropdownItem, Row, Col, Card,Table,TableColumn } from 'element-ui'

Vue.config.productionTip = false
Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };

Vue.use(Button)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Container)
Vue.use(Main)

Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Submenu)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Row)
Vue.use(Col)
Vue.use(Card)
Vue.use(Table)
Vue.use(TableColumn)


new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
