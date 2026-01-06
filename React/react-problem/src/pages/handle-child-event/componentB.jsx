import React, { useImperativeHandle, forwardRef } from "react";

const ComponentB = forwardRef((props, ref) => {
    const handleClick = () => {
        console.log("Button in Component B clicked");
    };

    useImperativeHandle(ref, () => ({
        handleClick,
    }));

    return <div>Component B</div>;
});

export default ComponentB;