import * as type from "../actionCreators/customers/orderType";
import _ from 'lodash'


const OrderReducer= (state={}, action)=>{
    switch(action.type){
        case type.createorderType:
            return {[`order${action.payload.id}`]:{...action.payload}, ...state};
        case type.deleteorderType:
            return _.omit(state, `order${action.payload}`)
        case type.fetchorderType:
            return {...state, ..._.mapKeys(action.payload, order=>`order${order.id}`)}
        default:
            return state;
    }
};

export default OrderReducer;