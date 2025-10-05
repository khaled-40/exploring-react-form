import React from 'react';
const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name.value)
    console.log(e.target.email.value)
}

const SubmitForm = () => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' placeholder='Your Name' /><br />
                <input type="email" name="email" placeholder='Your E-Mail' /> <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SubmitForm;