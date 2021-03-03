import React from 'react';
import { connect } from 'react-redux';
import { groupBy } from 'lodash';

import { ToggleableList } from 'components'

const BudgetCategoryList = ({ budgetedCategories, allCategories }) => {
    const budgetedCategoriesByParent = groupBy(budgetedCategories, item => allCategories.find(category => category.id === item.categoryId).parentCategory.name);

    console.log(budgetedCategoriesByParent);
    
    return (
        <ToggleableList 
            items={[]}
        />
    )
}

export default connect(state => ({
    budgetedCategories: state.budget.budgetedCategories,
    allCategories: state.common.allCategories,
}))(BudgetCategoryList);