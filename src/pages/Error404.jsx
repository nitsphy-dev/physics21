//* React Imports
import { useEffect } from "react";

//* CSS Imports
import "./css/Error404.scss";

//* React Component
const Error404 = (props) => {

  //! Page Title
  useEffect(()=> {
    document.title = props.title;
  }, [props.title])

  return (
    <main className="Error404">
      Error404...
    </main>
  )
}

export default Error404;