import React from "react";
import pencil from "./pencil.png"
import bin from "./bin.png"


const ReadOnlyRow = ({ contact,handleEditClick,handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.name}</td>
      <td>{contact.year}</td>
      <td>{contact.batch}</td>
      <td>{contact.department}</td>
      <td>{contact.email}</td>

      
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
        <img src ={pencil}  style={{ width: '15px', height: '15px' }}></img>
        </button>
        <button type="button" 
        
        onClick={() => handleDeleteClick(contact.id)}
        >
          <img src ={bin} style={{ width: '20px', height: '15px' }}></img>
          
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;