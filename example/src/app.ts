import * as Vue from 'vue'

import Template from './template'
import Reactive from './reactive'

const container = document.querySelector('#root')

const App = {
  components: {
    Template,
    Reactive
  },
  template: `
    <div>
      <Template :count="0" />\
      <Reactive />
    </div>
  `
}

Vue.createApp().mount(App, container)

console.log('Vue', Vue)
