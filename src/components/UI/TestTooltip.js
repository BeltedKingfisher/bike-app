import React, { useRef, useState } from "react";
import { Overlay, Tooltip, Button } from "react-bootstrap";
import "./TestTooltip.css";
import "bootstrap/dist/css/bootstrap.min.css";

const TestTooltip = () => {
  const [show, setShow] = useState(false);
  //let target;
  const target = useRef();

  const clickHandler = (event) => {
    // let target = event.target;
    console.log(target);
    setShow(!show);
  };

  return (
    <div className="test-tooltip">
      <Button variant="danger" ref={target} onClick={clickHandler}>
        Click on me
      </Button>
      <Overlay target={target.current} show={show} placement="bottom">
        {(props) => (
          <Tooltip {...props}>
            The quick brown fox jumps over the lazy dog!
          </Tooltip>
        )}
      </Overlay>
    </div>
  );
};

export default TestTooltip;
