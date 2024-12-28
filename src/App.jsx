import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import NavBar from "./components/Navbar";
import LoginPage from "./components/LoginPage";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./auth/pages/PrivateRoute";

function App() {
  const user = useSelector((state) => state.user.user);

  return (
    <Router basename="/optin-contest">
      <Routes>
        <Route
          path="/login"
          element={user ? <Navigate to="/" /> : <LoginPage />}
        />
        <Route
          path="/"
          element={
            <PrivateRoute>
              {user && <NavBar userEmail={user.email} />}
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
