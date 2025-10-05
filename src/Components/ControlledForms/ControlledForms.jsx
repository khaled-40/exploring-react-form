import React, { useState } from 'react';


const handleSubmit = (e) => {
    e.preventDefault();

}



const ControlledForms = () => {
    const [password,setPassword] = useState('')
    const [error,setError] =useState('');
    const handlePassword = (e) => {
    console.log(e.target.value)
    setPassword(e.target.value)
    console.log(password)


    if (e.target.value.length <= 6) {
        setError('Password should be bigger than 6 characters')
    }
    else{
        setError('')
    }
}
    return (
        <div>
            <form onSubmit={handleSubmit}>
                
                <input type="email" name="email" placeholder='Your E-Mail' required/> <br />
                <input type="password" name='password' onChange={handlePassword} value={password} placeholder='Your Password'  required/><br />
                <input type="submit" value="Submit" />
            </form>
            <p style={{color:'red'}}>
                {error}
            </p>
        </div>
    );
};

export default ControlledForms;