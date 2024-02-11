import m from 'mithril'
import meiosisTracer from 'meiosis-tracer'
import { meiosisSetup } from 'meiosis-setup'

export interface State {}

export const App = {
  initial: {},
  services: [],
  view: cell => m('h1', 'Hello, world!'),
}

// Initialize Meiosis
const cells = meiosisSetup<State>({ app: App })

m.mount(document.getElementById('app'), {
  view: () => App.view(cells()),
})

cells.map(state => {
  //   console.log('cells', state)

  //   Persist state to local storage
  //   localStorage.setItem('meiosis', JSON.stringify(state))
  m.redraw()
})

// Debug

meiosisTracer({
  selector: '#tracer',
  rows: 25,
  streams: [cells],
})

window.cells = cells
