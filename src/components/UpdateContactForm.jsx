

import Button from "./Button"; // Importing Button component
import LoadingButton from "./LoadingButton"; // Importing LoadingButton component

// Functional component for rendering a form to update contact information
export default function UpdateContactForm({
  isContactUpdated, // Boolean indicating if contact is updated
  updateContact, // Function to update contact information
  setContactObj, // Function to set the current contact object
  contactObj, // Object representing the contact information
}) {
  return (
    <>
      {/* Form for updating contact information */}
      <div className="row g-3 my-3">
        {/* Input field for entering updated contact name */}
        <div className="col">
          <input
            value={contactObj.name}
            onChange={(e) => {
              // Updating the contact object with the new name
              setContactObj({ ...contactObj, name: e.target.value });
            }}
            type="text"
            className="form-control"
            placeholder="Name"
            aria-label="Name"
          />
        </div>
        {/* Input field for entering updated contact phone number */}
        <div className="col">
          <input
            value={contactObj.phone}
            onChange={(e) => {
              // Updating the contact object with the new phone number
              setContactObj({ ...contactObj, phone: e.target.value });
            }}
            type="text"
            className="form-control"
            placeholder="Contact Number"
            aria-label="Contact Number"
          />
        </div>
        {/* Conditional rendering of either Button or LoadingButton based on isContactUpdated state */}
        {isContactUpdated ? (
          <Button text={"Update Contact"} fn={updateContact} /> // Button to update contact
        ) : (
          <LoadingButton /> // Loading button while contact is being updated
        )}
      </div>
    </>
  );
}
