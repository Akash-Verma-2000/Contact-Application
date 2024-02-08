// Functional component for rendering a button
export default function Button({ fn, text }) {
  return (
    <>
      {/* Button element with onClick event handler and provided text */}
      <button onClick={fn} type="button" className="btn btn-primary">
        {text}
      </button>
    </>
  );
}
