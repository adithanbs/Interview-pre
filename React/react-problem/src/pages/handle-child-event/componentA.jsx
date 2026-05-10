import React from "react";
import ComponentB from "./componentB";
export default function ComponentA() {
    const ref = React.useRef(null);
    return <>
    <ComponentB ref={ref} />
    <div>Component A</div>
    <button onClick={() => ref.current.handleClick()}>Click Me</button>
    </>;
}