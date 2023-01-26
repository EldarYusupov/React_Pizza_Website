const initialState = {
    sortBy: {
         type:'popular',
            order:'desc'
    },
    category:null
}

const filters = (state = initialState, actions) => {
    if (actions.type === 'SET_SORT_BY'){
        return {
            ...state,
            sortBy:actions.payload
        }
    }
    if (actions.type === 'SET_CATEGORY'){
        return {
            ...state,
            category:actions.payload
        }
    }
    return state
}

export default filters;