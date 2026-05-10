import ParentFirst from "./parent-first.tsx";
import { ThemeContext } from '../../context/Context.ts';
const TestContext = () => {
    
    return<>
    <ThemeContext value={"blue"}>
    <div>
        <h1>Test Context</h1>
        <ParentFirst />
    </div>
    </ThemeContext>
    </> 
}

export default TestContext;