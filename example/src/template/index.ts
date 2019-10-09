import { createComponent } from 'vue'

const Template = createComponent({
  template: `{{ count }}`,
  props: {
    count: Number
  },
  setup(props) {
    console.log(props)
  }
})

export default Template
