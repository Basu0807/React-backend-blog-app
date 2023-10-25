import React, { createContext, useEffect, useState } from "react";
import Home from "./Home";
import Bollywood from "./Bollywood";
import Technology from "./Technology";
import Hollywood from "./Hollywood";
import Fitness from "./Fitness";
import Food from "./Food";
import { Route, Routes, } from "react-router-dom";
import DynamicCompo from "./FuncCompo/DynamicCompo";
import axios from "axios";


export const Store = createContext();
function DataStore() {
  const [data,setData] = useState([]);
 
  useEffect(()=>{
    axios.get('https://blog-app-server-wz44.onrender.com/blog/data')
  .then((res)=>setData(res.data))
  .catch((err)=>console.log(err))
  },[])
// console.log(data);
    
 
  return (
    <Store.Provider value={data}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bollywood" element={<Bollywood />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/hollywood" element={<Hollywood />} />
        <Route path="/fitness" element={<Fitness />} />
        <Route path="/food" element={<Food />} />
        <Route path={"/Data/:id"}element={<DynamicCompo/>}/>
      </Routes>
    </Store.Provider>
  );
}

export default DataStore;
