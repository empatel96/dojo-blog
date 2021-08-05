import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import NotFound from './NotFound'


function App() {
  return (
    // allows using router in the whole application
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          {/* defines where page content should go & only one route shows at one time */}
          <Switch>
            {/* route for each page */}
            <Route exact path="/">
              {/* nest home component */}
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            {/* will always match so is a catch-all */}
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
