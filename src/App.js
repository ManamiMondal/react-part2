import React, { useLayoutEffect, useState } from "react";
import classnames from "classnames";
import "./index.css";
import "./App2.css";

const images = [0, 1, 2];

const App = () => {
  const [visibleImagesMap, setVisibleImagesMap] = useState(
    images.reduce((map, image) => {
      map[image] = false;
      return map;
    }, {})
  );

  useLayoutEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const viewportHeight = window.innerHeight;

      const newVisibleImagesMap = images.reduce((map, image) => {
        map[image] = scrollTop >= image * viewportHeight;
        return map;
      }, {});

      setVisibleImagesMap(newVisibleImagesMap);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const button = (
    <button className="joinBeta" onClick={() => {
    console.log("Button clicked!");
    }}>
    <span className="spanJoinBeta"> Join Beta </span>
    </button>
    );

  const icon = (
    <img src="https://i0.wp.com/blog.chroniclehq.com/wp-content/uploads/2023/01/Fav-icon.png?ssl=1" className="logo" alt="logo" style={{ zIndex: 3 }} />
  );

  return (
    <div className="app">
      <div style={{position: 'fixed', right: 40, top: 40, zIndex: 3}}>
        {button}
      </div>
      
      <div className="left-box">
        <div className="workflow">
          <img width="18" height="18" style={{ margin: "3px"}} src="https://chroniclehq.com/favicon.ico" alt="logo" />
          <h4 className="title">Workflow</h4>
        </div>
        <br/>
        <h2>Create at the speed of thought.</h2>
        <br/><br/>
        <p>
        Focus on your getting your thoughts out and crafting the best message while Chronicle does the heavy lifting for you
        </p>
      </div>
      <div style={{position: 'fixed', left: 40, top: 40}}>
        {icon}
      </div>
      <div className="sticky">
        <div className="frame">
          
          {images.map((image) => (
            <div
              className={classnames("image", `image_${image}`, {
                image_visible: visibleImagesMap[image],
              })}
              key={image}
            >
              
              <div className="image-content">
                {/* Your scrollable content here */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;