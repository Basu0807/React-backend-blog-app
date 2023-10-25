import React from 'react'
import {BrowserRouter} from "react-router-dom";
import DataStore from '../DataStore';

const RouteComp = () => {
  return (
    <div>
        <BrowserRouter>
        <DataStore/>
        </BrowserRouter>
    </div>
  )
}

export default RouteComp