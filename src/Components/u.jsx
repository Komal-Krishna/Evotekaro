import React, { useState, useEffect, Fragment } from "react";
import { nanoid } from "nanoid";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";
//import { v4 as uuid } from 'uuid';
import Side from "./Side";
import "./CSS/U.css"



export const U = ({onFormSwitch}) => {
    const [contacts, setContacts] = useState([]);
  
    useEffect(() => {
      fetch('http://localhost:8000/user/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('SavedToken')
        }
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Request failed');
          }
          return response.json();
        })
        .then(data => {
          setContacts(data);
          
        })
        .catch(error => {
          console.log("Error", error);
        });
    }, []);
  
  
  //for adding data in add contacts
    const [addFormData, setAddFormData] = useState({
      name: "", 
      batch:parseInt(),
      password:"",
      department: "",
      email: "",
  
    });
  
    const [editFormData, setEditFormData] = useState({
      name: "",
      batch:parseInt(),
      department: "",
      email: "",
      password:"",
    });
  
    const [editContactId, setEditContactId] = useState(null);
  
    //when ever the form changes it will call this function (add contact form)
    const handleAddFormChange = (event) => {
      event.preventDefault();
  
      const fieldName = event.target.getAttribute("name"); //gets the  name attribute from the input field
      const fieldValue = event.target.value;
  
      const newFormData = { ...addFormData }; //copyying values from addformdata to newformdata
      newFormData[fieldName] = fieldValue;
  //selecting the field name and assigning the field value to it
      setAddFormData(newFormData);
    };
  
    const handleEditFormChange = (event) => {
      event.preventDefault();
  
      const fieldName = event.target.getAttribute("name");
      const fieldValue = event.target.value;
  
      const newFormData = { ...editFormData };
      newFormData[fieldName] = fieldValue;
  
      setEditFormData(newFormData);
    };
  //called when add button is clicked in add contact form
  
  
  const handleAddFormSubmit = async (event) => {
    event.preventDefault(); // prevents the page from reloading when submit button is clicked[or to stop making post request when it's submitted]
    
    const newContact = {
      id: nanoid(),
      name: addFormData.name,
      email: addFormData.email ,
      password: "pass",
      department: addFormData.department === "bcs" || addFormData.department === "bec" || addFormData.department === "bcy" || addFormData.department==="bcd" ? addFormData.department : alert("Wrong department input"),
      batch: addFormData.batch >= 2019 ? addFormData.batch : alert("Wrong batch input"),
      isAdmin:"False"  
    };
    
  let response;
    try {
      if (!addFormData.email.endsWith("iiitkottayam.ac.in")) {
        throw new Error('Error: Invalid email. Only emails with the domain "iiitkottayam.ac.in" are allowed.');
      }
      const response = await fetch('http://localhost:8000/user/', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem("SavedToken"),
        },
        body: JSON.stringify(newContact),
      });
      if (!response.ok) {
        throw new Error('Error: ' + response.status);
      }
      const data = await response.json();
      setContacts([...contacts, data]);
      setAddFormData({
        name: '',
        batch:parseInt(),
        department: '',
        email: '',
      });
    } catch (error) {
      console.error(error);
      if (response && response.text) {
        const errorMessage = await response.text(); // Get the error message from the response body
      console.error(errorMessage); // Log the specific error message
      // Perform additional error handling as needed
      }
      
    }
  };
  
  const handleEditFormSubmit = async (event) => {
    event.preventDefault();
  
    const editedContact = {
      id: editContactId,
      name: editFormData.name,
      password: 1234, // remove this
      batch: editFormData.batch >= 2019 ? editFormData.batch : null,
      department: editFormData.department === "bcs" || editFormData.department === "bec" || editFormData.department === "bcy" || editFormData.department==="bcd" ? editFormData.department : alert("Wrong department input"),
      email: editFormData.email,
      isAdmin:"False"
    };
  
    try {
      if (!editFormData.email.endsWith("iiitkottayam.ac.in")) {
        throw new Error('Error: Invalid email. Only emails with the domain "iiitkottayam.ac.in" are allowed.');
      }
  
      const response = await fetch(`http://localhost:8000/user/${editContactId}`, {
        method: 'PUT', // or 'PATCH' depending on your API's requirements
        headers: {
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('SavedToken')
        },
        body: JSON.stringify(editedContact),
      });
  
      if (!response.ok) {
        throw new Error('Error: ' + response.status);
      }
  
      // Update the contacts state with the edited contact
      const updatedContacts = contacts.map((contact) => {
        if (contact.id === editContactId) {
          return editedContact;
        }
        return contact;
      });
  
      setContacts(updatedContacts);
      setEditContactId(null);
    } catch (error) {
      console.error(error);
      // Handle the error accordingly
    }
  };
  
    const handleEditClick = (event, contact) => { //contact bec we need to know the contact id to checkwhich row is editable
      event.preventDefault();
      setEditContactId(contact.id);
  
      const formValues = {
        name: contact.name,
       batch:contact.batch,
        department: contact.department,
        email: contact.email,
      };
  
      setEditFormData(formValues);
    };
  
    const handleCancelClick = () => {
      setEditContactId(null);
    };
  
    const handleDeleteClick = async (contactId) => {
      const newContacts = [...contacts];
      
      
      try {
        const response = await fetch(`http://localhost:8000/user/${contactId}`, {
          method: 'DELETE',
          headers: {
            'Authorization': localStorage.getItem('SavedToken')
          },
        });
    
        if (!response.ok) {
          throw new Error('Error: ' + response.status);
        }
    
        const index = contacts.findIndex((contact) => contact.id === contactId);
        newContacts.splice(index, 1);
        setContacts(newContacts);
      } catch (error) {
        console.error(error);
        // Handle the error accordingly
      }
    };
   
    return(
      <div className='A'>
         <div className='side'>
         <Side change={onFormSwitch} ></Side>
        </div>
        <div className="container">
      <h1 className="h">Student Details</h1>
      
      <form onSubmit={handleEditFormSubmit} className="f"> 
        
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>batch</th>
              <th>Department</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? ( // if editcontactid is equal to contact id then we can edit editable row else it will be readonly row ie, can't edit
                  <EditableRow //we can't wrap editablerow in form tag because a form can't be child of tbodyt
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      <h2>Add a Contact</h2>
      <form onSubmit={handleAddFormSubmit} className="f" >
        <input
          type="text"
          name="name"
          className="in"
          required="required"
          placeholder="Name"
          onChange={handleAddFormChange}
        />
         <input
        type="text"
        name="batch"
        className="in"
        required="required"
        placeholder="batch"
        onChange={handleAddFormChange}
        />

        <input
          type="text"
          name="department"
          required="required"
          className="in"
          placeholder="Department"
          onChange={handleAddFormChange}
        />
       
       <input
          type="email"
          name="email"
          required="required"
          placeholder="Email"
          className="in"
          onChange={handleAddFormChange}
        />
       
        <button type="submit" className="on">Add</button>
      </form>
    </div>    
      </div>
   )
}