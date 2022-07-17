import React from 'react'
import pic from '../../assets/img/avatardef.jpg'

function Avatar() {
    return (
        <div className="post__header-avatar">
            <img className="avatar" src={pic} alt="#" />
        </div>
    )
}


Avatar.defaultProps = {
    
}

export default Avatar