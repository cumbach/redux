// LESSON 6

// Include Redux in script tags

// This is ES6 arrow function:
const counter = (state = 0, action) => {
  console.log(state)
}


const { createStore } = Redux;
// Same as:
var createStore = Redux.createStore;

// Specify reducer (counter) manages state updates:
const store = createStore(counter);

// Store methods 1-3:
store.getState();
store.dispatch({ type: 'INCREMENT' });
store.subscribe(callback)

const render = () => {
  document.body.innerText = store.getState();
}
// Do it this way to render initial state
store.subscribe(render);
render();

document.addEventListener('click', () => {
  store.dispatch({ type: 'INCREMENT' })
});
