import * as type from "./orderType";
import axios from "axios";
import {toast} from 'react-toastify';


export const CreateOrderAction= (form, navigate)=>{

    var data = JSON.stringify({
        "stock_list": Object.values(form.stocks),
        "address": form.relevant.address,
        "relevant_details": form.relevant.message,
        "preferred_shop": form.preferred.shopName,
        "preferred_shop_location": form.preferred.shopLocation
      })


    return async (dispatch, getState)=>{
        const token= getState().customer.token
        try{
            const response= await axios.post("https://errander.herokuapp.com/api/order/", data,
            {headers:   {
                        // "Authorization": `Bearer ${token}`,
                        "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQ3ODY5NzI3LCJpYXQiOjE2NDc3ODMzMjcsImp0aSI6ImY0Y2ZmOGU4NmQ1ZjQwOTJiZmRjZTY5MzUwMzg2MDk2IiwidXNlcl9pZCI6ImJsaW5rc2JvbGFqaSsxMkBnbWFpbC5jb20ifQ.ORDUqf_9L__lCzuBxKQhRwuZED-vG28JAv4x1SpCNe4",
                        "Content-Type":"application/json"}
                         })
            dispatch({type: type.createorderType, payload: response.data})
            navigate("/customer/home")
            toast.success('Order Created successfully',)
        }
        catch{

        }
        
    }
}