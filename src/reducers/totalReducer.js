

export default (state = [], action) => {

    switch(action.type)
    {
        case 'FETCH_TOTAL':
            return action.payload;
        default:
            return state;
    }

};