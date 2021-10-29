import React, { Fragment, useState } from "react";
import DropDown from "../FloatingElements/DropDown";
import ImageMap from "../UI/ImageMap";
import DetailsModal from "../FloatingElements/DetailsModal";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const [buttonOpen, setButtonOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentBikeComponent, setCurrentBikeComponent] = useState("");
  const [displayedBikeComponent, setDisplayedBikeComponent] = useState({});

  return (
    <Fragment>
      <div className="home-css">
        <DropDown />
        <ImageMap
          buttonOpen={buttonOpen}
          setButtonOpen={setButtonOpen}
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          setCurrentBikeComponent={setCurrentBikeComponent}
          currentBikeComponent={currentBikeComponent}
          setDisplayedBikeComponent={setDisplayedBikeComponent}
          displayedBikeComponent={displayedBikeComponent}
        />
        {modalOpen ? (
          <DetailsModal
            component={displayedBikeComponent}
            show={modalOpen}
            setModalOpen={setModalOpen}
          />
        ) : null}
      </div>
    </Fragment>
  );
};

export default Home;

// <OverlayTrigger overlay={<Dialogue content={currentBikeComponent} />}>
//* {buttonOpen ? <Dialogue content={currentBikeComponent} /> : null} */

//   <DetailsModal clickedComponent={currentBikeComponent} />;
