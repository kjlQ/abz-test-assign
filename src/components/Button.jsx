import React from 'react'

const Button = ({disable , type , title,action}) => {
    return(
        <div onClick={action} className={!disable ? 'button' : 'button disable'}>
            <button type={type}>{title}</button>
        </div>
    )
}
export default Button