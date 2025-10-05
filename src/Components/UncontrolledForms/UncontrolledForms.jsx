import React, { useRef } from 'react';


const UncontrolledForms = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(emailRef.current.value)
        console.log(passwordRef.current.value)
    }
    return (
        
        <div>
            <form onSubmit={handleSubmit}>
                
                <input type="email" name="email" ref={emailRef} placeholder='Your E-Mail' required/> <br />
                <input type="password" name='password' ref={passwordRef} placeholder='Your Password'  required/><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default UncontrolledForms;