import React from "react";
import { ResumeItems } from "../constant/data";

const Experience = () => {
  return (
    <section>
      <div className="container"></div>
      <h2> My Resume </h2>

      {/* wrapper */}
      <div className="">
        {ResumeItems.map((item) => (
          <div key={item.id}>
            {/* Title */}
            <h3>{item.title}</h3>

            {/* list */}
            <div>
              {item.list.map((listItem, index) => (
                <div key={index}>
                    <div>
                        <h4 className="">{listItem.role}</h4>
                    </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
