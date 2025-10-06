import React from 'react';
import UseInputField from '../UseInputField/UseInputField';

const CustomHookForm = () => {
    const [email, emailOnChange] = UseInputField('');
    const [name, nameOnChange] = UseInputField('');
    const [password, passwordOnChange] = UseInputField('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email,password,name)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Your Name' onChange={nameOnChange} value={name} /><br />
                <input type="email" onChange={emailOnChange} value={email} placeholder='Your E-Mail' required/> <br />
                <input type="password" name='password' onChange={passwordOnChange} value={password} placeholder='Your Password'  required/><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default CustomHookForm;