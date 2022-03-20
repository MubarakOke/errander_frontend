import * as type from "./spinnerType";


export const showSpinner= ()=>{
    return {type: type.showSpinner}
}

export const hideSpinner= ()=>{
    return {type: type.hideSpinner}
}