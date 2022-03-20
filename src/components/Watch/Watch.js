import React, { useState } from 'react';
import Display from '../Display/Display';
import Tablet from '../Tablet/Tablet';

const Watch = () => {
    const [steps, setSteps] = useState(0);
    const increaseSteps = () => {
        setSteps(steps + 1)
    }

    return (
        <div style={{ border: '2px solid purple', margin: '20px' }}>
            <h2>This is smart watch</h2>
            <h3>My Current Steps: {steps}</h3>
            <button onClick={increaseSteps}>Dey Dour......</button>
            <Display name="garmin" steps={steps}></Display>
            <Tablet></Tablet>
        </div>
    );
};

export default Watch;