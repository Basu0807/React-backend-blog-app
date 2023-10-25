import React, { useContext } from 'react'
import { useLocation, Link, useNavigate} from 'react-router-dom'

import {Store} from '../DataStore';
import img1 from '../Postpage-web – 1/Mask Group 16.png'
import clap from '../Postpage-web – 1/rythm.svg'
import share from '../Postpage-web – 1/share.svg'
import Footer from './Footer';

const DynamicCompo = () => {
    const data =useContext(Store)
    const IndexValue =useLocation().state[0]
    const Category = useLocation().state[1]

    
    // console.log(IndexValue)
    // console.log(Category)
    const shuffledImages = [...data];
  // console.log(shuffledImages);

  for (let i = shuffledImages.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledImages[i], shuffledImages[j]] = [shuffledImages[j], shuffledImages[i]];
  }


    const ScrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    
const Navi = useNavigate();

const goBack=()=>{
  Navi(-1)
  window.scrollTo({ top: 0, behavior: 'smooth'});
  
}

  

  return (
    < div className='DynamicCompo' onClick={()=>ScrollToTop()} >
      <Link to ="/" className='Dynamic_NAV'>
        <div className='Dyanmic_heading'>
        <div className='Dynamic_heading1'>THE</div>
        <div className='Dynamic_heading2'>Siren</div>
        </div>
        <button>Get Started</button>
        
        </Link> 
      <div className='SideBtn'>
      <button className='BackBtn' onClick={goBack} >-Back-</button>      
      <div className='Clap_Share'>
     <img src={clap} alt='Clap' height={30}/> <span>9.8K Claps</span>
      <img src={share} alt='share' height={30}/><span>Share Content</span>
      </div>
      
      </div>
      
{data.filter((item)=>item.id === IndexValue).map((data,index)=>{
    return(
        <div className='DynamicCompo1' key={index}>
        <h1>{data.heading}</h1>

        <div className='MyInfo' >
          <div className='MyName'>
          <img src={img1} alt='notfound' />
          <div >
          <div style={{fontSize:14}}>Basu Pandey</div>
          <p style={{ textAlign:'left'}}>{data.Date}</p>
          </div>
          
          
          </div>
          <div className='SocialMedia'>
            <img src='https://worldofprintables.com/wp-content/uploads/2020/12/Social-Icons-01-Free-SVG.png.webp' alt='notfound'/>
            
          </div>
         
        </div>

        <div className='DynamicImage'>
        <img src={data.image} alt='notfound' />
        <p>{data.long_description}</p>
        </div><br/>
        <div className='DynamicTag'>
          <p>React</p>
          <p>Java</p>
          <p>Animation</p>
        </div>
        <div className='ClapTag'>
          <img src={clap} alt='notfound'/>
          <p>9.8K Claps</p>
        </div>
       
     <div><br/>
     <hr className='DynamicHr'/>
     </div>
        <div className='MyInfo2'>
          <div className='MyName2'>
          <img src={img1} alt='notfound'/>
          </div>
          <div style={{lineHeight:1,padding:5}}>
          <p style={{ textAlign:'left',color:'#908D8D'}}>Written By</p>
          <div style={{fontSize:20}}>Basu Pandey</div>
          <p style={{ textAlign:'left',color:'#908D8D'}}>{data.Date}</p>
          </div>
          </div>
          <hr className='DynamicHr'/>
        
        </div>
    )
})}
<div><br/>
<h3 className="MoreSiren_heading">More from the Siren</h3>
<div  className="MoreSiren">

{shuffledImages.filter((item)=>item.Cat===Category).slice(5,8).map((data,index)=>{
  
    return(
        <Link to= {"/Data/"+data.Cat+data.id} state={[data.id,data.Cat]}  className='MoreSirenCard' key={index}>
           
          <div >
          <img src={data.image} alt='notfound'/>
          <p> {data.heading}</p>

          <div style={{display:'flex'}}>
          <div><img src={img1} alt='notfound1' height={50} width={50}/></div>

<div style={{padding:10}}>
  <div style={{height:20}}>Basu Pandey</div>
  <div style={{height:15,color:'#908D8D',fontSize:12}}>{data.Date}</div>
</div>

          </div>
          
        
          
           
           
           
           </div>
          
          

        </Link>
      
    )
})}
</div>
</div>
<Footer/>
</div>

  )
}

export default DynamicCompo;
// filter((item)=>item.Cat===Category && IndexValue<item.id && item.id<IndexValue +4