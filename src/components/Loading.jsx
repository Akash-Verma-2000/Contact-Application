// Functional component for rendering a loading indicator
export default function Loading() {
  return (
    <>
      {/* Div containing a spinner for loading indication */}
      <div className="text-center text-primary">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>{" "}
          {/* Text for screen readers */}
        </div>
      </div>
    </>
  );
}
