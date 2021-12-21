import "./PopUp.css"

const PopUp = (props)=>{
    return(
    <div className="popup_box">
        <div className="box">
            <h1>Hello</h1>
            <span className="close-icon" onClick={props.handleClose}>Cancel</span>
            {props.content}
        </div>
    </div>
    )
}

export default PopUp;