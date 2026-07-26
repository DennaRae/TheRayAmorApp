import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./components/Login";
import Teacher from "./components/TeacherDashboard";
import Student from "./components/StudentDashboard";
import Dashboard from "./components/Rayamordashboard";
import  OnboardingFlow from "./components/Onboardingflow";
import TermsAndConditions from "./components/Termsandconditions";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
          <Route path="/onboarding" element={<OnboardingFlow />} />
  <Route path="/terms" element={<TermsAndConditions />} />

        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/student" element={<Student />} />
        <Route path="/teacher" element={<Teacher />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;