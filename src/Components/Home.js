import React, { useContext } from "react"
import { Store } from "./DataStore";
import { Link } from "react-router-dom";
import LinkCompo from "./FuncCompo/LinkCompo";
import GenericCompo from "./FuncCompo/GenericCompo";
import GenericCompo2 from "./FuncCompo/GenericCompo2";
import Footer from "./FuncCompo/Footer";



const Home = () => {
  const HomeData= useContext(Store)

  const shuffledImages = [...HomeData];
  // console.log(shuffledImages);

  for (let i = shuffledImages.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledImages[i], shuffledImages[j]] = [shuffledImages[j], shuffledImages[i]];
  }

  const selectedImages = shuffledImages.slice(0, 3);
  const LatestImages = shuffledImages.slice(4, 7);
  const SingleImage = shuffledImages.slice(7, 8);
  // console.log(selectedImages);
  const ScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  
  return (
    
    <>
      <LinkCompo/>
      
      <div className="Home_Main">
        <div className="Home_Images">
        {selectedImages.map((data,index)=>{
      return(
        
          <Link className={`img_${index} Home_Img`} to={"/Data/"+data.Cat+data.id} state={[data.id,data.Cat]} onClick={()=>ScrollToTop()} style={{backgroundImage:`url(${data.image})`}}key={index} >
          {data.heading}
          </Link>
       
      )
    })}
</div>
<div className="The_Latest">
      <h1 className="Title">The Latest</h1>
      <div className="Latest_Box">
      {LatestImages.map((data,index)=>{
        return(
          <Link className='Latest_Card' to={"/Data/"+data.Cat+data.id} state={[data.id,data.Cat]} onClick={()=>ScrollToTop()} key={index} >
        <img src={data.image} alt="notfound"/>
      <div style={{display:"flex",flexDirection:"column"}}>
      <h4 className="Latest_heading">{data.heading}</h4>
        <p>{data.short_description}</p>
        <p className="Latest_Date">{data.Date}</p>
      </div>
       
          </Link>
        )
      })}
      </div>
    </div>

    
    <h1 className="Title">Latest Articles</h1>
    <div className="The_Article">
    
      <div className="Article_Box_1">
      
        {shuffledImages.filter((data)=> data.id%15===0).map((data,index)=>{
          return(
            <div key={index}>
              <GenericCompo
            heading={data.heading}
            image={data.image}
            Date={data.Date}
            short_description={data.short_description}
            Cat={data.Cat}
            id={data.id}
          />
            </div>
            
          )
        })}
        
        {
          SingleImage.map((data,index)=>{
            return(
              <Link className="single_img" to={"/Data/"+data.Cat+data.id} state={[data.id,data.Cat]} onClick={()=>ScrollToTop()}key={index}>
                <img src={data.image} alt="notfound" />
              </Link>
            )
          })
        }

      </div>

      <div className="Article_Box_2">
        <div className="Add">Advertisement</div>
      <h1 className="Title">Top Post</h1>
        {shuffledImages.filter((data=>data.id%15===0)).map((data,index)=>{
          return(
            <div key={index}>
             
            <GenericCompo2
              index={index}
              heading={data.heading}
              image={data.image}
              Date={data.Date}
              Cat={data.Cat}
              id={data.id}
            />
          </div>
          )
        })}

      </div>


    </div>

    <div className="The_Latest">
      <h1 className="Title">Latest Stories</h1>
      <div className="Latest_Box">
      {LatestImages.map((data,index)=>{
        return(
          <Link className='Latest_Stories_Card' to={"/Data/"+data.Cat+data.id} state={[data.id,data.Cat]} onClick={()=>ScrollToTop()} key={index} >
        {/* <img src={data.image} alt="notfound"/> */}
      <div style={{display:"flex",flexDirection:"column"}}>
      <h1 className="Latest_heading">{data.heading}</h1><br/>
        <p>{data.short_description}</p><br/>
        <p className="Latest_Date">{data.Date}</p>
      </div>
       
          </Link>
        )
      })}
      </div>
    </div>




       
        
   
      

      
      
     
     
      </div>
      <Footer/>
      </>
  )
}

export default Home;
