import { createComponent, reactive } from 'vue'

const Reactive = createComponent({
  template: `
    <div>
      reactive:
      <p>object {{ JSON.stringify(observed) }}</p>
    </div>
  `,
  setup() {
    const object = { foo: 1 }
    const observed = reactive(object)
    // console.log('object.foo', observed.foo)
    // console.log(`'foo' in observed`, 'foo' in observed)
    // console.log(`Object.keys(observed)`, Object.keys(observed))
    return {
      observed
    }
  }
})

export default Reactive
