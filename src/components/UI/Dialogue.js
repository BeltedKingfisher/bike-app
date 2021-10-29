import { React, Fragment } from "react";
import "./Dialogue.css";

const Dialogue = (props) => {
  const { content } = props;
  //const [show, setShow] = useState(false);

  return (
    <Fragment>
      <Overlay>
        <Tooltip className="newClassName">{content}</Tooltip>
      </Overlay>
    </Fragment>
  );
};

// <Overlay target={target.current} show={show} placement="bottom">
//   {(props) => (
//     <Tooltip {...props}>The quick brown fox jumps over the lazy dog!</Tooltip>
//   )}
// </Overlay>;

export default Dialogue;
