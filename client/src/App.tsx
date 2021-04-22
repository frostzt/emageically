import * as React from "react";
import { Switch, Route } from "react-router-dom";

// Pages
import Homepage from "./Pages/Homepage";

const App: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
    </Switch>
  );
};

export default App;
