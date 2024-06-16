import { useState } from 'react';

function HeadingChange() {
    const [ heading, setHeading ] = useState('I like cookies');

    const clickHandler = () => {
        setHeading('I like pizza');
    }

    return (
        <>
            <button type="button" onClick={clickHandler}>Change heading text</button>
            <h1>{heading}</h1>
        </>
    )
}

export default HeadingChange;