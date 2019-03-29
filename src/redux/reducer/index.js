import data from '../action/index'
export default(state = data.init,action)=>{
    switch (action.type){
        case data.typeRe:
        return {
            ...state,
            isRe:true,
            user:[...state.user],
            shop:[...state.shop]
        };
        case data.typeUser:
        return {
            ...state,
            isRe:state.isRe,
            user:[...state.user],
            shop:[...state.shop]
        };
        default:
        return state
    }
}