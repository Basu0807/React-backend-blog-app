import React, { useContext } from "react";
import { Store } from "./DataStore";

import GenericCompo from "./FuncCompo/GenericCompo";

import GenericCompo2 from "./FuncCompo/GenericCompo2";
import LinkCompo from "./FuncCompo/LinkCompo";

const Bollywood = () => {
  const BollyData = useContext(Store);
  // console.log(BollyData);
  return (
    <>
    <LinkCompo/>
      <div className="ContentContainer">
        <div className="Content-1">
          <h1>Bollywood</h1>
          <div className="Underline"></div>
          <br />

          {BollyData.filter((data) => data.Cat === "Bollywood").map(
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
            {BollyData.filter(
              (data) => data.Cat === "Bollywood" && data.id % 3 === 0
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
  );
};

export default Bollywood;
