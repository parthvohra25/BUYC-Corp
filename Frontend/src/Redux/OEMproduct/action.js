import axios from "axios";
import { ERROR, GETOEM, LOADING } from "./actionTypes";

export const getOEM=()=>async(dispatch)=>{
    dispatch({type:LOADING});
    try {
            axios.get(`http://localhost:5000/OEM`,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token")
            }
        }).then((res)=>dispatch({type:GETOEM,payload:res.data}))

    } catch (err) {
        console.log(err)
        dispatch({type:ERROR})
    }
}