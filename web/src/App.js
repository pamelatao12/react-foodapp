import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProtectedRoute from "./common/components/ProtectedRoute";
import Home from "./pages/home/Home";
import SearchPage from "./pages/search/SearchPage";
import MyEvents from "./pages/events/MyEvents";
import Login from "./pages/login/Login";
import CreateAccount from "./pages/login/createAccount/CreateAccount";
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
          <Login />
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
