import { useState,useEffect } from "react";

export default function useFetch({U_R_L}){
     let [data,setData] = useState([]);

     useEffect(()=>{
      fetch(U_R_L).then(res=>res.json(),(err)=>({err,data:null}))
      .then(dats=>{
          setData(dats)
      })
     },[U_R_L])

     return ({err:null,data});
}