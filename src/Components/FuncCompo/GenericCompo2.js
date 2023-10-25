import React from 'react'
import { Link } from 'react-router-dom'

const GenericCompo2 = ({Cat,id,image,heading,Date,index}) => {

    const ScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        // console.log(index);
      }

  return (
    <>
<Link id="Link" to={"/Data/"+Cat+id} state={[id,Cat]} onClick={()=>ScrollToTop()}>

<div className='TopPost' >
<div className='Subhead'id={"TopPost"+index}>
<div className='TopPostImage'> 
<img src={image} alt={"logo"+index} height={100} width={100} className='topimage'/>
</div>

<div className='TopPostHead'>
<p>{heading}</p>
<span className='Blog'>Blog/</span><span className='Date'>{Date}</span>
</div>
</div>


<div className={"index"+index} id={"number"+index}>
<h1 id="index">{index+1}</h1>
</div>


</div>
</Link>
    
    </>
  )
}

export default GenericCompo2