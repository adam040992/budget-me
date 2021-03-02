import React, { useEffect } from 'react';
import { fetchBudget, fetchBudgetedCategories } from 'data/actions/budget.actions';
import { connect } from 'react-redux';
import { fetchAllCategories } from 'data/actions/common.actions';

const Budget = ({ fetchBudget, fetchBudgetedCategories, fetchAllCategories }) => {
    useEffect(() => {
        fetchBudget(1);
        fetchBudgetedCategories(1);
        fetchAllCategories();
      }, [fetchBudget, fetchBudgetedCategories, fetchAllCategories]);

    return (
        <div>Budget page!</div>
    )
}

export default connect(state => {
    return {
      budget: state.budget.budget
    }
  }, {
    fetchBudget,
    fetchBudgetedCategories,
    fetchAllCategories
  })(Budget)

