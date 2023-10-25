import React from 'react'
import { Link } from 'react-router-dom'

const GenericCompo = ({heading,image,Date,short_description,Cat,id}) => {
  
 const ScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  
  return (
    <>

  
 <Link id="Link" to={"/Data/"+Cat+id} state={[id,Cat]} >
 
<div className='GenericContent-1'onClick={()=>ScrollToTop()} >
      <img src={image} alt='notfound'/>
  <div className='Container1-1'>
    <h4>{heading}</h4>
    <p>{short_description}</p><br/>
    <span className='Blog'>Blog/</span><span className='Date'>{Date}</span>
    
  </div>
  

</div>


    </Link>
 
   

    
 
     
    </>
  )
}

export default GenericCompo