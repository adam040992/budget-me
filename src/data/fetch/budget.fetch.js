export const fetchBudget = (id) => {
    const promise = fetch(`http://localhost:3001/budgets/${id}/?_embed=transactions`);
    // const promise = fetch(`${process.env.REACT_APP_API_URL}/budgets/${id}/?_embed=transactions`);


    return promise;
}

export const fetchBudgetedCategories = (id) => {
    const promise = fetch(`http://localhost:3001/budgets/${id}/budgetCategories`);
    // const promise = fetch(`${process.env.REACT_APP_API_URL}/budgets/${id}/budgetCategories`);

    return promise;
}

