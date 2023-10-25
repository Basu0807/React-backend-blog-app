import React, { useContext } from "react";
import { Store } from "./DataStore";
// import { Link } from 'react-router-dom';
import GenericCompo from "./FuncCompo/GenericCompo";
import GenericCompo2 from "./FuncCompo/GenericCompo2";
import LinkCompo from "./FuncCompo/LinkCompo";

const Hollywood = () => {
  const HollywoodData = useContext(Store);
  // console.log(Hollywood);
  return (
    <>
      <LinkCompo />
      <div className="ContentContainer" >
        <div className="Content-1">
          <h1>Hollywood</h1>
          <div className="Underline"></div>

          {HollywoodData.filter((data) => data.Cat === "Hollywood").map(
            (item, index) => {
              return (
                <div key={index}>
                  <GenericCompo
                    key={index}
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
          <div className="GenericContent-2">
            <div>
              {HollywoodData.filter(
                (data) => data.Cat === "Hollywood" && data.id % 3 === 0
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
          </div>
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
  );
};

export default Hollywood;
