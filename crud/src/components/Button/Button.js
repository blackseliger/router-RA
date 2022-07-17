import React from 'react'

function Button({onClick, classes, children}) {


    return (
        <button  onClick={onClick} name="delete" className={classes ? classes : 'button button_primary button_primary-delete'}>
            {children}
        </button>
    )
}

export default Button