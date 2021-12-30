import React from 'react'
import "./PopUp.css"

const Modal =({setModalOpen})=> {
  return (
    <div className="modal-wrapper">
      <h1>Wallet details</h1>
      {console.log("Hello, its working!")}
      <button onClick={()=>{setModalOpen(false)}}>Close Wallet</button>
        <div className="modal-header">
          <p>Account Balance</p>
        </div>
        <div className="modal-content">
          <div className='modal-body'>
            <h1>Account Balance</h1>
          </div>
          <div className='modal-footer'>
            <button>Close</button>
          </div>
        </div>
    </div>
  )
}

export default Modal

