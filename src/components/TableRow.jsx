// Functional component for rendering a table row representing a contact
export default function TableRow({
  setContactObj, // Function to set the current contact object
  contactObj, // Object representing the contact information
  index, // Index of the contact in the array
  setUpdateForm, // Function to set the update form visibility
  deleteContact, // Function to delete a contact
}) {
  return (
    <>
      {/* Table row */}
      <tr>
        {/* Table data for displaying the index */}
        <th className="border border-black" scope="row">
          {index + 1}
        </th>
        {/* Table data for displaying the contact's name */}
        <td className="border border-black">{contactObj.name}</td>
        {/* Table data for displaying the contact's phone number */}
        <td className="border border-black">{contactObj.phone}</td>
        {/* Table data for displaying the update contact icon */}
        <td className="border border-black">
          {/* Icon for updating contact information */}
          <i
            onClick={() => {
              // Function to toggle update form visibility
              setUpdateForm((prev) => {
                // If update form is already visible, reset contactObj to empty
                if (prev) {
                  setContactObj({ name: "", phone: "" });
                }
                // Toggle update form visibility
                return (prev = !prev);
              });
              // Set contactObj to the current contact for update
              setContactObj({ ...contactObj });
            }}
            className="bi bi-pencil-square me-3 fs-5 text-primary"
          ></i>
        </td>
        {/* Table data for displaying the delete contact icon */}
        <td className="border border-black">
          {/* Icon for deleting contact */}
          <i
            onClick={() => {
              // Function to delete the current contact
              deleteContact(contactObj);
            }}
            className="bi bi-trash fs-5 text-danger"
          ></i>
        </td>
      </tr>
    </>
  );
}
