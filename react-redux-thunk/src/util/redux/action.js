import axios from "axios"
import { FETCH_DATA } from "./actiontype"

export const fetchUserdata = (data)=>{
    return {
        type : FETCH_DATA,
        payload : data
    }
}

//using thunk funciton 
export const FetchData = ()=>{
    return (dispatch)=>{
        axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
            let users = response.data;
            console.log(users)
            dispatch(fetchUserdata(users))
          })
          .catch(error => {
            console.log(error)
          });
    }
}