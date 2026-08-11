import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landingpage from "./pages/landingpage/Landingpage";
import Accountcreated from "./pages/accountcreated/Accountcreated";
import Signup from "./pages/signuppage/Signup";
import Login from "./pages/loginpage/Login";
import StudentProfile from "./pages/studentprofile/StudentProfile"
import Dashboard from "./pages/dashboard/Dashboard";
import SoftwareDeveloper from "./pages/softwaredeveloper/SoftwareDeveloper";
import Lawyer from "./pages/lawyer/Lawyer";
import Datascientist from "./pages/datascientist/Datascientist";
import Ca from "./pages/ca/Ca";
import Cfa from "./pages/cfa/Cfa";
import Doctor from "./pages/doctor/Doctor";
import Pilot from "./pages/pilot/Pilot";
import Ias from "./pages/ias/Ias";
import Army from "./pages/army/Army";
import Airforce from "./pages/airforce/Airforce";
import Navy from "./pages/navy/navy"
import Teacher from "./pages/teacher/Teacher"
import Actor from "./pages/actor/Actor"
import Archaeologist from "./pages/archaeologist/Archaeologist"
import Youtuber from "./pages/youtuber/Youtuber"
import Psychologist from "./pages/psychologist/Psychologist"
import VerifyEmail from "./pages/VerifyEmail";


function App() {
return (
  <BrowserRouter>

    <Routes>

      <Route
        path="/"
        element={<Landingpage />}
      />

      <Route
        path="/accountcreated"
        element={<Accountcreated />}
      />

      <Route
        path="/signup"
        element={<Signup />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/verify-email"
        element={<VerifyEmail />}
      />

      <Route
        path="/studentprofile"
        element={<StudentProfile />}
      />

      <Route
        path="/dashboard"
        element={<Dashboard />}
      />

      <Route
        path="/software-developer"
        element={<SoftwareDeveloper />}
      />
      <Route
        path="/lawyer"
        element={<Lawyer />}
      />
      <Route
        path="/datascientist"
        element={<Datascientist />}
      />
      <Route
        path="/ca"
        element={<Ca />}
      />
      <Route
        path="/cfa"
        element={<Cfa />}
      />
      <Route
        path="/doctor"
        element={<Doctor />}
      />
      <Route
        path="/pilot"
        element={<Pilot />}
      />
      <Route
        path="/ias"
        element={<Ias />}
      />
      <Route
        path="/army"
        element={<Army />}
      />
      <Route
        path="/airforce"
        element={<Airforce />}
      />
      <Route
        path="/navy"
        element={<Navy />}
      />
      <Route
        path="/teacher"
        element={<Teacher />}
      />
      <Route
        path="/actor"
        element={<Actor />}
      />
      <Route
        path="/archaeologist"
        element={<Archaeologist />}
      />
      <Route
        path="/youtuber"
        element={<Youtuber />}
      />
      <Route
        path="/psychologist"
        element={<Psychologist />}
      />

    </Routes>

  </BrowserRouter>
);
}

export default App;