import React, { useContext } from 'react'
import { Store } from './DataStore'
import GenericCompo from './FuncCompo/GenericCompo'
import GenericCompo2 from './FuncCompo/GenericCompo2'
import LinkCompo from './FuncCompo/LinkCompo'

const Technology = () => {
  const TechnologyData= useContext(Store)
  return (
    <>
    <LinkCompo/>
    <div className="ContentContainer">
        <div className="Content-1">
          <h1>Technology</h1>
          <div className="Underline"></div>
          <br />

          {TechnologyData.filter((data) => data.Cat === "Technology").map(
            (item, index) => {
              return (
                <div key={index}>
                  <GenericCompo
                    heading={item.heading}
                    image={item.image}
                    Date={item.Date}
                    short_description={item.short_description}
                    Cat={item.Cat}
                    id={item.id}
                  />
                </div>
              );
            }
          )}
        </div>

        <div className="Content-2">
          <h1>Top Posts</h1>
          <div className="Underline"></div>
          <br />
          <div className="GenericContent-2">
            {TechnologyData.filter(
              (data) => data.Cat === "Technology" && data.id % 3 === 0
            ).map((item, index) => {
              return (
                <div key={index}>
                  <GenericCompo2
                    index={index}
                    heading={item.heading}
                    image={item.image}
                    Date={item.Date}
                    Cat={item.Cat}
                    id={item.id}
                  />
                </div>
              );
            })}
          </div>
          <br />
          <div className="Ad">Ad</div>
          <br />
          <div>
            <video
              src="https://thumbs.gfycat.com/AcademicFabulousGyrfalcon-mobile.mp4"
              autoPlay={true}
              loop={true}
              className="Ad"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Technology