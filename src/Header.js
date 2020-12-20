import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

 function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const customStyles = {
        content : {
          top  : '50%',
          left : '50%',
          right : 'auto',
          bottom : 'auto',
          marginRight  : '-50%',
          transform  : 'translate(-50%, -50%)'
        }
      };
    
      Modal.setAppElement('#root');

      function toggleModal() {
        setIsOpen(!isOpen);
      }

    return (
        <div>
        <nav className="navbar navbar-light bg-dark">
        <form className="form-inline">
          <button onClick={toggleModal} className="btn btn-outline-success my-2 my-sm-0" type="submit">copy Html</button>
        </form>
      </nav>
             <Modal
                    isOpen={isOpen}
                    onRequestClose={toggleModal}
                    contentLabel="My dialog"
                >
                    <div>copy html..</div>
                    <button onClick={!toggleModal}>Close</button>
                </Modal>
      </div>
    )
}

export default Header;
