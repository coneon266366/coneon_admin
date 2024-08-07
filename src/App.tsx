import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import DashboardContainer from "./containers/DashboardContainer/DashboardContainer";
import LoginContainer from "./containers/LoginContainer/LoginContainer";
import { Dashboard, Home, Login } from "./Routes/Constants";

const isAuthenticated = (): boolean => {
  return !!localStorage.getItem("isLoggedIn");
};

interface AuthGuardedRouteProps {
  element: JSX.Element;
  path: string;
}

const AuthGuardedRoute: React.FC<AuthGuardedRouteProps> = ({
  element,
  ...rest
}) => {
  return isAuthenticated() ? (
    React.cloneElement(element, rest)
  ) : (
    <Navigate to={Login} replace />
  );
};

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path={Dashboard}
            element={
              <AuthGuardedRoute
                element={<DashboardContainer />}
                path={Dashboard}
              />
            }
          />

          <Route
            path={Login}
            element={
              isAuthenticated() ? <Navigate to={Home} /> : <LoginContainer />
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
