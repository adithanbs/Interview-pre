import { Link } from "react-router-dom";

const Home = () => {
  return <>
  <ul>
    <li><Link to="/list">To Do List</Link></li>
    <li><Link to="/dynamic-form-update">Go to Dynamic Form Update Page</Link></li>
    <li><Link to="/lift">React Lift Page</Link></li>
   <li><Link to="/ref">Handle Child Event with Ref</Link></li>
   <li><Link to="/memory-leak">Memory Leak</Link></li>
    <li><Link to="/test-context">Test Context</Link></li>
    <li><Link to="/search-debounce">Search Debounce</Link></li>
    <li><Link to="/throttle">Throttle</Link></li>
  </ul>
  
  </>;

}
export default Home;       