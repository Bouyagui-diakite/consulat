import React from "react";
import "./App.css";
import "./responsive.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/productScreen";
import NotFound from "./screens/NotFound";
import DemandeEffectue from "./Pages/DemandeEffectue";
import Appointement from "./Pages/Appointement";
import Historique from "./Pages/Historique";
import Register from "./components/users/Register";
import LogIn from "./components/users/LogIn";
import ConfirmPage from "./Pages/ConfirmPage";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/demandes" component={ProductScreen} />
          <Route path="/Demandes-effectues" component={DemandeEffectue} />
          <Route path="/rendez-vous" component={Appointement} />
          <Route path="/historique" component={Historique} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={LogIn}/>
          <Route path="/confirm" component={ConfirmPage}/>
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
