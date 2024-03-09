import { useState } from 'react';

const TableData = ({ Name, Id, Sal, Age }) => {
  const [sal, setSal] = useState(Sal);
  const [age, setAge] = useState(Age);
  const [isEditing, Editing] = useState(false);

  const Edit = () => {
    Editing(true);
  };

  const Save = () => {
    Editing(false);
  };

  const ChangeSal = (e) => {
    setSal(e.target.value);
  };

  const ChangeAge = (e) => {
    setAge(e.target.value);
  };

  return (
    <tr>
      <td>{Name}</td>
      <td>{Id}</td>

      <td>
        {isEditing ? (
          <input type="number" value={sal} onChange={ChangeSal} />
        ) : (
          sal
        )}
      </td>

      <td>
        {isEditing ? (
          <input type="number" value={age} onChange={ChangeAge} />
        ) : (
          age
        )}
      </td>

      <td>
        {isEditing ? (
          <button className='editbtn' onClick={Save}>Save</button>
        ) : (
          <button className='editbtn' onClick={Edit}>Edit</button>
        )}
      </td>
      
    </tr>
  );
};

export default TableData;
