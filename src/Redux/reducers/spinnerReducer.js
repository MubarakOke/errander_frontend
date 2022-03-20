import * as type from "../actionCreators/spinner/spinnerType";

const SpinnerReducer= (state=false, action)=>{
    switch(action.type){
        case type.hideSpinner:
            return state= false;
        case type.showSpinner:
            return state= true;
        default:
            return state;
        
    }
}