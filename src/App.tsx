import AuthenticationLayout from "@/layouts/auth-layout";
import Layout from "@/layouts/layout";
import { MainLayout } from "@/layouts/main-layout";
import ProtectRoutes from "@/layouts/protected-route";
import { HomePage } from "@/routes/home-page";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Generate } from "./components/generate";
import { AboutPage } from "./routes/about-page";
import { ContactPage } from "./routes/contact-page";
import { CreateEditPage } from "./routes/create-edit-page";
import { Dashboard } from "./routes/dashboard";
import { Feedback } from "./routes/feedback";
import { MockInterviewPage } from "./routes/mock-interview-page";
import { MockLoadPage } from "./routes/mock-load-page";
import { ServicesPage } from "./routes/service-page";
import { SignInPage } from "./routes/sign-in";
import { SignUpPage } from "./routes/sign-up";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* public routes */}
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
        </Route>

        {/* authentication layout */}
        <Route element={<AuthenticationLayout />}>
          <Route path="/signin/*" element={<SignInPage />} />
          <Route path="/signup/*" element={<SignUpPage />} />
        </Route>

        {/* protected routes */}
        <Route
          element={
            <ProtectRoutes>
              <MainLayout />
            </ProtectRoutes>
          }
        >
          {/* add all the protect routes */}
          <Route element={<Generate />} path="/generate">
            <Route index element={<Dashboard />} />
            <Route path=":interviewId" element={<CreateEditPage />} />
            <Route path="interview/:interviewId" element={<MockLoadPage />} />
            <Route
              path="interview/:interviewId/start"
              element={<MockInterviewPage />}
            />
            <Route path="feedback/:interviewId" element={<Feedback />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
