// Functional component for rendering an error message
export default function Error() {
  return (
    <>
      {/* Alert with a message indicating an error */}
      <div class="alert alert-danger" role="alert">
        Oop! Something went wrong, please refresh the page and try again.
      </div>
    </>
  );
}
