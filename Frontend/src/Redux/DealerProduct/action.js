import axios from "axios"
import { ADDCARS, DELETECARS, GETCARS, UPDATECARS } from "./actionTypes"


export const getFun = ()=> (dispatch)=>{
     axios.get(`http://localhost:5000/marketItem/dealer`,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token")
            }
        }
    ).then((res)=>{
        console.log({"dealer":res});
        dispatch({ type: GETCARS, payload: res.data })
    } ).catch((err)=>{
        console.log({"dealer":err});
    })
    
}
export const addFun = (payload)=> (dispatch)=>{
    console.log('payload:', payload)
     axios.post(`http://localhost:5000/marketItem/create`,payload,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token")
            }
        }
    ).then((res)=>dispatch({ type: ADDCARS, payload: res.data }))
}
export const updateFun = (id,payload)=> (dispatch)=>{
    //console.log(payload,id);
    return  axios.patch(`http://localhost:5000/marketItem/update/${id}`,payload,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token")
            }
        }
    ).then((res)=>dispatch({ type: UPDATECARS}))
}

export const deleteFun = (id)=> (dispatch)=>{
    return axios.delete(`http://localhost:5000/marketItem/delete/${id}`,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token")
            }
        }
    ).then((res)=>dispatch({ type: DELETECARS, payload: id }))
}