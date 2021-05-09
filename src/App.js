import {BrowserRouter as HashRouter, Route, Switch} from "react-router-dom";
import Donate from "./views/Donate";
import {Redirect} from "react-router";
import Home from "./views/Home";

function App() {
    return (
        <div>
            <HashRouter>
                <Switch>
                    <Route exact path={"/"} component={Home} />
                    <Route path={"/donate"} component={Donate}/>
                    <Route path="*" render={() => <Redirect to={{pathname: "/"}} />} />
                </Switch>
            </HashRouter>
        </div>
    );
}

export default App;
