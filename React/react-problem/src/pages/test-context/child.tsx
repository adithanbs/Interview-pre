import { useContext } from "react";
import { ThemeContext } from "../../context/Context.ts";


const Child = () => {
    const value = useContext(ThemeContext);
    console.log(value);
    return <div>
        <h1>Child</h1>
    </div>
}

export default Child;