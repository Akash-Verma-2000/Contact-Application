import Loading from "./Loading"; // Importing Loading component
import TableRow from "./TableRow"; // Importing TableRow component

// Functional component for rendering a table of contact information
export default function Table({
  deleteContact, // Function to delete a contact
  contactArray, // Array containing contact objects
  setUpdateForm, // Function to set the update form visibility
  setContactObj, // Function to set the current contact object
  isContactDeleted, // Boolean indicating if contact is deleted
}) {
  return (
    <>
      {/* Conditional rendering of Loading component if contact deletion is in progress */}
      {isContactDeleted ? null : <Loading />}
      {/* Table element for displaying contact information */}
      <table className="table table-hover">
        <thead>
          {/* Table header */}
          <tr className="border border-black">
            <th className="border border-black" scope="col">
              #
            </th>
            <th className="border border-black" scope="col">
              Name
            </th>
            <th className="border border-black" scope="col">
              Contact
            </th>
            <th className="border border-black" scope="col">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {/* Mapping through contactArray to render TableRow for each contact */}
          {contactArray?.map((contactObj, index) => (
            <TableRow
              key={index}
              index={index}
              contactObj={contactObj}
              setUpdateForm={setUpdateForm}
              setContactObj={setContactObj}
              deleteContact={deleteContact}
              isContactDeleted={isContactDeleted}
            />
          ))}
        </tbody>
      </table>
      {/* Conditional rendering of message if no data is available */}
      {contactArray.length ? null : (
        <h2 className="text-primary text-center">No data to show.</h2>
      )}
    </>
  );
}
