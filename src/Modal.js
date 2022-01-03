import React, { useState } from 'react'
import "./PopUp.css"

const Modal =({setOpenModal})=> {
  const[isShowing, setIsShowing]=useState(false);
  const closeModal =()=>{
    setIsShowing(!isShowing&&setOpenModal)
    console.log("Second modal closed!")
  }
  return (
    <div className="modal-wrapper">
      <h1>Wallet details</h1>
      {console.log("Second modal opened!")}
      {/* <button onClick={()=>{setModalOpen(false)}}>Close Wallet</button> */}
        <div className="modal-header">
          <p>Account Balance</p>
        </div>
        <div className="modal-content">
          <div className='modal-body'>
            <h1>Account Balance</h1>
            <h1>Chain ID</h1>
            <h1>Balance</h1>
          </div>
          <div className='modal-footer'>
            <button onClick={closeModal}>Disconnect</button>
          </div>
        </div>
    </div>
  )
}

export default Modal

