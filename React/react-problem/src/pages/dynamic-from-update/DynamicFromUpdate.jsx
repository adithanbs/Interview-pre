import { useState } from "react";
import { Link } from "react-router-dom";

const DynamicFromUpdate = () => {
const [fields, setFields] = useState([]);
const [inputValue, setInputValue] = useState({
  id: '',
name: '',
description: ''
});
const handleAdd = () => {
  const id = Math.random().toString(36).substr(2, 9);
  setFields([...fields, { ...inputValue, id }]);
  setInputValue({ id: '', name: '', description: '' });
};
  return (
<>
<div>
<input type='text' value={inputValue.name} name='name' placeholder="Type something..."  onChange={(e) => {
  setInputValue({...inputValue, name: e.target.value})
}}/>
<input type='text' value={inputValue.description} name='description' placeholder="Type something..."  onChange={(e) => {
  setInputValue({...inputValue, description: e.target.value})
}}/>
<button onClick={handleAdd}>button</button>
</div>
{fields?.map((field) => (
  <div key={field.id}>
    <h3>{field.name}</h3>
    <p>{field.description}</p>
    <button onClick={() => {
      const newList = [...fields];
      const del = newList.findIndex(((item) => item.id === field.id));
      newList.splice(del, 1);
      setFields(newList);
    }}>delete</button>
  </div>
))}
</>
  );
};
export default DynamicFromUpdate;

