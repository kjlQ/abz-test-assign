import React from 'react'
import logo from "../assets/Logo.jpg";
import Button from "./Button";

const Header = ({usersRef,registrationRef}) => {
    const handleUsers = () => {
        usersRef.current?.scrollIntoView({behavior: 'smooth'});
    };
    const handleSignUp = () => {
        registrationRef.current?.scrollIntoView({behavior: 'smooth'});
    };
    return(
        <div className="header">
            <div className="container">
                <img src={logo} alt=""/>
                <div className="buttons">
                    <Button  type="button" title="Users" action={handleUsers}/>
                    <Button type="button" title="Sign up" action={handleSignUp}/>
                </div>
            </div>
        </div>
    )
}
export default Header
