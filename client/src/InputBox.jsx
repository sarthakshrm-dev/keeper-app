import React, { useState } from 'react';
import axios from "axios"
import { motion } from 'framer-motion'

function InputBox(props) {

    const [input,setInput] = useState({title : "", text : ""})

    function sendNotes() {

        axios.post('http://localhost:5000/keeper/create', {
    
          title: input.title,
          text:input.text
        })
    }

    function handleChange(event) {

        var {name, value} = event.target;

        setInput(pValue => {

            return {...pValue, [name]: value}
        })
    }

    function handleClick(e) {

        e.preventDefault()

        sendNotes()

        const name = e.target.name

        name==='btn' && props.addNote(input)
        
        setInput({title: "", text: ""})
        
        props.setInput(pValue => {return !pValue})
    }

    const boxAnim = {hidden: {width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#f3d595'},
                    visible: {width: '700px', height: '630px', borderRadius: '20px', backgroundColor: '#FFFFFF', transition: {duration: 0.3}}}
                    
    const contentAnim = {hidden: {opacity:0}, visible: {opacity: 1, transition: {delay:0.2}}}

    return(
        <>
            <motion.div variants={boxAnim} initial="hidden" animate="visible" className='add'>
                <motion.div variants={contentAnim} initial="hidden" animate="visible">
                    <button name='btn' onClick={handleClick} className='inputhead'>ADD NOTE!</button>
                </motion.div>
                <motion.div className='form' variants={contentAnim} initial="hidden" animate="visible">
                    <input className='inputtitle' value={input.title} onChange={handleChange} name="title" placeholder='TITLE' type="text" required/>
                    <textarea className='inputtext' value={input.text} onChange={handleChange} name='text' type="textarea" placeholder='Type Your Note...'required/>
                </motion.div>
            </motion.div>
            <motion.div onClick={handleClick} animate={{backgroundColor: 'rgba(1, 1, 1, 0.3)'}} className='window'>
            </motion.div>
        </>
    )
}

export default InputBox;