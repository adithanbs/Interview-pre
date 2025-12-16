import { Link } from "react-router-dom";

const DynamicFromUpdate = () => {

  return (
    <>
      <div>Dynamic From Update Page</div>
      <Link to="/">back to Home Page</Link>
      <h1>Dynamic Input Update</h1>
      <input type="text" placeholder="Type something..." />
      <button>Delete</button>
      <button>Add</button>
    </>
  );
};
export default DynamicFromUpdate;
