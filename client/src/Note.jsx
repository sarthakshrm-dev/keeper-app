import React, {useState} from "react"
import DeleteDialog from "./DeleteDialog"
import ShowNote from "./ShowNote"

function CreateNote(props) {

    const [del, setDel] = useState(false)
    const [showNote, setShowNote] = useState(false)
 
    function handleClick(e) {

        const name = e.target.name
        const className = e.target.className

        name==="delbtn" && setDel(true)
        className==="note" && setShowNote(pValue => {return !pValue})
    }

    return(
        <>
            <div className="note" onClick={handleClick}>
                <h2>{props.title.length>27 ? `${props.title.substring(0,27)}...` : props.title}</h2>
                <p>{props.text.length>60 ? `${props.text.substring(0,60)}.....` : props.text}</p>
                <button name="delbtn" onClick={handleClick}>delete</button>
            </div> 
            {del && <DeleteDialog setDel={setDel} delete={props.delete} id={props.id} del={del} />}
            {showNote && <ShowNote title={props.title} text={props.text} setShowNote={setShowNote} />}
        </>
    )
}

export default CreateNote;