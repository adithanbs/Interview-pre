import { useState } from "react";
import { Link } from "react-router-dom";

const DynamicFromUpdate = () => {
  const [fields, setFields] = useState([{ value: "" }]);

  return (
    <>
      <div>Dynamic From Update Page</div>
      <Link to="/">back to Home Page</Link>
      <h1>Dynamic Input Update</h1>
      {fields.map((field, index) => (
        <div>
          <input
            type="text"
            placeholder="Type something..."
            value={field.value}
            onChange={(event) => {
              setFields((prev) => {
                const newFields = [...prev];
                newFields[index].value = event.target.value;
                return newFields;
              });
            }}
          />
          <button
            onClick={() => {
              setFields((prev) => {
                const newFields = [...prev];
                newFields.splice(index, 1);
                return newFields;
              });
            }}
          >
            Remove
          </button>
        </div>
      ))}

      <button
        onClick={() => {
          setFields([...fields, { value: "" }]);
        }}
      >
        Add
      </button>
      <button
        onClick={() => {
          console.log(fields);
        }}
      >
        Submit
      </button>
    </>
  );
};
export default DynamicFromUpdate;
