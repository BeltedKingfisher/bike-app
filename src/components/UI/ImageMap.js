import { React, Fragment, useState, useEffect } from "react";
import "./ImageMap.css";

const ImageMap = (props) => {
  const {
    buttonOpen,
    setButtonOpen,
    setCurrentBikeComponent,
    modalOpen,
    setModalOpen,
    currentBikeComponent,
    setDisplayedBikeComponent,
  } = props;
  const [staticFactsArray, setStaticFactsArray] = useState([]);

  const getFacts = async () => {
    const response = await fetch(
      "https://api.jsonbin.io/v3/b/6171ba7caa02be1d445cdbee/5",
      {
        headers: {
          "X-Master-Key":
            "$2b$10$LjjJelon4pXUIxSAurElm.g8au6hMfgUYw7kqyZ3z26nSalxG1o9i",
        },
      }
    );
    const data = await response.json();
    const fetchedFactArray = data.record.map((obj) => {
      return {
        id: obj.id,
        name: obj.name,
        images: obj.images,
        facts: obj.facts,
      };
    });
    setStaticFactsArray(fetchedFactArray);
  };

  useEffect(() => {
    getFacts();
  }, []);

  const handleComponentMouseover = (event) => {
    setCurrentBikeComponent(event.target.alt);
    setButtonOpen(!buttonOpen);
  };

  const handleComponentMouseout = () => {
    setButtonOpen(!buttonOpen);
  };

  const handleComponentClick = (event) => {
    setCurrentBikeComponent(event.target.alt);
    setModalOpen(!modalOpen);
    staticFactsArray.map((bikeComponent) => {
      if (bikeComponent.name === currentBikeComponent) {
        return setDisplayedBikeComponent(bikeComponent);
      } else {
        return null;
      }
    });
  };

  return (
    <Fragment>
      <img
        useMap="#saddle"
        className="home-image"
        src={"../images/BikeImage.png"}
        alt="bike"
      />

      <map name="saddle">
        <area
          shape="rect"
          alt="Saddle"
          coords="225,47,351,78"
          onMouseOver={handleComponentMouseover}
          onMouseOut={handleComponentMouseout}
          onClick={handleComponentClick}
          title="Saddle"
          className="areaStuff"
        />
        <area
          shape="rect"
          alt="Handlebars"
          coords="593,82,645,168"
          onMouseOver={handleComponentMouseover}
          onMouseOut={handleComponentMouseout}
          onClick={handleComponentClick}
          title="Handlebars"
          className="area"
        />
        <area
          shape="rect"
          alt="Gear Shifters"
          coords="526,183,556,212"
          onMouseOver={handleComponentMouseover}
          onMouseOut={handleComponentMouseout}
          onClick={handleComponentClick}
          title="Gear Shifters"
          className="area"
        />
        <area
          shape="rect"
          alt="Derailleur"
          coords="174,380,203,412"
          onMouseOver={handleComponentMouseover}
          onMouseOut={handleComponentMouseout}
          onClick={handleComponentClick}
          title="Derailleur"
          className="area"
        />
        <area
          shape="rect"
          alt="Wheel"
          coords="557,223,807,481"
          onMouseOver={handleComponentMouseover}
          onMouseOut={handleComponentMouseout}
          onClick={handleComponentClick}
          title="Wheel"
          className="area"
        />
      </map>
    </Fragment>
  );
};

export default ImageMap;

//const bikeComponentRef = useRef();
//ref={bikeComponentRef}
// <OverlayTrigger
//         show={buttonOpen}
//         placement="top"
//         overlay={(props) => (
//           <Tooltip {...props}>{currentBikeComponent}</Tooltip>
//         )}
//         container={bikeComponentRef}
//         className="thisOverlay"
//       >
//</OverlayTrigger>

// let mousePositionX = event.pageX;
// let mousePositionY = event.pageY;
// let tooltip = document.querySelector(".tooltip");
// tooltip.style.top = mousePositionX;
// tooltip.style.left = mousePositionY;

// return (
//           <DetailsModal component={bikeComponent} key={bikeComponent.id} />
