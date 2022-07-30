import React from 'react'
import Tooltip from "./Tooltip";
import Preloader from "./Preloader";

const Card = ({name,email,phone,position,photo , isLoading}) => {
    return (
        <div className="user">
            <div className="user__info">
                {isLoading ?
                    <Preloader />
                    :
                    <img src={photo} alt=""/>
                }
                <div className="name">
                    {name}
                </div>
                <div className="position">
                    {position}
                </div>
                <div className="email">
                    <div className='tooltip'>
                        {email}
                        <Tooltip type="normal" text={email} />
                    </div>

                </div>
                <div className="phone">
                    {phone}
                </div>
            </div>
        </div>
    )
}
export default Card