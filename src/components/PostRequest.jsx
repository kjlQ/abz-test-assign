import React,{useEffect , useState} from 'react'
import Button from "./Button";
import axios from "axios";
import SelectPosition from "./SelectPosition";
import {getPos_token} from "../api/requests";
import Form from "./Form";
import success_img from '../assets/success-image.png'

const PostRequest = ({registrationRef,setCreated,created}) => {
    const [positions,setPositions] = useState()
    const [token,setToken] = useState()

    useEffect(()=> {
        getPos_token('position','token',setPositions,setToken)
    },[])

    return(
        <div className="request" ref={registrationRef}>
            {!created ?
                <>
                    <h1>Working with POST request</h1>
                    <Form setCreated={setCreated} token={token} positions={positions} />
                </>
                :
                <>
                    <h1>User successfully registered</h1>
                    <img className="created" src={success_img} alt=""/>
                </>
            }
        </div>
    )
}
export default PostRequest