import React from 'react'
import { motion } from'framer-motion'

function ShowNote(props) {

    function handleClick() {

        props.setShowNote(pValue => {return !pValue})
    }
    
    return (
        <> 
            <div className='shownotecont'>
                <motion.div className='shownote' animate={{height: '630px', width: '700px'}}>
                    <h1>{props.title}</h1>
                    <h3>{props.text}</h3>
                </motion.div>
            </div> 
            <motion.div onClick={handleClick} animate={{backgroundColor: 'rgba(1, 1, 1, 0.3)'}} className='window'>
            </motion.div>
        </>
    )
}

export default ShowNote