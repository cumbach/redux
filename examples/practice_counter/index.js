import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Counter from './components/Counter'
import counter from './reducers'

const initialState = 5

const store = createStore(counter, initialState)
const rootEl = document.getElementById('root')



function render() {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => store.dispatch({type: 'INCREMENT'}) }
      onDecrement={() => store.dispatch({type: 'DECREMENT'}) }
      />,
    rootEl
  )
}
render()
store.subscribe(render)
