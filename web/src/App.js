import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProtectedRoute from "./common/components/ProtectedRoute";
import Home from "./home";
import SearchPage from "./searchPage";
import MyEvents from "./myEvents";
import SignedOutPage from "./signedOut";
import CreateAccount from "./signedOut/createAccount";
import { AuthenticationContextProvider } from "./common/authentication/context-provider";
import { ThemeInitializer } from "./themeInitializer";

// const App = () => {
//   return (
//     <Router>
//       <Switch>
//         <Route exact path="/">
//           <Home />
//         </Route>
//         <Route exact path="/search">
//           <SearchPage />
//         </Route>
//         <Route exact path="/events">
//           <MyEvents />
//         </Route>
//       </Switch>
//     </Router>
//   );
// };

const AppRouter = () => {
  return (
    <AuthenticationContextProvider>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <SignedOutPage />
        </Route>
        <Route path="/createAccount">
          <CreateAccount />
        </Route>
        <Route exact path="/search">
          <SearchPage />
        </Route>
        <ProtectedRoute exact path="/events">
          <MyEvents />
        </ProtectedRoute>
      </Switch>
    </AuthenticationContextProvider>
  );
};

const App = () => {
  return (
    <Router>
      <ThemeInitializer>
        <Switch>
          <Route path="/" component={AppRouter} />
        </Switch>
      </ThemeInitializer>
    </Router>
  );
};

export default App;
