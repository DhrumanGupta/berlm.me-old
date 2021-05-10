import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Donate from "./views/Donate";
import {Redirect} from "react-router";
import Home from "./views/Home";

function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path={"/"} component={Home}/>
                    <Route path={"/donate"} component={Donate}/>
                    <Route path="*" render={() => <Redirect to={{pathname: "/"}}/>}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
