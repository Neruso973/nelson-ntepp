import { useState } from "react";
import ReactCardFlip from "react-card-flip";

import { front } from "../data/front";
import { back } from "../data/back";

function Skills() {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  const handleIsFlipped = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flex flex-col place-content-around h-full">
      <div className="flex flex-row place-content-around">
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
          <div className="bg-white ">
            <div className="flex flex-col">
              <h3 className="text-center text-3xl">Front-end Techno</h3>
              <div className="grid grid-cols-3 gap-3 p-4">
                {front.map((item) => (
                  <img
                    src={item.logo}
                    alt={item.alt}
                    className={item.className}
                  />
                ))}
              </div>
              <button className="bottom-2 right-2" onClick={handleIsFlipped}>
                Back-end
              </button>
            </div>
          </div>
          <div>
            <div className="bg-white w-7/12">
              <div className="flex flex-col">
                <h3 className="text-center text-3xl">Back-end Techno</h3>
                <div className="grid grid-cols-3 gap-3 p-4">
                  {back.map((item) => (
                    <img
                      src={item.logo}
                      alt={item.alt}
                      className={item.className}
                    />
                  ))}
                </div>
              </div>
            </div>
            <button className="bottom-2 right-2" onClick={handleIsFlipped}>
              Front-end
            </button>
          </div>
        </ReactCardFlip>
        <div>
          <div className="bg-black h-96 w-96"></div>
        </div>
      </div>
      <div className="flex flex-row">             
      <div className="bg-white h-32 w-6/12 m-8 "></div>
      <div className="bg-black h-2/12 w-2/12"></div>
      </div> 
    </div>
  );
}

export default Skills;
