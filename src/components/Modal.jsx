/* eslint-disable react/prop-types */
import "./modal.scss"
import { RiCloseLine } from "react-icons/ri";

const Modal = ({ setIsOpen }) => {
    return (
            <><div className="darkBG" onClick={() => setIsOpen(false)}></div>
            <div className="centered">
            <div className="modal">
                <div className="modalHeader">
                    <h5 className="heading">Step 1: Submission Guidelines</h5>
                    <p>Copy Kindly go through the guidelines</p>
                </div>
                <button className="closeBtn" onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginTop: "3px" }} />
          </button>
          <div className="modalContent">
          <p>Submission Guidelines:</p>
          <ol>
            <li>Authors should provide a detailed abstract</li>
            <li>Authors should provide a detailed abstract</li>
            <li>Authors should provide a detailed abstract</li>
            <li>Authors should provide a detailed abstract</li>
        </ol>
        <p>Clicking “Next” means you have read and comply with the submission guidelines</p>
          </div>
          <div className="modalActions">
            <div className="actionsContainer">
              <button className="deleteBtn" onClick={() => setIsOpen(false)}>
                Next
              </button>
            
            </div>
          </div>
            </div>
        </div>
        </>
     )
}


export default Modal;