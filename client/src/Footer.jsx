import React from "react"

function footer() {

    const year = new Date().getFullYear()

    return(    
        <footer>
            <h1>Copyright © {year}</h1>
        </footer>
    )
}

export default footer;