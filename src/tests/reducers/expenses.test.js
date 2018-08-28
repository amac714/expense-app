import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';  //test data

test('should set default state', () => {
  const state = expensesReducer(undefined, {type: '@@INIT'});
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expenses if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  //action trying to dispatch
  const action = {
    type: 'ADD_EXPENSE',
    expense: {
      id: '4',
      description: 'Toilet Paper',
      note: '',
      amount: 1000,
      createdAt: moment()
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, action.expense]);
});

// should edit expense
test('should edit expense', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: '3',
    updates: {
      note: 'indica hybrid'
    }
  };

  const state = expensesReducer(expenses, action);
  expect(state[2].note).toBe(action.updates.note);
});

// should not edit expense if expense not found
test('should edit not expense if expense not found', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: {
      note: 'indica hybrid',
    },
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should set expenses', () => {
  const action = {
    type: 'SET_EXPENSES',
    expenses: [expenses[1]]
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[1]]);
});