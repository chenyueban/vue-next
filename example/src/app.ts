import * as Vue from 'vue'

import Template from './template'

const container = document.querySelector('#root')

const App = {
  components: {
    Template
  },
  template: `
    <div>
      <Template :count="0" />
    </div>
  `
}

Vue.createApp().mount(App, container)

console.log(Vue)
