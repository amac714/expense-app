// install -> import -> use
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

// create store
const store = configureStore();

// watch for updates
store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

// grab actions and selectors
store.dispatch(
  addExpense({ description: 'Water bill', amount: 4500 })
);
store.dispatch(
  addExpense({ description: 'Gas bill', createdAt: 1000 })
);

store.dispatch(
  addExpense({ description: 'Rent', amount: 109500 })
);


// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));


// class NewSyntax {
//   name = "Tia";
// }

// const newSyntax = new NewSyntax();
// console.log(newSyntax);