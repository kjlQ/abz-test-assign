import React from "react";
const Input = ({register,name,error,validation}) => {

    return(
            <div className={'inputs__item'}>
                <input className={error  && 'error__has'} {...register(name,{...validation})} placeholder=" "/>
                <span>{name}</span>
                <div className="error">{error}</div>
            </div>

    )
}
export default Input