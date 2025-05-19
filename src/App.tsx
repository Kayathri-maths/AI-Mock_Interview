import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/layout";
import MainLayout from "./layouts/main-layout";
import ProtectedRoute from "./layouts/protected-route";
import { HomePage, SignInPage, SignUpPage } from "./routes";
import { Dashboard } from "./routes/dashboard";
import { Generate } from "./views/generate";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
        <Route
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/generate" element={<Generate />}>
            <Route index element={<Dashboard />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
