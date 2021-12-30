import Home from "./pages/home/Home.jsx"
import Messenger from "./pages/messenger/Messenger.jsx";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
   <Router>
     <Switch>
       <Route exact path="/">
          <Home />
       </Route>
       <Route path="/messenger">
          <Messenger />
       </Route>
     </Switch>
   </Router>
  );
}

export default App;
