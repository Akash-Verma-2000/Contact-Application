import { useEffect, useState } from "react"; // Importing necessary hooks from React
import AddContactForm from "./components/AddContactForm"; // Importing AddContactForm component
import Table from "./components/Table"; // Importing Table component
import Loading from "./components/Loading"; // Importing Loading component
import UpdateContactForm from "./components/UpdateContactForm"; // Importing UpdateContactForm component
import Error from "./components/Error"; // Importing Error component

function App() {
  // State variables to manage contact information and form states
  const [contactArray, setContactArray] = useState([]); // State variable to store contact information
  const [contactObj, setContactObj] = useState({ name: "", phone: "" }); // State variable to manage current contact object
  const [isContactCreated, setIsContactCreated] = useState(true); // State variable to track if contact is created successfully
  const [isContactUpdated, setIsContactUpdated] = useState(true); // State variable to track if contact is updated successfully
  const [isContactDeleted, setIsContactDeleted] = useState(true); // State variable to track if contact is deleted successfully
  const [isContactFetched, setIsContactFetched] = useState(true); // State variable to track if contact information is fetched successfully
  const [isErrorOccured, setIsErrorOccured] = useState(false); // State variable to track if any error occurred
  const [updateForm, setUpdateForm] = useState(false); // State variable to manage update form visibility

  // Function to delete a contact
  async function deleteContact(contactObj) {
    try {
      // Setting the state to indicate the deletion process
      setIsContactDeleted(false);
      // Mock API call to delete a contact
      await fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE',
      });

      // Filtering out the deleted contact from the contact array
      const updatedContacts = contactArray.filter(contact => contact.name !== contactObj.name && contact.phone !== contactObj.phone);
      // Updating the contact array state
      setContactArray(updatedContacts);
      // Setting the state to indicate successful deletion
      setIsContactDeleted(true);
    } catch (err) {
      // Setting error state if deletion fails
      setIsErrorOccured(true);
    }
  }

  // Function to update a contact
  async function updateContact() {
    try {
      // Setting the state to indicate the update process
      setIsContactUpdated(false);
      // Mock API call to update a contact
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/1`, {
        method: 'PUT',
        body: JSON.stringify(contactObj),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      const data = await res.json();

      // Updating the contact array with the updated contact information
      const updatedContactArray = contactArray.map(contact => {
        if (contact.id === contactObj.id) {
          return contactObj;
        }
        return contact;
      });

      // Updating state variables after successful update
      setContactArray(updatedContactArray);
      setUpdateForm(false);
      setContactObj({ name: "", phone: "" });
      setIsContactUpdated(true);
    } catch (err) {
      // Setting error state if update fails
      setIsErrorOccured(true);
    }

  }

  // Function to add a new contact
  async function addContact() {
    try {
      // Setting the state to indicate the creation process
      setIsContactCreated(false);
      // Mock API call to add a contact
      const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(contactObj),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });

      const data = await res.json();
      // Checking if contact information is provided before adding
      if (contactObj.name && contactObj.phone) {
        // Adding the new contact to the contact array
        setContactArray([data, ...contactArray]);
        setContactObj({ name: "", phone: "" })
      }
      // Setting the state to indicate successful creation
      setIsContactCreated(true);
    } catch (err) {
      // Setting error state if contact creation fails
      setIsErrorOccured(true);
    }
  }

  // Function to fetch contact information
  async function fetchContactInfo() {
    try {
      // Setting the state to indicate the fetch process
      setIsContactFetched(false)
      // Mock API call to fetch contact information
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      // Updating the contact array state with fetched data
      setContactArray(data);
      // Setting the state to indicate successful fetch
      setIsContactFetched(true)
    } catch (err) {
      // Setting error state if fetch fails
      setIsErrorOccured(true);
    }
  }

  // useEffect hook to fetch contact information on component mount
  useEffect(() => {
    fetchContactInfo();
  }, [])

  // Rendering components based on form state, contact array length, and error state
  return (
    <>
      <div className="topbar bg-primary py-2">
        <h2 className="text-center">Contact Application</h2>
      </div>
      <div className="container">
        {/* Conditional rendering of either update or add contact form */}
        {updateForm ? <UpdateContactForm
          isContactUpdated={isContactUpdated}
          updateContact={updateContact}
          setContactObj={setContactObj}
          contactObj={contactObj}
        /> : <AddContactForm
          addContact={addContact}
          setContactObj={setContactObj}
          contactObj={contactObj}
          isContactCreated={isContactCreated}
        />}

        {/* Conditional rendering of error component */}
        {isErrorOccured ? <Error /> : null}

        {/* Conditional rendering of table or loading component */}
        {isContactFetched ? <Table
          setContactObj={setContactObj}
          setUpdateForm={setUpdateForm}
          contactArray={contactArray}
          deleteContact={deleteContact}
          isContactDeleted={isContactDeleted}
        /> : <Loading />}
      </div>
    </>
  );
}

export default App;

