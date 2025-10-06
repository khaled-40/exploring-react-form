import React, { useState } from 'react';

const UseInputField = () => {
    const [fieldValue, setFieldValue] = useState('')

    const handleOnChange = (e) => {
        setFieldValue(e.target.value)
    }
    return [fieldValue, handleOnChange]
};

export default UseInputField;