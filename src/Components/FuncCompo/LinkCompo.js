import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'


const LinkCompo = () => {

  const[menu,setmenu]=useState(true)
  // console.log(menu);

  return (
    <>
    <div className='NavBar'>
       <Link to ="/" className='NAV'>
        <div className='heading'>
        <span className='heading1'>THE</span>
        <h1 className='heading2'>Siren</h1>
        </div>
        </Link> 

        <div className='Ham_icon' onClick={()=>{setmenu(!menu)}}>
        <div className='bar bar1'></div>
        <div className='bar bar2'></div>
        <div className='bar bar3'></div>
        </div>

       
        

        
      <div id='NavLinks'>
       <NavLink className='NAV' onClick={()=>{setmenu(!menu)}}style={({isActive})=>({color:isActive?"rgb(255, 132, 0)":" "})} to="/">Home</NavLink>
       <NavLink  className='NAV' style={({isActive})=>({color:isActive?"rgb(255, 132, 0)":" "})} to="/bollywood">Bollywood</NavLink>
       <NavLink   className='NAV'style={({isActive})=>({color:isActive?"rgb(255, 132, 0)":" "})}to="/technology">Technology</NavLink>
       <NavLink  className='NAV'style={({isActive})=>({color:isActive?"rgb(255, 132, 0)":" "})} to="/hollywood">Hollywood</NavLink>
       <NavLink  className='NAV'style={({isActive})=>({color:isActive?"rgb(255, 132, 0)":" "})} to="/fitness">Fitness</NavLink>
       <NavLink  className='NAV'style={({isActive})=>({color:isActive?"rgb(255, 132, 0)":" "})} to="/food">Food</NavLink>
       
       </div>
       
       <br/>
      </div>
      <div className='display_menu' >
        <NavLink className={menu?"Hamburger_menu":" menu "} style={({isActive})=>({color:isActive?"rgb(255, 132, 0)":" "})} to="/">Home</NavLink>
       <NavLink  className={menu?"Hamburger_menu":" menu"} style={({isActive})=>({color:isActive?"rgb(255, 132, 0)":" "})} to="/bollywood">Bollywood</NavLink>
       <NavLink   className={menu?"Hamburger_menu":" menu"}style={({isActive})=>({color:isActive?"rgb(255, 132, 0)":" "})}to="/technology">Technology</NavLink>
       <NavLink  className={menu?"Hamburger_menu":" menu"}style={({isActive})=>({color:isActive?"rgb(255, 132, 0)":" "})} to="/hollywood">Hollywood</NavLink>
       <NavLink  className={menu?"Hamburger_menu":" menu"}style={({isActive})=>({color:isActive?"rgb(255, 132, 0)":" "})} to="/fitness">Fitness</NavLink>
       <NavLink  className={menu?"Hamburger_menu":" menu"}style={({isActive})=>({color:isActive?"rgb(255, 132, 0)":" "})} to="/food">Food</NavLink>


        </div>
    </>
    
  )
}

export default LinkCompo