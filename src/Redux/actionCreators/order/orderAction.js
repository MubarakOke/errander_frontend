import * as type from "./orderType";
import axios from "axios";
import toast from 'react-hot-toast';


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
        const toastID= toast.loading('Creating Order', {position: 'top-center', style:{color:"#0E4E48"}}) 
        try{
            const response= await axios.post("https://errander.herokuapp.com/api/order/", 
                                            data,
                                            {headers:   {
                                                        // "Authorization": `Bearer ${token}`,
                                                        "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQ3OTU3ODU2LCJpYXQiOjE2NDc4NzE0NTYsImp0aSI6IjY2ZWM1Y2VjNTc4NjRhOTQ4OGQ1MDc4MTA5NWI3ZWM2IiwidXNlcl9pZCI6ImJsaW5rc2JvbGFqaSsxNUBnbWFpbC5jb20ifQ.CloDu-0YWDvzOLvzD4Hwwzyu3LiokrT8Ts8AnRv7KxM",
                                                        "Content-Type":"application/json"}
                                                        })

            dispatch({type: type.createorderType, payload: response.data})
            navigate("/customer/home/order")
            toast.dismiss(toastID)
            toast.success('Order Created successfully')
        }
        catch{
            toast.dismiss(toastID)
            navigate("/customer/home/order")
            toast.error('Order was not created')
        }
        
    }
}

export const DeleteOrderAction= (id)=>{
    
    return async (dispatch, getState)=>{
        const token= getState().customer.token
        const toastID= toast.loading('Deleting Order', {position: 'top-center', style:{color:"#0E4E48"}})
        try{
            const response= await axios.delete(`https://errander.herokuapp.com/api/order/${id}`,
                                                {headers:   {
                                                    // "Authorization": `Bearer ${token}`,
                                                    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQ3OTU3MDQ2LCJpYXQiOjE2NDc4NzA2NDYsImp0aSI6Ijk5ZmIyMGI1MGVhMTRjZDdhMGJhMjg2N2U1YWNkN2QyIiwidXNlcl9pZCI6ImJsaW5rc2JvbGFqaSsxNUBnbWFpbC5jb20ifQ.g_-SqzkyDDp10H10L3zfy08W1kWTSryl9mZntFuQZhg",
                                                    "Content-Type":"application/json"}
                                                }    
                                                )
            dispatch({type: type.deleteorderType, payload: id})
            toast.dismiss(toastID)
            toast.success('Order deleted successfully')
            }
        catch (err){
            toast.dismiss(toastID)
            toast.error(err.response.data.detail)
        }
    }
}

export const FetchOrderAction= ()=>{

    return async (dispatch, getState)=>{
        const token= getState().customer.token
        try{
            const response=  await axios.get("https://errander.herokuapp.com/api/order/uncompleted/list/", 
                                        {headers:   {
                                            // "Authorization": `Bearer ${token}`,
                                            "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQ3OTU3MDQ2LCJpYXQiOjE2NDc4NzA2NDYsImp0aSI6Ijk5ZmIyMGI1MGVhMTRjZDdhMGJhMjg2N2U1YWNkN2QyIiwidXNlcl9pZCI6ImJsaW5rc2JvbGFqaSsxNUBnbWFpbC5jb20ifQ.g_-SqzkyDDp10H10L3zfy08W1kWTSryl9mZntFuQZhg",
                                            "Content-Type":"application/json"}
                                        })
            dispatch({type: type.fetchorderType, payload: response.data.results})
            }
        catch{
            toast.error('Cannot get your active orders, please check your internet connection')
        }
    }
}