import { createStore } from 'redux';

const reducer = (state = 0, action) => {
  console.log('reducer called');
  return state;
};

const store = createStore(reducer);

store.subscribe(() => {
  console.log('current state', store.getState());
});