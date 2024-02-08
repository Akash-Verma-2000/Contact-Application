// Functional component for rendering a loading button
export default function LoadingButton() {
  return (
    <>
      {/* Button with primary style and disabled state */}
      <button className="btn btn-primary" type="button" disabled>
        {/* Spinner indicating loading status */}
        <span
          className="spinner-border spinner-border-sm"
          aria-hidden="true"
        ></span>
        {/* Text indicating loading status */}
        <span role="status">Loading...</span>
      </button>
    </>
  );
}
