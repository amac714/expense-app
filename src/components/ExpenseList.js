import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

// regular unconnected component
// when you connect an item to the redux store it is reactive
const ExpenseList = (props) => (
  <div>
    <h1>ExpenseList</h1>
    {props.expenses.map((expense) => {
      return <ExpenseListItem key={expense.id} {...expense}/>
    })}
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);

// export default ConnectedExpenseList;