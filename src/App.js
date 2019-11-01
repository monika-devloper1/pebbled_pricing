import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomeBanner from "./Component/HomeBanner";

import PriceMaster from "./Component/PriceMaster";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function AppComp() {
  return (
    <Router>
      <div>
       
        <div className="header">


  <a href="/Home" className="logo">CompanyLogo</a>
  <div className="header-right">
   <Link to="/">extensions</Link>
    <Link to="/">LEARN</Link>
     <Link to="/">COMMUNITY</Link>
      <Link to="/">SUPPORT</Link>
       <Link to="/Price">PRICING</Link>
     <a href="/"  className=" header-right buy event-initbtn" data-event-type="link" data-event-label="header: free trial">Try for Free ↓</a>
  </div>
</div>
       

        
        <Switch>
          <Route exact path="/About">
            <About />
          </Route>
           <Route exact path="/Home">
            <HomeBanner />
          </Route>
          <Route path="/Price">                                                                                                           
            <PriceMaster />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.



function About() {
  return (
    <div>
       </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
