//* React Imports
import { useEffect } from "react";

//* CSS Imports
import "./css/Home.scss";

//* React Component
const Home = (props) => {

  //! Page Title
  useEffect(()=> {
    document.title = props.title;
  }, [props.title])

  return (
    <main className="Home">
      Home...
    </main>
  )
}

export default Home;