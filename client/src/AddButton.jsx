import React, { useState } from "react";
import InputBox from './InputBox'

function AddButton(props) {

    const [input, setInput] = useState(false)

    function handleClick() {

        setInput(pValue => {return !pValue})
    }

    return(
        <>
            <button onClick={handleClick} className="addbtn">+</button>
            {input && <InputBox setInput={setInput} addNote={props.addNote} />}
        </>
    )
}

export default AddButton