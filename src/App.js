import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./sections/Search";
import Saved from "./sections/Saved";

// import Articles from "./sections/Articles";
// import Saved from "./sections/Saved";




const App = () => (
  <Router>
    <div>
      {/* <Navbar /> */}
      <Route exact path="/" component={Search} />
      <Route exact path="/saved" component={Saved} />
    </div>
  </Router>
)



export default App;