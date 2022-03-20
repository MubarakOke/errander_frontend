import * as type from "../actionCreators/order/orderType";


const OrderReducer= (state={}, action)=>{
    switch(action.type){
        case type.createorderType:
            return {...state, [action.payload.id]:{...action.payload}};
        default:
            return state;
    }
};

export default OrderReducer;