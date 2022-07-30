import React from "react";
import SelectPosition from "./SelectPosition";
import Button from "./Button";
import Input from "./Input";
import {useForm} from "react-hook-form";
import {onSubmitHandler} from '../api/requests'
import {validation} from "../js/validation";


const Form = ({positions,token,setCreated}) => {

    const [fileName,setFileName] = React.useState([])

    function onChange(e) {
        setFileName(e.target.files[0]?.name);
    }

    const {register,handleSubmit , formState: { errors }} = useForm()

    const onSubmit = async ({position_id , name, email, phone, photo}) => {
        onSubmitHandler({position_id , name, email, phone, photo , setCreated , token})
    }



    return(
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                {console.log(errors)}
                <div className="inputs">
                    <Input validation={validation.name} error={errors?.name?.message} register={register} name="name"/>
                    <Input validation={validation.email} error={errors?.email?.message} register={register} name="email"/>
                    <Input validation={validation.phone} error={errors?.phone?.message} register={register} name="phone"/>
                </div>
                <div className="select">
                    <h2>Select your position</h2>

                    {positions?.map(item=><SelectPosition validation={validation.position_id} key={item.id} posName='position_id' register={register} {...item} />)}
                    <span className="error error__position">{errors?.position_id?.message}</span>

                    <div className={"select__position"}>
                        <label className="custom-file-upload">
                            <input accept="image/jpeg,image/jpg" {...register('photo',{...validation.photo})} className="input__hidden" type="file" name="photo" onChange={onChange} />
                            <div className={`${errors.photo && "error__has"} upload`}>Upload</div>
                            <span className="error error__image">{errors?.photo?.message}</span>
                        </label>
                        <div className={`${errors.photo && 'error__has'} file`}>
                            <span className={`${!fileName.length && 'upload__no-item'} 'file__name'`}>{fileName.length ? fileName : 'Upload your photo'}</span>
                        </div>
                    </div>
                </div>
                <Button type='submit' title="Sign up" />
            </form>
        </>
    )
}
export default Form