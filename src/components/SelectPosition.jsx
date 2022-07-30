import React from "react";
const SelectPosition = ({name, id ,register, posName,validation}) => {
    return(
        <div className="select__position">
            <input value={id} {...register(posName,{...validation})} name={posName} type="radio"/>
            <span>{name}</span>
        </div>
    )
}
export default SelectPosition