import React from 'react'
import main_photo from "../assets/images/main_photo.jpg";
import Button from "./Button";

const Info = ({registrationRef}) => {
    const handleSignUp = () => {
        registrationRef.current?.scrollIntoView({behavior: 'smooth'});
    };
    return(
        <div className="main" style={{backgroundImage:`url(${main_photo})`}}>
            <div className="main__info">
                <h1>Test assignment for front-end developer</h1>
                <h2>What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.</h2>
                <Button type="button" title="Sign up" action={handleSignUp}/>
            </div>
        </div>
    )
}
export default Info