import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should set default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT'});
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should set stortBy to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT'});
  expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
  const currentState = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  };
  const action = { type: 'SORT_BY_DATE' };
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe('date');
});

// should set text filter
test('should set text by filter', () => {
  const action = {
    type: 'SET_TEXT_FILTER',
    text: 'bill'
  };
  const state = filtersReducer(undefined, action);
  expect(state.text).toBe('bill');
});

// should set start date filter
test('should set start date filter', () => {
  const startDate = moment(0).add(5, 'days');
  const action = {
    type: 'SET_START_DATE',
    startDate
  };
  const state = filtersReducer(undefined, action);
  expect(state.startDate).toEqual(startDate);
});

// should set end date filter
test('should set end date filter', () => {
  const endDate = moment(0).add(6, 'days');
  const action = {
    type: 'SET_END_DATE',
    endDate
  };
  const state = filtersReducer(undefined, action);
  expect(state.endDate).toEqual(endDate);
});