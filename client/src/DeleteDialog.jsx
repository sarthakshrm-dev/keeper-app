import React from 'react'
import { motion } from "framer-motion"

function DeleteDialog(props) {

    function handleClick(event) {

        props.setDel(pValue => {return !pValue})

        event.target.name==='delete'&& (props.del && props.delete(props.id))
    }

    return (
        <>
            <div className='dialogcont'>
            <motion.div animate={{width: '450px', height: '150px'}} className='deletedialog'>
                    <h2>ARE YOU SURE?</h2>
                    <p>Are you sure you want to delete the selected note?</p>
                    <div>
                        <button name='delete' onClick={handleClick} className='dialogdel'>Delete</button>
                        <button onClick={handleClick} className='dialogclose'>Close</button>
                    </div> 
            </motion.div>
            </div>
            <motion.div onClick={handleClick} animate={{backgroundColor: 'rgba(1, 1, 1, 0.3)'}} className='window'>
            </motion.div>
        </>
    )
}

export default DeleteDialog