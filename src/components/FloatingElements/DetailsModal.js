import { React, Fragment } from "react";
import "./DetailsModal.css";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";

const DetailsModal = (props) => {
  const { component, show, setModalOpen } = props;

  const handleClose = () => {
    setModalOpen(!show);
  };

  return (
    <Fragment>
      <Modal show={show} onHide={handleClose} backgroundColor="black" centered>
        <div className="myModal">
          <Modal.Header className="myModalHeader">
            {component.name}
          </Modal.Header>
          <Modal.Body>
            <div className="list">
              {component.images.map((image, index) => {
                const content = component.facts[index];
                return (
                  <Table borderless>
                    <tbody>
                      <tr>
                        <td>
                          <img
                            className="componentImages"
                            src={`../images/${image}`}
                            alt={image}
                          />
                        </td>
                        <td>
                          <p className="componentFacts">{content}</p>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                );
              })}
            </div>
          </Modal.Body>
        </div>
      </Modal>
    </Fragment>
  );
};

export default DetailsModal;

// fetch("https://api.jsonbin.io/v3/b/6171ba7caa02be1d445cdbee", {
//     headers: {
//       "X-Master-Key":
//         "$2b$10$LjjJelon4pXUIxSAurElm.g8au6hMfgUYw7kqyZ3z26nSalxG1o9i",
//     },
//   })
//     .then((response) => response.json())
//     .then((response) => {
//       response.map((obj) => {
//         return {
//           id: obj.id,
//           name: obj.name,
//           images: obj.images,
//           facts: obj.facts,
//         };
//       });
//       setStaticFactsArray(response);
//     });
// },

/* */

//

// {
//   for (let i = 0; (i = component.images.length); i++) {
//     <div>
//       <img
//         className="componentImages"
//         src={`images/${component.image[i]}`}
//         alt={component.image[i]}
//       />
//       <p className="componentFacts">{component.facts[i]}</p>
//     </div>;
//   }
// }

// const componentFacts = component.facts.map((fact) => {
//   return <p>{fact}</p>;
// });
