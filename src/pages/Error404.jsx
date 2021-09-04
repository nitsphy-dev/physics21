//* React Imports
import { useEffect } from "react";

//* CSS Imports
import "./css/Error404.scss";

//* React Component
const Error404 = (props) => {
  //! Page Title
  useEffect(() => {
    document.title = props.title;
  }, [props.title]);

  return (
    <main className="Error404">
      <div className="error-main">
        <div class="fof">
          <h1>Error 404</h1>
        </div>
      </div>
      <h4>Page not found</h4>
      <p>
        The page you are looking for doesn't exist or an other error occured.{" "}
        <br />
        <a href="/">Go back to homepage.</a>{" "}
      </p>
    </main>
  );
};

export default Error404;
