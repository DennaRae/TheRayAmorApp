import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./components/Login";
import AccountTypeStep from "./components/steps/Accounttypestep";
import Teacher from "./components/TeacherDashboard";
import Student from "./components/Studentdashboard";
import Dashboard from "./components/Rayamordashboard";
import Welcome from "./components/Welcome";
import  OnboardingFlow from "./components/Onboardingflow";
import TermsAndConditions from "./components/Termsandconditions";
import LuxuryHeroIntro from "./components/LuxuryHeroIntro";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/luxury" element={<LuxuryHeroIntro />} />
      <Route path="/account" element={<AccountTypeStep />} />
      <Route path="/login" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
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