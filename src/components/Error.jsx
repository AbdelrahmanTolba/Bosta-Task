import LinkButton from "./LinkButton";
import "../styles/error.css";
function NotFound() {
  return (
    <>
      <div className="error">
        <h1>Something went wrong 😢</h1>
        <LinkButton to="/">&larr; Go back</LinkButton>
      </div>
    </>
  );
}

export default NotFound;
