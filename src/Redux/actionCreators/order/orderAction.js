import * as type from "./orderType";
import axios from "axios";
import toast from "react-hot-toast";

export const CreateOrderAction = (form, navigate) => {
  var data = JSON.stringify({
    stock_list: Object.values(form.stocks),
    address: form.relevant.address,
    relevant_details: form.relevant.message,
    preferred_shop: form.preferred.shopName,
    preferred_shop_location: form.preferred.shopLocation,
  });

  return async (dispatch, getState) => {
    const token = getState().customer.token;
    const toastID = toast.loading("Creating Order", {
      position: "top-center",
      style: { color: "#0E4E48" },
    });
    try {
      const response = await axios.post(
        "https://errander.herokuapp.com/api/order/",
        data,
        {
          headers: {
            // "Authorization": `Bearer ${token}`,
            Authorization:
              "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQ4MTI0OTg3LCJpYXQiOjE2NDgwMzg1ODcsImp0aSI6ImJhMGY2Y2RmYTM2ODRkZGViZjA5M2RmMThmNzRiZjQwIiwidXNlcl9pZCI6ImEuc3NkNDFAZ21haWwuY29tIn0.TTms4R5lnhNh46zNF5cOr2eKY63lqpWLslvJ7AyuFJ0",
            "Content-Type": "application/json",
          },
        }
      );

      dispatch({ type: type.createorderType, payload: response.data });
      navigate("/customer/home/order");
      toast.dismiss(toastID);
      toast.success("Order Created successfully");
    } catch {
      toast.dismiss(toastID);
      navigate("/customer/home/order");
      toast.error("Order was not created");
    }
  };
};

export const DeleteOrderAction = (id) => {
  return async (dispatch, getState) => {
    const token = getState().customer.token;
    const toastID = toast.loading("Deleting Order", {
      position: "top-center",
      style: { color: "#0E4E48" },
    });
    try {
      const response = await axios.delete(
        `https://errander.herokuapp.com/api/order/${id}`,
        {
          headers: {
            // "Authorization": `Bearer ${token}`,
            Authorization:
              "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQ4MTI0OTg3LCJpYXQiOjE2NDgwMzg1ODcsImp0aSI6ImJhMGY2Y2RmYTM2ODRkZGViZjA5M2RmMThmNzRiZjQwIiwidXNlcl9pZCI6ImEuc3NkNDFAZ21haWwuY29tIn0.TTms4R5lnhNh46zNF5cOr2eKY63lqpWLslvJ7AyuFJ0",
            "Content-Type": "application/json",
          },
        }
      );
      dispatch({ type: type.deleteorderType, payload: id });
      toast.dismiss(toastID);
      toast.success("Order deleted successfully");
    } catch (err) {
      toast.dismiss(toastID);
      toast.error(err.response.data.detail);
    }
  };
};

export const FetchOrderAction = () => {
  return async (dispatch, getState) => {
    const token = getState().customer.token;
    try {
      const response = await axios.get(
        "https://errander.herokuapp.com/api/order/uncompleted/list/",
        {
          headers: {
            // "Authorization": `Bearer ${token}`,
            Authorization:
              "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQ4MTI0OTg3LCJpYXQiOjE2NDgwMzg1ODcsImp0aSI6ImJhMGY2Y2RmYTM2ODRkZGViZjA5M2RmMThmNzRiZjQwIiwidXNlcl9pZCI6ImEuc3NkNDFAZ21haWwuY29tIn0.TTms4R5lnhNh46zNF5cOr2eKY63lqpWLslvJ7AyuFJ0",
            "Content-Type": "application/json",
          },
        }
      );
      dispatch({ type: type.fetchorderType, payload: response.data.results });
    } catch {
      toast.error(
        "Cannot get your active orders, please check your internet connection"
      );
    }
  };
};
