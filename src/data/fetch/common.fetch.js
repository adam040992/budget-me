export const fetchAllCategories = () => {
    const promise = fetch(`http://localhost:3001/categories/?_expand=parentCategory`);
    // const promise = fetch(`${process.env.REACT_APP_API_URL}/budgets/${id}/?_embed=transactions`);


    return promise;
};