import { Link } from "react-router-dom";

const Home = () => {
  return <>
  <div>Welcome to the Home Page!</div>
  <div>Use the links below to navigate to other pages.</div>
  <ul>
    <li><Link to="/list">List Page</Link></li>
    <li><Link to="/dynamic-form-update">Go to Dynamic Form Update Page</Link></li>
    <li><Link to="/lift">React Lift Page</Link></li>
   <li><Link to="/ref">Handle Child Event with Ref</Link></li>
  </ul>
  
  </>;

}
export default Home;       