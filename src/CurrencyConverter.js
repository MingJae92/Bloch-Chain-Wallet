import "./CurrencyConverter.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import Modal from "./Modal";

 const CurrencyConverter =()=>{
    const [modalOpen, setOpenModal]=useState(false);
    const [Nep, setNep]= useState(0);
    const [Busd, setBusd]=useState(0);

    const Converter =(value)=>{
        setNep(value)
        setBusd(Number(value)*3);
        console.log(Number(value)*3)
    }
     const [open, setOpen]= useState(false);
     const handleClickOpen =()=>{
           setOpen(true);
           console.log("Opened");
     };
    const handleClose = ()=>{
         setOpen(false);
         console.log("Closed")
     };

     return(
        
        <div>
           <div className="logo">
                <h1>Crypto Wallet</h1>
                <img src="https://img.icons8.com/ios-glyphs/30/000000/leopard.png"/>
            </div>
                <form>
                    <div className="form-group">
                        <h2>Crypto Converter</h2>
                        <label for="inputlg">NEP</label>
                        <input value={Nep} onChange={(e)=>Converter(e.target.value)} className="form-control input-lg" id="inputsm" type="number"></input>
                        <img src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/000000/external-transfer-arrows-dreamstale-lineal-dreamstale-2.png"/>
                    </div>
                    <div className="form-group">
                        <label for="inputlg">BUSD</label>
                        <input value={Busd} className="form-control input-lg" id="inputlg" type="number"></input>
                        <Button id="button" variant ="outlined" color="primary" onClick={handleClickOpen}>Check wallet details</Button>
                        <Dialog open={open} onClose={handleClose}>
                            <DialogTitle>
                                Wallet details
                            </DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                   Wallet not connected. Please click the "Connect Now" button below.
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose} color="primary">
                                    Cancel
                                </Button>
                                <Button onClick={()=>{setOpenModal(true)}}  color="primary">
                                    Connect
                                </Button>   
                            </DialogActions>
                                {modalOpen &&<Modal setOpenModal={setOpenModal}/>}
                        </Dialog>
                    </div>
                </form>     
        </div>
        
     )
 }

 export default CurrencyConverter


