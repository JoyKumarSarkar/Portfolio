import React from "react";
import education from "./Data/education.json";

const Education = () => {
  return (
    <>
      <div className=" education" id="education">
        <h1>EDUCATION </h1>
        <div className="container">
          {education.map((Data) => {
            return (
              <>
                <div key={Data.id} className="education-item  my-5" data-aos="zoom-in-up" data-aos-duration="2000">
                  <div className="one" >
                    <img src={`/images/${Data.imgSrc}`} alt="dp" />
                    <h2>{Data.organization}</h2>
                    <h5>
                      {" "}
                      <span style={{ color: "yellowgreen" }}>
                        {Data.designation}
                      </span>
                    </h5>
                    <h5>
                      {" "}
                      <span style={{ color: "yellowgreen" }}>
                        {Data.startDate} {Data.endDate}
                      </span>
                    </h5>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Education;
