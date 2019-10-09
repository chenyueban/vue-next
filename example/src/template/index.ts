import { createComponent } from 'vue'

const Template = createComponent({
  template: `<div>template {{ count }}</div>`,
  props: {
    count: Number
  }
})

export default Template
