import Button from "./Button"; // Importing Button component
import LoadingButton from "./LoadingButton"; // Importing LoadingButton component

// Functional component for rendering a form to add a contact
export default function Form({
  addContact, // Function to add a contact
  setContactObj, // Function to set contact object state
  contactObj, // State variable representing contact object
  isContactCreated, // Boolean indicating if contact is created
}) {
  return (
    <>
      <div className="row g-3 my-3">
        {/* Input field for entering contact name */}
        <div className="col">
          <input
            value={contactObj.name}
            onChange={(e) => {
              setContactObj({ ...contactObj, name: e.target.value }); // Updating contact name in state
            }}
            type="text"
            className="form-control"
            placeholder="Name"
            aria-label="Name"
          />
        </div>
        {/* Input field for entering contact phone number */}
        <div className="col">
          <input
            value={contactObj.phone}
            onChange={(e) => {
              setContactObj({ ...contactObj, phone: e.target.value }); // Updating contact phone number in state
            }}
            type="text"
            className="form-control"
            placeholder="Contact Number"
            aria-label="Contact Number"
          />
        </div>
        {/* Conditional rendering of either Button or LoadingButton based on isContactCreated state */}
        {isContactCreated ? (
          <Button text={"Add Contact"} fn={addContact} /> // Button to add contact
        ) : (
          <LoadingButton /> // Loading button while contact is being created
        )}
      </div>
    </>
  );
}
