import {
    BUDGET_GET_REQUEST,
    BUDGET_GET_SUCCESS,
    BUDGET_GET_FAILURE,
} from 'data/constants';

export const fetchBudget = (id) => async (dispatch) =>{
    // dispatch akcje BUDGET_GET_REQUEST
    dispatch({
        type: BUDGET_GET_REQUEST,
    })

    // wykonać request do api
    try {
        const response = await fetchBudget(id);
        const data = response.json();

        // dispatch akcje BUDGET_GET_ACCESS + przekazać dane z requestu
        dispatch({
            type: BUDGET_GET_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: BUDGET_GET_FAILURE,
        })
    }
}

const fetchBudgetedCategories = () => {
    
}