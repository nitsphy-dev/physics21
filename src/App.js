import React from "react";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Error404 from "./pages/Error404";
import Loading from "./components/Loading";

import "./App.css";

const Home = lazy(() => import("./pages/Home"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Admissions = lazy(() => import("./pages/Admissions"));
const Faculty = lazy(() => import("./pages/Faculty"));
const Phd = lazy(() => import("./pages/Phd"));
const Msc = lazy(() => import("./pages/Msc"));
const Btech = lazy(() => import("./pages/Btech"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <div className="App">
          <Navbar />

          <Switch>
            <Route exact path="/">
              <Home title="Physics Deptartment | NIT Silchar" />
            </Route>

            <Route exact path="/about-us">
              <AboutUs title="About Us - Physics Dept. | NIT Silchar" />
            </Route>

            <Route exact path="/admissions">
              <Admissions title="Admissions - Physics Dept. | NIT Silchar" />
            </Route>

            <Route exact path="/people/faculty">
              <Faculty title="Faculty - Physics Dept. | NIT Silchar" />
            </Route>

            <Route exact path="/programs/phd">
              <Phd title="Ph. D. - Physics Dept. | NIT Silchar" />
            </Route>

            <Route exact path="/programs/msc">
              <Msc title="M. Sc. - Physics Dept. | NIT Silchar" />
            </Route>

            <Route exact path="/programs/btech">
              <Btech title="B. Tech. - Physics Dept. | NIT Silchar" />
            </Route>

            <Route exact path="/gallery">
              <Gallery title="Gallery - Physics Dept. | NIT Silchar" />
            </Route>

            <Route path="/">
              <Error404 title="Error404 - Physics Dept. | NIT Silchar" />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </Suspense>
  );
}

export default App;
