import React from 'react'
import PropTypes from 'prop-types'
import delIcon from '../../assets/icons/handleDelete.svg'

function IconDelete({onBack}) {
    return (
        <div onClick={onBack} className="crud__createForm__wrapper-icon">
            <img src={delIcon} className="crud__createForm-icon"
                data-element="handleDelete" alt="delete" />
        </div>
    )
}

IconDelete.propTypes = {}

export default IconDelete
