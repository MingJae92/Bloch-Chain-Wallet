import React from 'react'

const Modal =(setModalOpen)=> {
  return (
    <div className='modal'>
      <h1>Wallet details</h1>
      <button onClick={()=>{setModalOpen(false)}}>Close Wallet</button>
    </div>
  )
}

export default Modal

